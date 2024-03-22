import React from "react";
import image1 from "../../assets/Side.svg";
import image2 from "../../assets/Services.svg";
import image3 from "../../assets/Services2.svg";
import image4 from "../../assets/Services3.svg";
import image5 from "../../assets/Services4.svg";
import User from "../../assets/user.svg";
import image6 from "../../assets/Services5.svg";
import image7 from "../../assets/Services6.svg";
import image8 from "../../assets/Services7.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Bidmap from "../../assets/bitmap.svg";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from '@mui/icons-material/Delete';

const About = () => {
  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center">
        <h1 className="text-[30px] font-[500] ">Orders</h1>
        <button className="w-[150px] rounded-md h-[50px] text-[white] text-[18px] bg-[#2563EB]">
          + Add order
        </button>
      </div>
      <div className="flex justify-between items-center mt-[40px] ">
        <div className="flex gap-[20px] items-center">
          <input
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
      <div>
        <table className="w-[100%] mt-[50px]">
          <thead>
            <tr className="border-b-[2px]">
              <th className="h-[50px] w-[16%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" name="" id="" />
                  <h1 className="text-[gray]">Order</h1>
                </div>
              </th>
              <th className="text-start text-[gray] h-[50px] w-[16%]">Date</th>
              <th className="text-start text-[gray] h-[50px] w-[16%]">
                Customer
              </th>
              <th className="text-start text-[gray] h-[50px] w-[16%]">
                Payment status
              </th>
              <th className="text-[gray] h-[50px] w-[16%] text-center">
                Order Status
              </th>
              <th className="h-[50px] w-[16%] text-start text-[gray]">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[70px] border-b-[2px]">
              <td className="w-[16%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" />
                  <h1 className="text-[18px] font-[400]">#12512B</h1>
                </div>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">May 5, 4:20 PM</h1>
              </td>
              <td className="text-[18px] font-[400]">Tom Anderson</td>
              <td>
                <button className="text-[18px] text-[#06A561] rounded-md font-[400] w-[100px] h-[40px] bg-[#C4F8E2]">
                  Paid
                </button>
              </td>
              <td className="text-center">
                <button className="text-[18px] w-[100px] h-[40px] bg-[#F99600] text-[white] rounded-md font-[400] block m-[auto]">
                  Ready
                </button>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">$49.90</h1>
              </td>
            </tr>
            <tr className="h-[70px] border-b-[2px]">
              <td className="w-[16%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" />
                  <h1 className="text-[18px] font-[400]">#12512B</h1>
                </div>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">May 5, 4:20 PM</h1>
              </td>
              <td className="text-[18px] font-[400]">Tom Anderson</td>
              <td>
                <button className="text-[18px] text-[#06A561] rounded-md font-[400] w-[100px] h-[40px] bg-[#C4F8E2]">
                  Paid
                </button>
              </td>
              <td className="text-center">
                <button className="text-[18px] w-[100px] h-[40px] bg-[#F99600] text-[white] rounded-md font-[400] block m-[auto]">
                  Ready
                </button>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">$49.90</h1>
              </td>
            </tr>
            <tr className="h-[70px] border-b-[2px]">
              <td className="w-[16%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" />
                  <h1 className="text-[18px] font-[400]">#12512B</h1>
                </div>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">May 5, 4:20 PM</h1>
              </td>
              <td className="text-[18px] font-[400]">Tom Anderson</td>
              <td>
                <button className="text-[18px] text-[#06A561] rounded-md font-[400] w-[100px] h-[40px] bg-[#C4F8E2]">
                  Paid
                </button>
              </td>
              <td className="text-center">
                <button className="text-[18px] w-[100px] h-[40px] bg-[#5A607F] text-[white] rounded-md font-[400] block m-[auto]">
                  Shipped
                </button>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">$49.90</h1>
              </td>
            </tr>
            <tr className="h-[70px] border-b-[2px]">
              <td className="w-[16%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" />
                  <h1 className="text-[18px] font-[400]">#12512B</h1>
                </div>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">May 5, 4:20 PM</h1>
              </td>
              <td className="text-[18px] font-[400]">Tom Anderson</td>
              <td>
                <button className="text-[18px] text-[#06A561] rounded-md font-[400] w-[100px] h-[40px] bg-[#C4F8E2]">
                  Paid
                </button>
              </td>
              <td className="text-center">
                <button className="text-[18px] w-[100px] h-[40px] bg-[#F99600] text-[white] rounded-md font-[400] block m-[auto]">
                  Ready
                </button>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">$49.90</h1>
              </td>
            </tr>
            <tr className="h-[70px] border-b-[2px]">
              <td className="w-[16%]">
                <div className="flex gap-[10px] items-center">
                  <input className="check" type="checkbox" />
                  <h1 className="text-[18px] font-[400]">#12512B</h1>
                </div>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">May 5, 4:20 PM</h1>
              </td>
              <td className="text-[18px] font-[400]">Tom Anderson</td>
              <td>
                <button className="text-[18px] text-[#06A561] rounded-md font-[400] w-[100px] h-[40px] bg-[#C4F8E2]">
                  Paid
                </button>
              </td>
              <td className="text-center">
                <button className="text-[18px] w-[100px] h-[40px] bg-[#5A607F] text-[white] rounded-md font-[400] block m-[auto]">
                  Shipped
                </button>
              </td>
              <td>
                <h1 className="text-[18px] font-[400]">$49.90</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;
