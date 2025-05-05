// src/api.js
import axios from "axios";
import { useEffect, useState } from "react";

const API = axios.create({
  baseURL: import.meta.env.VITE_API,
});

function ApiComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/api/users")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  // return null;(
  //   <>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </>
  // );
}

export default ApiComponent;
