import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "13%",
  right: "-7%",
  transform: "translate(-50%, -50%)",
  width:200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 1,
  backgroundColor: "transparent",
  outline:"none"
};
import "../App.css";
import { IconButton } from "@mui/material";
import { Home } from "@mui/icons-material";
import ListIcon from "@mui/icons-material/List";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";

import { getProfileById } from "../counters/counter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../utils/token";
import { destroyToken } from "../utils/token";
const Layout = () => {
  const navigate = useNavigate();
  const imageApi = "http://65.108.148.136:8072/images/";
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.data);
  console.log(profile);
  console.log(getToken().sid);
  useEffect(() => {
    dispatch(getProfileById(getToken().sid));
  }, []);
  function logOut() {
    navigate("/");
    dispatch(destroyToken("access_token"));
  }
  return (
    <div className="bg-[white]">
      <div>
        <div className="flex justify-between pt-[10px] pb-[10px] pl-[30px] pr-[30px] items-center bg-[#1C2536]">
          <div className="flex justify-between gap-[100px]">
            <img className="w-[200px] h-[60px]" src={logo2} alt="" />
            <div className="flex">
              <div className="flex items-center gap-[5px] w-[200px] ">
                <SearchIcon sx={{ color: "white" }} />
                <input
                  placeholder="Search..."
                  className="w-[80%] text-[18px] text-[white] h-[50px] outline-none bg-[transparent] pl-[10px]"
                  type="search"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => handleOpen()}
            className="text-[white] flex gap-[10px] items-center"
          >
            <IconButton>
              <NotificationsIcon
                sx={{ color: "white", width: "30px", height: "30px" }}
              />
            </IconButton>
            <div className="flex items-center gap-[10px] rounded-lg p-[5px] hover:bg-[#0f2b24] cursor-pointer">
              <div className="w-[60px] h-[60px] text-[20px] pt-[0px] text-center bg-[#00805e] text-[white] rounded-full">
                <img className="w-[100%] h-[100%] object-cover block m-[auto] rounded-full" src={`${imageApi}${profile.image}`} alt="" />
              </div>
              <h1 className="text-[18px] font-[500]">{profile.userName}</h1>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[20%] bg-[#1C2536] p-[30px] h-[200vh]">
            <Link to={"/all"}>
              <div className="tr flex p-[10px] cursor-pointer hover:bg-[#FFFFFF] rounded-md gap-[10px] mt-[10px]">
                <Home className="icon" sx={{ color: "white" }} />
                <h1 className="text text-[18px] font-[500] text-[white] hover:text-[black]">
                  Dashboard
                </h1>
              </div>
            </Link>
            <Link to={"order"}>
              <div className="tr flex p-[10px] cursor-pointer hover:bg-[#FFFFFF] rounded-md gap-[10px] mt-[10px]">
                <ListIcon className="icon" sx={{ color: "white" }} />
                <h1 className="text text-[18px] font-[500] text-[white] hover:text-[black]">
                  Orders
                </h1>
              </div>
            </Link>
            <Link to={"product"}>
              <div className="tr flex p-[10px] cursor-pointer hover:bg-[#FFFFFF] rounded-md gap-[10px] mt-[10px]">
                <ProductionQuantityLimitsIcon
                  className="icon"
                  sx={{ color: "white" }}
                />
                <h1 className="text text-[18px] font-[500] text-[white] hover:text-[black]">
                  Products
                </h1>
              </div>
            </Link>
            <Link to={"contact"}>
              <div className="tr flex p-[10px] cursor-pointer hover:bg-[#FFFFFF] rounded-md gap-[10px] mt-[10px]">
                <CategoryIcon className="icon" sx={{ color: "white" }} />
                <h1 className="text text-[18px] font-[500] text-[white] hover:text-[black]">
                  Categories
                </h1>
              </div>
            </Link>
          </div>
          <div className="w-[80%]">
            <Outlet />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1
            onClick={() => logOut()}
            className="text-[18px] cursor-pointer font-[500] p-[10px] rounded-md hover:bg-[whitesmoke] text-red-500"
          >
            Log Out
          </h1>
        </Box>
      </Modal>
    </div>
  );
};

export default Layout;
