import React, { useEffect, useState } from "react";
import { MdLightMode } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { HiLink } from "react-icons/hi";
import { FaTwitter } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";

const Finder = () => {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${inputValue}`
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (inputValue) {
      fetchData();
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchData(); // No need to call fetchData here, it's handled in useEffect
  };

  return (
    <div className=" w-[50%] flex justify-center items-center mx-auto h-screen flex-col text-[#FFFEFE]">
      {/* nav here below/ */}
      <div className=" justify-between w-full flex ">
        <h1 className=" text-3xl font-serif font-bold text-[#FFFEFE] ">
          DevFinder
        </h1>
        <div className=" max-w-[200px] flex gap-4 flex-row justify-center items-center">
          <h1 className=" text-xl font-serif font-light">Light</h1>
          <MdLightMode className="text-[30px]" />
        </div>
      </div>
      {/* nav stops here  */}
      {/* searech atart here  */}
      <form
        onSubmit={handleSubmit}
        className="bg-[#1F2A48] w-full h-14 py-2 px-2 rounded-xl justify-between flex items-center mt-10 "
      >
        <div className="flex items-center ">
          <CiSearch style={{ color: "#0079FE" }} size={35} />
          <input
            type="search"
            name="search"
            id="search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search GitHub Username ....."
            className=" outline-none border-none bg-transparent active:bg-transparent focus:bg-transparent placeholder:pl-3 placeholder:text-[16px] pl-2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#0079FE] py-2 px-4 flex rounded-md text-[#FFFEFE]"
        >
          Submit
        </button>
      </form>
      {/* another section brlow  */}
      {data && (
        <div className="bg-[#1F2A48] flex gap-2 w-full mt-10 rounded-xl px-6 py-6 ">
          <div className="w-[20%]">
            <div className=" rounded-full w-32 h-32 bg-cover bg-slate-500  bg-no-repeat bg-center animate-pulse">
              <img src={data.avatar_url} className="rounded-full" alt="" />
            </div>
          </div>
          <div className="w-[75%] flex flex-col gap-7 ">
            <div className="flex justify-between">
              <h1>
                {data.name} <br /> <span className="">@{data.login}</span>
                {/* <img src={data.avatar_url} alt="" /> */}
              </h1>
              <p>{data.created_at}</p>
            </div>
            <h1>{data.bio}</h1>
            <div className=" flex justify-between rounded-xl bg-[#141C2F] py-3 px-4 w-full ">
              <div className="">
                <p>Repos</p>
                <h1>{data.public_repos}</h1>
              </div>
              <div className="">
                <p>Followers</p>
                <h1>{data.followers}</h1>
              </div>
              <div className="">
                <p>Following</p>
                <h1>{data.following}</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="flex gap-2 items-center">
                  <FaLocationDot />
                  <h1>{data.location}</h1>
                </div>
                <div className="flex gap-2 items-center">
                  <HiLink />
                  <h1>{data.blog === "" ? "None" : data.blog}</h1>
                </div>
              </div>
              <div>
                <div className="flex gap-2 items-start ">
                  <FaTwitter />
                  <a>{data.twitter_username}</a>
                </div>
                <div className="flex gap-2 items-center">
                  <CgOrganisation />
                  <h1>{data.company === null ? "None" : data.company}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Finder;




/*
import React from "react";
import { MdLightMode } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import {SlSocialGithub} from 'react-icons/sl'

const Finder = () => {
  return (
    <>
      <main className="max-w-[50%] flex justify-center flex-col items-center mx-auto h-screen px-3">
        <nav className="flex justify-between items-center w-full my-1">
          <h1 className="text-3xl font-bold text-gray-80>">FindDev</h1>
          <div className="flex items-center justify-between gap-3 text-xl">
            <h1>Light</h1>
            <MdLightMode className="text-3xl" />
          </div>
        </nav>
        <nav className="flex justify-between items-center w-full my-4 bg-[#1F2A48] px-10 py-2 pr-3 shadow-lg rounded-2xl">
          <div className="flex items-center gap-4">
            <FaMagnifyingGlass className=" text-xl text-[#0079FE]" />
            <input
              type="text"
              placeholder="Search GitHub Username..."
              className=" text-start px-4 w-[400px] outline-none border-none bg-[#1F2A48]"
            />
          </div>
          <div className="flex items-center justify-between gap-3 text-xl">
            <button className="bg-[#0079FE] py-2 px-3 rounded-2xl">
              Search
            </button>
          </div>
        </nav>

        <div className=" bg-[#1F2A48] flex gap-2 w-full h-52 mt-10 rounded-xl px-6 py-6">
            <div className="w-[20%]">
                <div className=" rounded-full w-32 h-32 bg-cover bg-slate-500 bg-no-repeat bg-center animate-pulse">
                <SlSocialGithub /></div>
            </div>
            <div className="w-[75%] ">
                <div className="flex justify-between">
                    <h1>Username <span>@llollollol</span></h1>
                    <p>Joined 23 Feb 2011</p>
                </div>
                <h1>Bio is here but i no see am for the api</h1>
                <div className=" flex bg-[#141C2F] py-3 px-4 w-full ">
                    <div className="">
                        <p>Repos</p>

                    </div>
                </div>
            </div>
        </div>

      </main>
    </>
  );
};

export default Finder;
*/
