import React, { useEffect, useState } from "react";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import {
  getsubCategories,
  deleteSubCategories,
  postCategory,
  editSubCategories,
} from "../../counters/counter";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "@mui/icons-material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../../App.css";
import divImage from "../../assets/Avatar.svg";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 50,
  p: 1,
};

const Card = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const imageApi = "http://65.108.148.136:8072/images/";
  const categories = useSelector((state) => state.profile.subCategories);
  const [addCategoryName, setAddCategoryName] = useState("");
  const [addCategoryImage, setAddCategoryImage] = useState("");
  const [putCategoryName, setPutCategoryName] = useState("");
  const [idx, setIdx] = useState();
  console.log(categories);
  useEffect(() => {
    dispatch(getsubCategories());
  }, []);
  const handleClick = () => {
    dispatch(
      postCategory({
        CategoryImage: addCategoryImage,
        CategoryName: addCategoryName,
      })
    );
    setOpen(false);
  };
  const handleClick2 = () => {
    dispatch(
      editSubCategories({
        subCategoryName: putCategoryName,
        Id: idx,
      })
    );
    setOpen2(false);
  };
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpenAddModal = () => setOpen(true);
  const handleCloseAddModal = () => setOpen(false);
  const handleOpenPutModal = (elem) => {
    setPutCategoryName(elem.subCategoryName);
    setIdx(elem.id);
    setOpen2(true);
  };
  const handleClosePutModal = () => setOpen2(false);
  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[10px] items-center">
          <Link to={"/all/contact"}>
            <Button
              sx={{
                width: "150px",
                height: "50px",
                fontSize: "17px",
                color: "gray",
              }}
              variant="text"
            >
              Categories
            </Button>
          </Link>
          <Link to={"/all/korzina"}>
            <Button
              sx={{
                width: "120px",
                height: "50px",
                fontSize: "17px",
                color: "gray",
              }}
              variant="text"
            >
              Brands
            </Button>
          </Link>
          <Link to={"/all/cart"}>
            <Button
              sx={{
                width: "170px",
                height: "50px",
                fontSize: "17px",
                color: "gray",
              }}
              variant="text"
            >
              subcategories
            </Button>
          </Link>
        </div>
        <div>
          <Button
            onClick={() => handleOpenAddModal()}
            sx={{ width: "170px", height: "50px", fontSize: "17px" }}
            variant="contained"
          >
            +Add New
          </Button>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="h-[60px] w-[250px] flex items-center border-[2px] p-[10px] rounded-md">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-[100%] h-[100%] text-[18px] text-[gray] pl-[10px] outline-none"
            type="search"
            placeholder="Search..."
          />
          <SearchIcon sx={{ color: "gray", width: "30px", height: "30px" }} />
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-[30px]">
        {categories
          .filter((e) => {
            return e.subCategoryName.toLowerCase().trim().includes(search);
          })
          .map((elem) => {
            return (
              <div className="w-[19%] hover:bg-[whitesmoke] hover:duration-500 border-[2px] cursor-pointer flex justify-between p-[0px] rounded-md mt-[10px]">
                <div className="w-[70%] p-[10px]">
                  <h1 className="text-center pt-[10px] text-[18px] text-[gray]">
                    {elem.subCategoryName}
                  </h1>
                </div>
                <div className="w-[30%]">
                  <IconButton onClick={() => dispatch(deleteSubCategories(elem.id))}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      handleOpenPutModal(elem);
                    }}
                  >
                    <BorderColorIcon sx={{ color: "blue" }} />
                  </IconButton>
                </div>
              </div>
            );
          })}
      </div>
      <Modal
        open={open}
        onClose={handleCloseAddModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-[20px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] text-[gray] font-[500]">
                Add subCategory
              </h1>
              <IconButton onClick={() => handleCloseAddModal()}>
                <CloseIcon sx={{ width: "30px", height: "30px" }} />
              </IconButton>
            </div>
            <div className="pt-[5px] pb-[5px]">
              <input
                onChange={(e) => setAddCategoryName(e.target.value)}
                value={addCategoryName}
                className="w-[100%] h-[50px] border-[2px] rounded-md pl-[10px] text-[18px] text-[gray] outline-none"
                type="text"
                placeholder="Category name"
              />
            </div>
            <div className="flex justify-between">
              <Button
                onClick={() => {
                  handleClick();
                }}
                sx={{
                  width: "130px",
                  height: "45px",
                  display: "block",
                  marginLeft: "220px",
                }}
                variant="contained"
              >
                Creat
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={handleClosePutModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-[20px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] text-[gray] font-[500]">
                Edit category
              </h1>
              <IconButton onClick={() => handleClosePutModal()}>
                <CloseIcon sx={{ width: "30px", height: "30px" }} />
              </IconButton>
            </div>
            <div className="pt-[5px] pb-[5px]">
              <input
                value={putCategoryName}
                onChange={(e) => setPutCategoryName(e.target.value)}
                className="w-[100%] h-[50px] border-[2px] rounded-md pl-[10px] text-[18px] text-[gray] outline-none"
                type="text"
                placeholder="Category name"
              />
            </div>
            <div className="flex justify-between">
              <Button
                onClick={() => {
                  handleClick2();
                }}
                sx={{
                  width: "130px",
                  height: "45px",
                  display: "block",
                  marginLeft: "220px",
                }}
                variant="contained"
              >
                Creat
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default Card;
