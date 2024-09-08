"use client"
import Image from "next/image";
import { useState } from "react";

export default function Page() {

  const [file,setFile] = useState();

  const onSubmit = async (e) => {
    try{
        e.preventDefault();
        let data = new FormData();
        data.set('file',file);
        let result = await fetch("http://127.0.0.1:3000/api/upload",{
            method : "POST",
            body : data
        })
        result = await result.json();
        if(result.success){
            alert(result.message);
        }
    }catch(error){
        console.log(error);
    }
  }

  return (
    <>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit}>
          <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])} />
          <button type="submit">Upload</button>
      </form>
    </>
  );
}
