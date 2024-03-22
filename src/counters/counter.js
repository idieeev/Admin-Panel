import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosRequest } from "../utils/axiosRequest";
import { getToken } from "../utils/token";

const id = getToken().sid;

//PROFILE
export const getProfileById = createAsyncThunk(
  "project/getProfileById",
  async (id) => {
    try {
      let { data } = await axiosRequest.get(
        `UserProfile/get-user-profile-by-id?id=${id}`
      );
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
//CATEGORY
export const getCategories = createAsyncThunk(
  "project/getCategories",
  async () => {
    try {
      let { data } = await axiosRequest.get(`Category/get-categories`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const postCategory = createAsyncThunk(
  "project/postCategory",
  async (obj, { dispatch }) => {
    try {
      const form = new FormData();
      form.append("CategoryImage", obj.CategoryImage);
      form.append("CategoryName", obj.CategoryName);
      let { data } = await axiosRequest.post("Category/add-category", form, {
        "Content-Type": "multipart/form-data",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteCategory = createAsyncThunk(
  "project/deleteCategory",
  async (id) => {
    try {
      let { data } = await axiosRequest.delete(
        `Category/delete-category?id=${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
export const putCategories = createAsyncThunk(
  "todos/putCategories",
  async (obj, { dispatch }) => {
    try {
      console.log(obj);
      const form = new FormData();
      form.append("Id", obj.Id);
      form.append("CategoryImage", obj.CategoryImage);
      form.append("CategoryName", obj.CategoryName);
      let { data } = await axiosRequest.put("Category/update-category", form, {
        "Content-Type": "multipart/form-data",
      });
      dispatch(getCategories(data));
    } catch (error) {
      console.error(error);
    }
  }
);
// BRANDS
export const getBrands = createAsyncThunk("project/getBrands", async () => {
  try {
    let { data } = await axiosRequest.get(`Brand/get-brands`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
});
export const deleteBrands = createAsyncThunk(
  "project/deleteBrands",
  async (id) => {
    try {
      let { data } = await axiosRequest.delete(`Brand/delete-brand?id=${id}`);
    } catch (error) {
      console.log(error);
    }
  }
);
export const postBrands = createAsyncThunk(
  "project/postBrands",
  async (obj, { dispatch }) => {
    try {
      const form = new FormData();
      form.append("BrandName", obj.BrandName);
      let { data } = await axiosRequest.post("Brand/add-brand", form, {
        "Content-Type": "multipart/form-data",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const editBrands = createAsyncThunk(
  "todos/editBrands",
  async (obj, { dispatch }) => {
    try {
      console.log(obj);
      const form = new FormData();
      form.append("Id", obj.Id);
      form.append("BrandName", obj.BrandName);
      let { data } = await axiosRequest.put("Brand/update-brand", form, {
        "Content-Type": "multipart/form-data",
      });
      dispatch(getBrands(data));
    } catch (error) {
      console.error(error);
    }
  }
);
// SUBCATEGORY
export const getsubCategories = createAsyncThunk(
  "project/getsubCategories",
  async () => {
    try {
      let { data } = await axiosRequest.get(`SubCategory/get-sub-category`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteSubCategories = createAsyncThunk(
  "project/deleteSubCategories",
  async (id) => {
    try {
      let { data } = await axiosRequest.delete(
        `SubCategory/delete-sub-category?id=${id}`
      );
    } catch (error) {
      console.log(error);
    }
  }
);
export const editSubCategories = createAsyncThunk(
  "todos/editSubCategories",
  async (obj, { dispatch }) => {
    try {
      console.log(obj);
      const form = new FormData();
      form.append("Id", obj.Id);
      form.append("SubCategoryName", obj.subCategoryName);
      let { data } = await axiosRequest.put("Brand/update-brand", form, {
        "Content-Type": "multipart/form-data",
      });
      dispatch(getBrands(data));
    } catch (error) {
      console.error(error);
    }
  }
);
//COLOR
export const getColor = createAsyncThunk("todos/getColor", async () => {
  try {
    let { data } = await axiosRequest.get("Color/get-colors");
    return data.data;
  } catch (error) {
    console.error(error);
  }
});

//PRODUCT
export const getProductById = createAsyncThunk(
  "todos/getProductById",
  async (_, { dispatch }) => {
    try {
      let { data } = await axiosRequest.get(
        `Product/get-products?UserId=${id}`
      );
      console.log(id);
      return data.data.products;
    } catch (error) {
      console.error(error);
    }
  }
);
export const postProduct = createAsyncThunk(
  "todos/postProduct",
  async (obj, { dispatch }) => {
    try {
      const form = new FormData();
      form.append("Images", obj.Images);
      form.append("BrandId", obj.BrandId);
      form.append("ColorId", obj.ColorId);
      form.append("ProductName", obj.ProductName);
      form.append("Description", obj.Description);
      form.append("Quantity", obj.Quantity);
      form.append("Code", obj.Code);
      form.append("Price", obj.Price);
      form.append("HasDiscount", obj.HasDiscount);
      form.append("DiscountPrice", obj.DiscountPrice);
      form.append("SubCategoryId", obj.SubCategoryId);
      let { data } = await axiosRequest.post("Product/add-product", form, {
        "Content-Type": "multipart/form-data",
      });
      console.log(data);
      dispatch(getProductById());
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "todos/deleteProduct",
  async (id, { dispatch }) => {
    try {
      let { data } = await axiosRequest.delete(
        `Product/delete-product?id=${id}`
      );
      dispatch(getProductById(data));
    } catch (error) {
      console.error(error);
    }
  }
);

export const counterSlice = createSlice({
  name: "project",
  initialState: {
    data: [],
    profile: [],
    categories: [],
    brands: [],
    subCategories: [],
    product: [],
    color: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileById.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
    builder.addCase(getsubCategories.fulfilled, (state, action) => {
      state.subCategories = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getColor.fulfilled, (state, action) => {
      state.color = action.payload;
    });
  },
});

export default counterSlice.reducer;
