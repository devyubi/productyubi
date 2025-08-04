const photoURL = "https://dummyjson.com/photos";

const getPhotos = async () => {
  try {
    const res = await axios.get(photoURL);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 목록 한개만 호출
const getPhoto = async (id) => {
  try {
    const res = await axios.get(`${photoURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 한개 추가
const postPhoto = async (data) => {
  try {
    const res = axios.post(photoURL, data);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 삭제
const deletePhoto = async (id) => {
  try {
    const res = await axios.delete(`${photoURL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// 전체 업데이트
const putPhoto = async (id, data) => {
  try {
    const res = await axios.put(`${photoURL}/${id},data`);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

// 일부 수정
const patchPhoto = async (id, { title, completed }) => {
  try {
    const res = await axios.patch(`${photoURL}/${id},{title,completed}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export { getPhotos, getPhoto, postPhoto, putPhoto, deletePhoto, patchPhoto };
