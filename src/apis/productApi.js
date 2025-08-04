import axios from "axios";

const productURL = "https://dummyjson.com/products";

const getProducts = async () => {
  try {
    const res = await axios.get(productURL);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 목록 한개만 호출
const getProduct = async (id) => {
  try {
    const res = await axios.get(`${productURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 한개 추가
const postProduct = async (data) => {
  try {
    const res = axios.post(productURL, data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 삭제
const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`${productURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 전체 업데이트
const putProduct = async (id, data) => {
  try {
    const res = await axios.put(`${productURL}/${id},data`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// 일부 수정
const patchProduct = async (id, { title, completed }) => {
  try {
    const res = await axios.patch(`${productURL}/${id},{title,completed}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
  patchProduct,
};
