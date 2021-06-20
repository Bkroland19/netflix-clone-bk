import axios from "axios";
//api_key=

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//this allows us to use this outside
export default instance;
