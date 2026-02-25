import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
const List = ({ url }) => {
  const [list, setList] = useState([]);
  console.log(url);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFoodRemoval = async (id) => {
    try {
      const confirm = window.confirm("Are you sure you want to remove food");
      if (!confirm) {
        return;
      }

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
      <div className="list add flex-col">
        <p>All Foods List</p>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item, index) => {
            return (
              <div key={index} className="list-table-format">
                <img src={`${url}/image/${item.image}`} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price} Birr</p>
                <p
                  className="cursor"
                  onClick={() => handleFoodRemoval(item._id)}
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
