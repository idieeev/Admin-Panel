import React, { useEffect,useState } from 'react'
import left from "../../assets/left.svg"
import right from "../../assets/right.svg";
import phone from "../../assets/phone.svg"
import computer from "../../assets/computer.svg";
import watch from "../../assets/watch.svg";
import camera from "../../assets/camera.svg";
import headphone from "../../assets/headphone.svg";
import gamepad from "../../assets/gamepad.svg";
import frame from "../../assets/frame.svg";
import frame2 from "../../assets/frame3.svg";
import zvezda from "../../assets/zvezda.svg";
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";
import image4 from "../../assets/image4.svg";
import image from "../../assets/image.svg";
import productImage from "../../assets/product.svg";
import time from "../../assets/time.svg";
import { Autoplay } from "swiper/modules";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  { month: "Jan", value: 400 },
  { month: "Feb", value: 300 },
  { month: "Mar", value: 600 },
  { month: "Apr", value: 800 },
  { month: "May", value: 700 },
  { month: "Jun", value: 900 },
  { month: "Jul", value: 600 },
  { month: "Aug", value: 400 },
  { month: "Sep", value: 500 },
  { month: "Oct", value: 300 },
  { month: "Nov", value: 200 },
  { month: "Dec", value: 400 },
];
// import { useDispatch, useSelector } from "react-redux";

// import { getData,postCard } from '../../counters/counter';
// import { Link } from 'react-router-dom';
// import { IconButton } from '@mui/material';


