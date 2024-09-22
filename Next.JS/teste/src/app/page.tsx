"use client";
import Link from "next/link";
const HomePage = () => {
  return (
    <div className="flex flex-col">
      <h1>Hello, world!</h1>
      <Link href={"/auth"}>Logout</Link>
      <button className="bg-white text-black" onClick={() => alert("oila")}>
        teste
      </button>
    </div>
  );
};

export default HomePage;
