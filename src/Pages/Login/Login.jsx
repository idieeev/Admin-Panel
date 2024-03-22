import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import GoogleIcon from "@mui/icons-material/Google";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logo from "../../assets/logo.svg";
import logo2 from "../../assets/logo2.svg";


import { useFormik } from "formik";
import { axiosRequest } from "../../utils/axiosRequest";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const API = "http://65.108.148.136:8072/";
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: async () => {
      try {
        let { data } = await axiosRequest.post(`Account/login`, formik.values);
        if (data.statusCode == 200) {
          saveToken(data.data);
          navigate("all");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <div>
      <div className="flex justify-between items-center h-[100vh]">
        <div className="bg-[#1C2536] w-[50%] h-[100%] pl-[100px] pr-[100px]">
          <h1 className="text-[25px] text-[white] pt-[300px] pl-[0px]">
            Welcome to admin panel
          </h1>
          <img src={logo2} alt="" />
        </div>
        <div className=" w-[50%] h-[100%] pl-[150px] pr-[150px] bg-[white]">
          <h1 className="text-[35px] font-[500] pt-[200px]">Log in</h1>
          <form onSubmit={formik.handleSubmit}>
            <input
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              placeholder="Email"
              className="w-[100%] block h-[60px] border-[2px] pl-[10px] text-[18px] text-[gray] outline-none rounded-md mt-[10px]"
              type="text"
            />
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-[100%] block h-[60px] border-[2px] pl-[10px] text-[18px] text-[gray] outline-none mt-[10px] rounded-md "
              placeholder="Password"
              type="text"
            />
            <button className="w-[100%] h-[60px] text-[18px] hover:text-[blue] font-sans font-[500] block m-[auto] mt-[10px] text-[#2563EB]">
              Forgot password?
            </button>
            <button type="submit" className="w-[100%] hover:bg-[blue] h-[60px] text-[18px] font-[500] font-sans mt-[10px] bg-[#2563EB] text-[white] rounded-md">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
