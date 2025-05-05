// src/api.js
import axios from "axios";
import { useEffect, useState } from "react";

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
});

function ApiComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/api/users")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Users:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ApiComponent;
