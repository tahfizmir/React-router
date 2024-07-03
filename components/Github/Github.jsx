/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//     const[data,setData]=useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/tahfizmir")
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         setData(data);
//     })
//   }, []);
const data=useLoaderData();
  return (
    <div className="text-center text-white p-4 bg-gray-700 text-3xl">
      Github followers:{data.followers}
      <img className="mx-20" src={data.avatar_url }  alt="Git pic" width={400}/>
    </div>
  );
}

export default Github;
export const githubinfoloader= async()=>{
    const res=await fetch(`https://api.github.com/users/tahfizmir`)
    return res.json();


}
