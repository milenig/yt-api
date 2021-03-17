import axios from "axios";

const KEY = "AIzaSyDc6PUoZrBTIJ391Y5r9JLeuVddvxTfAxI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
