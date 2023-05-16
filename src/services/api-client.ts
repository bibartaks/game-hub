import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c320ee0c678c44a583df25828ed132ff",
  },
});
