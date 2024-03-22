import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getBrands,
  getColor,
  getsubCategories,
  postProduct,
} from "../../counters/counter";
import divImage from "../../assets/Avatar.svg";

const NewProduct = () => {
  const [product, setProduct] = useState({
    Images: "",
    BrandId: "",
    ColorId: "",
    ProductName: "",
    Description: "",
    Quantity: "",
    Code: "",
    Price: "",
    HasDiscount: true,
    DiscountPrice: "",
    SubCategoryId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleDescriptionChange = (value) => {
    setProduct({
      ...product,
      Description: value,
    });
  };

  const handleChange1 = (e) => {
    const file = e.target.files[0];
    setProduct({
      ...product,
      Images: file,
    });
  };

  const colors = useSelector((state) => state.profile.color);
  const dispatch = useDispatch();
  console.log(colors);
  useEffect(() => {
    dispatch(getColor());
  }, []);

  const data5 = useSelector((state) => state.profile.brands);
  console.log(data5);
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  const data6 = useSelector((state) => state.profile.subCategories);
    console.log(data6);
  useEffect(() => {
    dispatch(getsubCategories());
  }, []);

  const [text, setText] = useState("");
  return (
    <>
      <div className="w-[95%] m-auto mt-[2%]">
        <div className="flex justify-between">
          <h1 className="text-[25px] font-[700] ">
            {" "}
            <Link to={"/all/product"}>
              <KeyboardBackspaceIcon />
            </Link>{" "}
            Products / Add new
          </h1>
          <div className="w-[40%] flex justify-between">
            <button className=" w-[20%] h-[40px] text-[#1E5EFF] border-[#1E5EFF] border rounded-[5px] bg-[white]">
              Cancel
            </button>
            <button
              onClick={() => dispatch(postProduct(product))}
              className=" w-[20%] h-[40px] bg-[#1E5EFF] text-[white]  rounded-[5px] "
            >
              Save
            </button>
            <button className=" w-[25%] h-[40px] bg-[#EFF6FF] text-[#1E5EFF] px-[5px]  border-[#1E5EFF] border rounded-[5px] ">
              Add order
            </button>
            <button className=" w-[28%] h-[40px] text-[white] bg-[#1E5EFF] px-[5px]  rounded-[5px] ">
              + Add order
            </button>
          </div>
        </div>

        <div className="w-[100%] flex justify-between">
          <div className="w-[65%]">
            <div className="flex justify-between mt-[3%]">
              <input
                value={product.ProductName}
                onChange={handleChange}
                name="ProductName"
                className="w-[70%] h-[50px] border rounded-[5px] pl-[10px] outline-none"
                placeholder="Product name"
                type="text"
              />
              <input
                value={product.Code}
                onChange={handleChange}
                name="Code"
                className="w-[25%] h-[50px] border rounded-[5px] pl-[10px] outline-none"
                placeholder="Code"
                type="text"
              />
            </div>
            <div className="mt-[5%]">
              <ReactQuill
                theme="snow"
                value={product.Description}
                onChange={handleDescriptionChange}
                className="h-[250px] border-[1px]"
                placeholder="Description"
              />
            </div>
            <div className="mt-[13%]">
              <h1 className="text-[20px] font-[700] ">price</h1>
            </div>
            <div className="flex justify-between mt-[2%]">
              <input
                value={product.Price}
                onChange={handleChange}
                name="Price"
                className="w-[32%] h-[50px] border rounded-[5px] px-[10px] outline-none"
                placeholder="Product price"
                type="number"
              />
              <input
                value={product.DiscountPrice}
                onChange={handleChange}
                name="DiscountPrice"
                className="w-[32%] h-[50px] border rounded-[5px] px-[10px] outline-none"
                placeholder="Discount"
                type="number"
              />
              <input
                value={product.Quantity}
                onChange={handleChange}
                name="Quantity"
                className="w-[32%] h-[50px] border rounded-[5px] px-[10px] outline-none"
                placeholder="Count"
                type="number"
              />
            </div>
            <div className="mt-[3%]">
              {/* <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                label="Add tax for this product"
              /> */}
            </div>
            <div className="flex justify-between border p-[5px] rounded-[5px] mt-[3%]">
              <div className="ml-[2%]">
                <h1 className="text-[18px] font-[600] ">Different Options</h1>
                <h1 className="text-[16px] font-[500] ">
                  This product has multiple options
                </h1>
              </div>
              {/* <FormControlLabel
                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              /> */}
            </div>
            {/* <div className="mt-[2%]">
            <h1 className='text-[20px] font-[700] '>price</h1>
        </div>
        <div className="flex justify-between mt-[2%] flex-wrap">
            <input className='w-[48%] mb-[2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Option 1' type="text" />
            <input className='w-[48%] mb-[2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Option 2' type="text" />
            <input className='w-[48%] mb-[2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Code' type="text" />
            <input className='w-[48%] mb-[2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Code' type="text" />

Хусрав, [09/03/24 14:09]

            <input className='w-[48%] mb-[2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Code' type="text" />
            <input className='w-[48%] mb-[2%] h-[45px] border rounded-[5px] px-[10px]' placeholder='Code' type="text" />
        </div> */}
            <button className="text-[#1E5EFF]  text-[16px] font-[700] mt-[2%]">
              + Add more
            </button>
            <div className="flex justify-between mt-[3%]">
              <div className="border border-[gray] p-[20px] rounded-md flex flex-col gap-5 w-[49%] overflow-y-scroll h-[400px]">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-bold">Categories</p>
                  <p
                    className="text-[18px]  text-[#1E5EFF] cursor-pointer"
                    onClick={() => {
                      setTheme(true), setCategoryModal(true);
                    }}
                  >
                    Create new +
                  </p>
                </div>

                {data6?.map((el) => (
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2 w-[80%]">
                      <input
                        value={el.id}
                        onClick={() => (product.SubCategoryId = el.id)}
                        type="radio"
                        name="category"
                        className="w-[20px] h-[20px]"
                      />
                      <p className="text-[18px] font-mono font-[600] w-[90%]">
                        {el.subCategoryName}
                      </p>
                    </div>
                    <div className="flex items-center w-[20%]"></div>
                  </div>
                ))}
              </div>
              <div className="border border-[gray] p-[20px] rounded-md flex flex-col gap-5 w-[49%] overflow-y-scroll h-[400px]">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-bold">Brands</p>
                  <p
                    className="text-[18px]  text-[#1E5EFF] cursor-pointer"
                    onClick={() => {
                      setBrandModal(true), setTheme(true);
                    }}
                  >
                    Create new +
                  </p>
                </div>

                {data5?.map((el) => (
                  <div className="flex justify-between items-center">
                    <div
                      key={el.id}
                      className="flex items-center gap-2 w-[80%]"
                    >
                      <input
                        value={el.id}
                        onClick={() => (product.BrandId = el.id)}
                        type="radio"
                        name="brand"
                        className="w-[20px] h-[20px] outline-none"
                      />
                      <p className="text-[18px] font-mono font-[600] w-[90%]">
                        {el.brandName}
                      </p>
                    </div>
                    {/* <div className='flex items-center w-[20%]'>
                        <IconButton onClick={() => {setBrandEditModal(true) , setTheme(true) , obj.brandName = el.brandName , obj.brandId = el.id}}>
                            <BorderColorOutlinedIcon color='info'/>
                          </IconButton>
                        <IconButton onClick={() => dispatch(deleteBrand(el.id))}>
                          <HighlightOffIcon color='error'/>
                        </IconButton>
                      </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[33%] mt-[2%]">
            <div className="p-[10px] border rounded-[5px]">
              <div className="p-[20px] border border-[gray] rounded-md">
                <div className="flex justify-between items-center">
                  <p className="text-[20px] font-bold">Colors:</p>
                  <p
                    className="cursor-pointer font-mono text-[#1E5EFF] text-[18px] font-[600]"
                    onClick={() => {
                      setTheme(true), setColorModal(true);
                    }}
                  >
                    Create New
                  </p>
                </div>
                <div className="mt-[20px] flex overflow-scroll">
                  {colors?.map((el) => (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => (product.ColorId = el.id)}
                        className="w-[50px] h-[40px] rounded-full focus:border-[2px] focus:border-[#1E5EFF] border border-[gray]"
                        style={{ backgroundColor: el.colorName }}
                      ></button>
                      <div className="flex flex-col items-center w-[20%]">
                        {/* <IconButton onClick={() => {obj.ColorName = el.colorName , obj.colorId = el.id , setColorEditModal(true) , setTheme(true)}}>
                            <BorderColorOutlinedIcon color='info'/>
                          </IconButton>
                        <IconButton onClick={() => dispatch(deleteColor(el.id))}>
                          <HighlightOffIcon color='error'/>
                        </IconButton> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-[10px] border rounded-[5px] mt-[7%]">
              <div className="">
                <h1 className="text-[20px] font-[600] ">Tags</h1>
              </div>
              <div className="flex justify-between mt-[5%]">
                <input
                  className="w-[80%] border rounded-[5px] h-[50px] pl-[10px] outline-none"
                  type="text"
                  placeholder="Tags name "
                />
                <button className="text-[#1E5EFF] border w-[18%] rounded-[5px] border-[#1E5EFF] ">
                  <DoneOutlineOutlinedIcon />
                </button>
              </div>
            </div>
            <div className="border border-dashed mt-5 border-[#ccc] p-[20px] rounded-md text-center">
              <label htmlFor="fileInput" className="block mb-3">
                <img
                  src={divImage}
                  alt="Drag and drop your image"
                  className="mx-auto w-[25%]"
                />
              </label>
              <input
                id="fileInput"
                onChange={handleChange1}
                type="file"
                accept="image/*"
                className="hidden"
              />
              <p className="text-[16px] font-[700]  mb-[5%]">
                Click to upload or drag and drop
              </p>
              <p className="text-gray-500 text-[14px]">
                (SVG, JPG, PNG, or gif maximum 900x400)
              </p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewProduct;
