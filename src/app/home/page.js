"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../config/constants";

const Home = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  const refreshAccesstoken = localStorage.getItem("refreshAccessToken");
  const isLoggedin = localStorage.getItem("isLoggedIn");
  console.log("isloggedin", isLoggedin);
  console.log("refreshAccessToken========", refreshAccesstoken);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      if (!localStorage.getItem("isLoggedIn")) {
        router.push("/login");
        return;
      }
      const token = localStorage.getItem("token");
      console.log("================token", token);
      const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${API_BASE_URL}user`, config);
      console.log(response.data.data[0].fullName);
      setUser(response.data.data[0].fullName);
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 403) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("token");
        router.push("/login");
      }
    }
  };

  return (
    <div>
      <Navbar />
      <h1>This is Home page.</h1>
      <br />
      <h1>welcome {user}</h1>
    </div>
  );
};

export default Home;
