import React, { useEffect, useState } from "react";
import { IconButton, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Bidmap from "../../assets/bitmap.svg";
import "../../App.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteProduct, getProductById } from "../../counters/counter";
import { getToken } from "../../utils/token";
import { Link } from "react-router-dom";

const Products = () => {
  let imageApi = "http://65.108.148.136:8072/images/";
  const dispatch = useDispatch();
  const product = useSelector((state) => state.profile.product);
  const [search, setSearch] = useState("");
  console.log(product);
  useEffect(() => {
    dispatch(getProductById());
  }, []);
  return (
    <main className="p-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-[500] ">Products</h1>
        <Link to={"/all/newproduct"}>
          <button className="w-[150px] rounded-md h-[50px] text-[white] text-[18px] bg-[#2563EB]">
            + Add order
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-[40px] ">
        <div className="flex gap-[20px] items-center">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-[200px] h-[50px] border-[2px] rounded-md pl-[10px] pr-[10px] outline-none text-[18px] font-[400] text-[gray]"
            placeholder="Search..."
            type="search"
            name=""
            id=""
          />
          <select
            className="w-[200px] h-[50px] border-[2px] rounded-md pl-[10px] pr-[10px] outline-none text-[18px] font-[400] text-[gray]"
            name=""
            id=""
          >
            <option value="">Nevest</option>
          </select>
        </div>
        <div className="flex gap-[20px] items-center">
          <div className="p-[10px] border-[2px] rounded-md cursor-pointer">
            <BorderColorIcon sx={{ color: "blue" }} />
          </div>
          <div className="p-[10px] border-[2px] rounded-md cursor-pointer">
            <DeleteIcon sx={{ color: "blue" }} />
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <table className="w-[100%]">
          <thead>
            <tr className="border-b-[2px]">
              <th className="h-[50px] text-start w-[20%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" name="" id="" />
                  <h1 className="text-[18px] text-[gray]">Product</h1>
                </div>
              </th>
              <th className="h-[50px] text-[18px] text-center text-[gray] w-[20%]">
                Inventory
              </th>
              <th className="h-[50px] text-[18px] text-center text-[gray] w-[20%]">
                Category
              </th>
              <th className="h-[50px] text-[18px] text-center text-[gray] w-[20%]">
                Price
              </th>
              <th className="h-[50px] text-[18px] text-center text-[gray] w-[20%]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.filter((e) => {return e.productName.toLowerCase().trim().includes(search);}).map((elem) => {
              return (
                <tr>
                  <td className="w-[20%] p-[10px] text-[center]">
                    <div className="flex gap-[10px] items-center w-[90%] m-[auto]">
                      <input className="check" type="checkbox" name="" id="" />
                      <img
                        className="rounded-lg w-[40%] object-cover"
                        src={`${imageApi}${elem.image}`}
                        alt=""
                      />
                      <h1 className="font-[500]">{elem.productName}</h1>
                    </div>
                  </td>
                  <td className="text-center font-[500] text-[18px]  w-[20%]">
                    {elem.discountPrice}
                  </td>
                  <td className="text-[18px] font-[500] text-center w-[20%]">
                    {elem.discountPrice}
                  </td>
                  <td className="text-center text-[18px] font-[500] w-[20%]">
                    ${elem.price}
                  </td>
                  <td className="text-[18px] w-[20%]">
                    <div className="flex items-center w-[100px] m-[auto]">
                      <Link to={"/all/editproduct"}>
                        <IconButton>
                          <BorderColorIcon
                            sx={{
                              color: "blue",
                              display: "block",
                              margin: "auto",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() => dispatch(deleteProduct(elem.id))}
                      >
                        <DeleteIcon
                          sx={{
                            color: "red",
                            display: "block",
                            margin: "auto",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Products;
