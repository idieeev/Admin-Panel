import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logo from "../../assets/logo.svg";



const Registration = () => {
  return (
    <div>
      <div className="flex justify-between items-center pt-[20px] pb-[20px] border-b-[2px] pl-[100px] pr-[100px] sm:p-[10px]">
        <div className="sm:block hidden sm:w-[10%]">
          <MenuIcon />
        </div>
        <div className="block sm:w-[30%]">
          <img src={logo} alt="" />
        </div>
        <div className="flex gap-[30px] items-center sm:hidden">
          <Link to={"/all"}>
            <h1 className="text-[20px] font-[400] hover:border-[black] hover:border-b-[2px] hover:duration-500">
              Home
            </h1>
          </Link>
          <h1 className="text-[20px] font-[400] hover:border-[black] hover:border-b-[2px] hover:duration-500">
            Contact
          </h1>
          <Link to={"/all/about"}>
            <h1 className="text-[20px] font-[400] hover:border-[black] hover:border-b-[2px] hover:duration-500">
              About
            </h1>
          </Link>
          <Link to={"/login"}>
            <h1 className="h1 text-[20px] p-[5px] font-[400] hover:border-[black]  hover:border-b-[2px] hover:duration-500">
              Login
            </h1>
          </Link>
          <Link to={"/registration"}>
            <h1 className="text-[20px] font-[400] hover:border-[black] hover:border-b-[2px] hover:duration-500">
              Sign Up
            </h1>
          </Link>
        </div>
        <div className="flex w-[30%] sm:w-[30%] justify-between items-center">
          <div className="w-[60%] bg-[whitesmoke] rounded-lg sm:hidden ">
            <input
              placeholder="What are you looking for?"
              className="w-[80%] text-[gray] h-[40px] rounded-lg pl-[10px] bg-[whitesmoke] outline-none"
              type="text"
            />
            <SearchIcon sx={{ width: "20%" }} />
          </div>
          <div className="w-[30%] sm:w-[100%] gap-[15px] flex">
            <FavoriteBorderIcon sx={{ width: "30px", height: "30px" }} />
            <ShoppingCartIcon sx={{ width: "30px", height: "30px" }} />
            <PermIdentityIcon sx={{ width: "30px", height: "30px" }} />
          </div>
        </div>
      </div>
      <div className="p-[50px] sm:p-[10px]">
        <h1 className="text-[40px] font-[400] text-center">
          Create an account
        </h1>
        <h1 className="text-[18px] font-[400] pt-[10px] text-center">
          Enter your details below
        </h1>
        <div className="p-[10px] border w-[500px] m-[auto] mt-[20px] rounded-lg sm:w-[100%]">
          <input
            placeholder="Name"
            className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px]  border-[2px] rounded-lg pl-[10px]"
            type="text"
          />
          <input
            className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-lg pl-[10px]"
            placeholder="Email or phone number"
            type="text"
          />
          <input
            className="w-[80%] sm:w-[90%] text-[20px] text-[gray] mt-[10px] outline-none block m-[auto] h-[60px] border-[2px] rounded-lg pl-[10px]"
            placeholder="Password"
            type="password"
          />
          <input
            value={"Create Account"}
            className="w-[80%] sm:w-[90%] text-[18px] font-[600] text-[white] block m-[auto] bg-[red] rounded-lg h-[60px] mt-[30px]"
            type="button"
          />
          <button className="w-[80%] sm:w-[90%] text-[18px] font-[600]  block m-[auto] bg-[transparent] border-[2px] rounded-lg h-[60px] mt-[10px]">
            <GoogleIcon
              sx={{
                color: "black",
                width: "30px",
                height: "30px",
                marginRight: "10px",
              }}
            />
            Sign up with Google
          </button>
          <button className="w-[80%] text-[18px] font-[600]  block m-[auto]   rounded-lg h-[60px] mt-[10px]">
            Already have account?{" "}
            <Link to={"/"}>
              <span className="text-[20px] ml-[10px] border-b-[2px]">
                Log in
              </span>
            </Link>
          </button>
        </div>
      </div>
      <div className="pl-[100px] justify-between pr-[100px] flex pt-[30px] pb-[30px] bg-[black]  sm:p-[10px] sm:flex-wrap">
        <div className="w-[20%] text-[white] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Exclusive</h1>
          <h1 className="text-[18px] font-[600] pt-[10px]">Subscribe</h1>
          <h1 className="text-[17px] font-[400] pt-[10px]">
            Get 10% off your first order
          </h1>
          <div className="flex border-[2px] rounded-lg bg-[black] p-[10px] mt-[10px]">
            <input
              placeholder="Enter your email"
              className="w-[80%] rounded-lg bg-[black] outline-none text-[18px]"
              type="text"
            />
            <SendIcon />
          </div>
        </div>
        <div className="text-[white] w-[19%] sm:w-[100%] sm:p-[10px] ">
          <h1 className="text-[20px] font-[600]">Support</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            exclusive@gmail.com
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2]">
            +88015-88888-9999
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Account</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            My Account
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Cart
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Wishlist
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Shop
          </h1>
        </div>
        <div className="text-[white] w-[19%] sm:w-[45%] sm:p-[10px]">
          <h1 className="text-[20px] font-[600]">Quick Link</h1>
          <h1 className="text-[18px] font-[600] pt-[10px] text-[#c4c2c2]">
            Privacy Policy
          </h1>
          <h1 className="text-[17px] font-[600] pt-[10px] text-[#c4c2c2]">
            Terms Of Use
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            FAQ
          </h1>
          <h1 className="text-[16px] font-[400] text-[#c4c2c2] pt-[10px]">
            Contact
          </h1>
        </div>
        <div className="text-[white] w-[15%] sm:w-[100%] p-[10px]">
          <h1 className="text-[20px] font-[600]">Social</h1>
          <div className="flex gap-[20px] mt-[10px]">
            <FacebookIcon sx={{ width: "30px", height: "30px" }} />
            <TwitterIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
            <InstagramIcon sx={{ width: "30px", height: "30px" }} />
          </div>
        </div>
      </div>
      <div className="p-[20px] bg-[black] border-t-[1px] border-[gray]">
        <h1 className="text-[gray] text-center ">
          Copyright Rimel 2022. All right reserved
        </h1>
      </div>
    </div>
  );
};

export default Registration;
