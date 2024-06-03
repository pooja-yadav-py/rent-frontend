"use client"
// Importing required modules
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

// Home component
export default function Home() {
  const router = useRouter(); // Initializing router

  return (
    // Main section
    <main className="flex items-center justify-center w-full p-24 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-full">
        <h1>heading</h1>
      </div>
    </main>
  );
}