const Home = () => {
  // let imageApi = "http://65.108.148.136:8072/images/";


  // const dispatch = useDispatch();
  // const product = useSelector((state) => state.product.data);
  // useEffect(() => {
  //   dispatch(getData());
  // }, [])
  
  return (
    <div className="p-[20px]">
      <h1 className="text-[30px] font-[600] ">Dashboard</h1>
      <div className="flex justify-between items-center mt-[20px]">
        <div className="w-[63%]">
          <div className="flex justify-between ">
            <div className="w-[32%] flex gap-[20px] items-center p-[20px] bg-[#FEF3F2] rounded-3xl">
              <div>
                <img src={image1} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] font-[500] text-[gray]">Sales</h1>
                <h1 className="text-[30px] font-[500]">$152k</h1>
              </div>
            </div>
            <div className="w-[32%] flex gap-[20px] items-center p-[20px] bg-[#FFFAEB] rounded-3xl">
              <div>
                <img src={image2} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] font-[500] text-[gray]">Cost</h1>
                <h1 className="text-[30px] font-[500]">$99.7k</h1>
              </div>
            </div>
            <div className="w-[32%] flex gap-[20px] items-center p-[20px] bg-[#F0FDF9] rounded-3xl">
              <div>
                <img src={image3} alt="" />
              </div>
              <div>
                <h1 className="text-[18px] font-[500] text-[gray]">Profit</h1>
                <h1 className="text-[30px] font-[500]">$32.1k</h1>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[53vh] rounded-2xl border-[2px] mt-[20px] p-[20px]">
            <LineChart width={670} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="linear"
                dataKey="value"
                stroke="#1E5EFF"
                strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
        <div className="w-[35%] h-[70vh] border-[2px] rounded-xl p-[20px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[22px] font-[500]">Top selling products</h1>
            <div className="flex gap-[10px] items-center p-[10px] hover:bg-[whitesmoke] rounded-xl hover:duration-500 cursor-pointer">
              <h1 className="text-[18px]">See All</h1>
              <ArrowForwardIcon />
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] rounded-2xl hover:bg-[whitesmoke]">
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <h1 className="text-[19px] font-[500] ">Healthcare Erbology</h1>
              <h1 className="text-[18px] font-[500] text-[gray]">
                in Accessories
              </h1>
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-[#10B981]">13,153</h1>
              <h1 className="text-[17px] text-[gray]">in sales</h1>
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] rounded-2xl hover:bg-[whitesmoke]">
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <h1 className="text-[19px] font-[500] ">Healthcare Erbology</h1>
              <h1 className="text-[18px] font-[500] text-[gray]">
                in Accessories
              </h1>
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-[#10B981]">13,153</h1>
              <h1 className="text-[17px] text-[gray]">in sales</h1>
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] rounded-2xl hover:bg-[whitesmoke]">
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <h1 className="text-[19px] font-[500] ">Healthcare Erbology</h1>
              <h1 className="text-[18px] font-[500] text-[gray]">
                in Accessories
              </h1>
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-[#10B981]">13,153</h1>
              <h1 className="text-[17px] text-[gray]">in sales</h1>
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] rounded-2xl hover:bg-[whitesmoke]">
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <h1 className="text-[19px] font-[500] ">Healthcare Erbology</h1>
              <h1 className="text-[18px] font-[500] text-[gray]">
                in Accessories
              </h1>
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-[#10B981]">13,153</h1>
              <h1 className="text-[17px] text-[gray]">in sales</h1>
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] rounded-2xl hover:bg-[whitesmoke]">
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <h1 className="text-[19px] font-[500] ">Healthcare Erbology</h1>
              <h1 className="text-[18px] font-[500] text-[gray]">
                in Accessories
              </h1>
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-[#10B981]">13,153</h1>
              <h1 className="text-[17px] text-[gray]">in sales</h1>
            </div>
          </div>
          <div className="flex justify-between items-center p-[10px] rounded-2xl hover:bg-[whitesmoke]">
            <div>
              <img src={image4} alt="" />
            </div>
            <div>
              <h1 className="text-[19px] font-[500] ">Healthcare Erbology</h1>
              <h1 className="text-[18px] font-[500] text-[gray]">
                in Accessories
              </h1>
            </div>
            <div>
              <h1 className="text-[18px] font-[500] text-[#10B981]">13,153</h1>
              <h1 className="text-[17px] text-[gray]">in sales</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-[20px]">
        <div className="w-[48%] border-[2px] rounded-2xl p-[20px]">
          <h1 className="text-[20px] font-sans font-[500]">
            Recent Transactions
          </h1>
          <table className="w-[100%]">
            <thead>
              <tr className="border-b-[2px]">
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-start">
                  Name
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Date
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Amount
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Jagarnath S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  24.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $124.97
                </td>
                <td className="text-center w-[30%]">
                  <button className="text-[#06A561] w-[70%] h-[40px] bg-[#C4F8E2] rounded-md">
                    Paid
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Anand G.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  23.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $55.42
                </td>
                <td className="text-center w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70%] h-[40px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Kartik S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  23.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $89.90
                </td>
                <td className="text-center w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70%] h-[40px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[23%]">
                  Rakesh S.
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  22.05.2023
                </td>
                <td className="text-[18px] font-[500] text-center w-[23%]">
                  $144.94
                </td>
                <td className="text-center w-[30%]">
                  <button className="bg-[#E6E9F4] w-[70%] h-[40px] text-[#5A607F] rounded-md">
                    Pending
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-[48%] border-[2px] rounded-2xl p-[20px]">
          <h1 className="text-[20px] font-sans font-[500]">
            Top Products by Units Sold
          </h1>
          <table className="w-[100%]">
            <thead>
              <tr className="border-b-[2px]">
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-start">
                  Name
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Price
                </th>
                <th className="h-[50px] text-[18px] text-[gray] font-[400] text-center">
                  Units
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
              <tr>
                <td className="text-[18px] font-[500] h-[70px] w-[40%]">
                  <div className="flex gap-[10px] items-center">
                    <img src={image} alt="" />
                    <h1 className="text-[16px] font-[500]">Men Grey Hoodie</h1>
                  </div>
                </td>
                <td className="text-[18px] font-[500] text-center w-[30%]">
                  $124.97
                </td>
                <td className="text-center w-[30%] text-[18px] font-[500]">
                  204
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Home
