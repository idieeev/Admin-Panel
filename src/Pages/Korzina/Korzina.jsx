import { Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBrands,deleteBrands,postBrands,editBrands } from "../../counters/counter";
import { useEffect, useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
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

const Korzina = () => {
  const dispatch = useDispatch();
  const [postBrand, setPostBrand] = useState("");
  const [putBrand, setPutBrand] = useState("");
  const [idx, setIdx] = useState();
  const brands = useSelector((state) => state.profile.brands);
  console.log(brands);

  useEffect(() => {
    dispatch(getBrands())
  }, [])

  
  const handleClick = () => {
    dispatch(
      postBrands(
        {
          BrandName: postBrand
        }
      )
    )
  }
  const handleClick2 = () => { 
    dispatch(
      editBrands(
        {
          Id: idx,
          BrandName:putBrand
        }
      )
    )
    handleCloseEditModal()
  };
  const [open, setOpen] = useState(false);
  const handleOpenEditModal = (elem) => (
    setPutBrand(elem.brandName),
    setIdx(elem.id),
    setOpen(true)
  );
  const handleCloseEditModal = () => setOpen(false);
  return (
    <div className="p-[30px]">
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
      </div>
      <div className="flex justify-between items-center">
        <div className="h-[300px] w-[48%] rounded-md">
          <table className="w-[100%]">
            <thead>
              <tr className="border-b-[2px]">
                <th className="text-start h-[50px] w-[80%] text-[gray]">
                  Brands
                </th>
                <th className="text-start h-[50px] w-[20%] text-[gray]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {brands.map((elem) => {
                return (
                  <tr className="border-b-[2px]">
                    <td className="h-[60px] text-[18px] font-[500]">
                      {elem.brandName}
                    </td>
                    <td>
                      <div>
                        <IconButton
                          onClick={() => dispatch(deleteBrands(elem.id))}
                        >
                          <DeleteIcon
                            sx={{ color: "red", width: "25px", height: "25px" }}
                          />
                        </IconButton>
                        <IconButton onClick={() => handleOpenEditModal(elem)}>
                          <BorderColorIcon
                            sx={{
                              color: "blue",
                              width: "25px",
                              height: "25px",
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
        <div className="p-[20px] border-[2px] w-[48%] h-[240px] rounded-md">
          <h1 className="text-[20px] font-[600]">Add new brand</h1>
          <input
            onChange={(e) => setPostBrand(e.target.value)}
            value={postBrand}
            placeholder="Brand name"
            className="w-[100%] h-[55px] pl-[10px] rounded-md border-[2px] mt-[15px] text-[18px] text-[gray] outline-none"
            type="text"
          />
          <Button
            onClick={() => handleClick()}
            sx={{
              width: "150px",
              height: "45px",
              marginTop: "10px",
              marginLeft: "330px",
            }}
            variant="contained"
          >
            Create
          </Button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleCloseEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-[20px]">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] text-[gray] font-[500]">
                Edit Brands
              </h1>
              <IconButton onClick={() => handleCloseEditModal()}>
                <CloseIcon sx={{ width: "30px", height: "30px" }} />
              </IconButton>
            </div>
            <div className="pt-[5px] pb-[5px]">
              <input
                onChange={(e) => setPutBrand(e.target.value)}
                value={putBrand}
                className="w-[100%] h-[50px] border-[2px] rounded-md pl-[10px] text-[18px] text-[gray] outline-none"
                type="text"
                placeholder="Category name"
              />
            </div>
            <div className="flex justify-between mt-[10px]">
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
export default Korzina;
