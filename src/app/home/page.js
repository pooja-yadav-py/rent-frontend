'use client'
import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const Home = () => {
    const router = useRouter();
    useEffect(()=>{
        if (!localStorage.getItem("isLoggedIn")) {
            router.push("/login");
        }
  },[])

  return (
    <div>
        <Navbar/>
        This is Home page.
    </div>
  )
}

export default Home;
