import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
  });

  const submitFoodItem = (event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.name == "price") {
      value = parseFloat(value);
      setData((data) => ({ ...data, [name]: isNaN(value) ? "" : value }));
    } else {
      setData((data) => ({ ...data, [name]: value }));
    }
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const submit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", image);
      // formData.append("data", data);
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("price", Number(data.price));
      const response = await axios.post(`${url}/api/food/add`, formData, {});

      if (response.data.success) {
        setData({
          name: "",
          price: "",
          description: "",
          category: "",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="add">
        <form className="flex-col" onSubmit={submit}>
          <div className="add-img-upload flex-col">
            <p>Upload image</p>
            <label htmlFor="image" accept="image/*">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="" />
              ) : (
                <img src={assets.upload_area} alt="" />
              )}
            </label>
            <input
              type="file"
              id="image"
              hidden
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="add-product-name flex-col">
            <p>Product name</p>
            <input
              type="text"
              placeholder="Type here"
              onChange={submitFoodItem}
              value={data.name}
              name="name"
            />
          </div>
          <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea
              name="description"
              rows="6"
              onChange={submitFoodItem}
              value={data.description}
              placeholder="Write content here"
              required
            ></textarea>
          </div>
          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Product Category</p>

              <select
                name="category"
                onChange={submitFoodItem}
                value={data.category}
              >
                <option value="">Category</option>
                <option value="ቁርስ">ቁርስ</option>
                <option value="ምሳ">ምሳ</option>
                <option value="የፍስክ">የፍስክ</option>
                <option value="ጁስ መጠጦች">ጁስ መጠጦች</option>
                <option value="ለስላሳ መጠጦች">ለስላሳ መጠጦች</option>
                <option value="ትኩስ መጠጦች">ትኩስ መጠጦች</option>
                <option value="ፓስታ">ፓስታ</option>
                <option value="ኑድልስ">ኑድልስ</option>
              </select>
            </div>
            <div className="add-price flex-col">
              <p>Price</p>
              <input
                type="number"
                onChange={submitFoodItem}
                value={data.price}
                name="price"
              />
            </div>
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
