import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = ({ url }) => {
  const [foodData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFoodRemoval = async (id) => {
    try {
      const remove = await axios.post(`${url}/api/food/remove`, {
        id,
      });

      if (remove.data.success) {
        toast.success(remove.data.message);
      } else {
        toast.error(remove.data.message);
      }
      fetchData();
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <td>image</td>
              <td>name</td>
              <td>description</td>
              <td>price</td>
              <td>category</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {foodData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={`http://localhost:4000/image/${item.image}`}
                      alt=""
                      width={40}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td onClick={() => handleFoodRemoval(item._id)}>x</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
