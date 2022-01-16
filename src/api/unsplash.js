import axios from "axios";

const key =
  process.env.REACT_APP_CLIENT_ID ||
  "Client-ID OuCRmZ8EgK5v94qbkaawBc7wVj3mOlmGqfsdwYFAO-U";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: key,
  },
});
