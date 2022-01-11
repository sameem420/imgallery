import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID OuCRmZ8EgK5v94qbkaawBc7wVj3mOlmGqfsdwYFAO-U",
  },
});
