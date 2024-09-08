"use client"
import { useState } from "react"

export default function App(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");
    const [company, setCompany] = useState("");
    const [category, setCategory] = useState("");


    const addProduct = async () => {
        try{
            let result = await fetch("http://127.0.0.1:3000/api/products",{
                method : "post",
                body : JSON.stringify({
                    name,
                    price,
                    company,
                    color,
                    category
                })
            });
            result = await result.json();
            console.log(result)
    
            if(result.success){
                setName("");
                setPrice("");
                setColor("");
                setCompany("");
                setCategory("");
                console.log("New Product Added Is Successfully!");
            }else{
                console.log("Product Could Not Be Added!");
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <>
            <div className="sm:w-6/12 shadow-lg rounded-lg m-auto my-10 p-5 flex flex-col">
                <h1 className="text-center my-4 uppercase text-gray-600 font-bold">Add Products</h1>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" className="p-2 rounded bg-gray-200 my-4 outline-none focus:bg-gray-300 transition"/>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price" className="p-2 rounded bg-gray-200 my-4 outline-none focus:bg-gray-300 transition"/>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Product Color" className="p-2 rounded bg-gray-200 my-4 outline-none focus:bg-gray-300 transition"/>
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Product Company" className="p-2 rounded bg-gray-200 my-4 outline-none focus:bg-gray-300 transition"/>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Product Cateogry" className="p-2 rounded bg-gray-200 my-4 outline-none focus:bg-gray-300 transition"/>
                <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-300 hover:text-black uppercase transition cursor-pointer" onClick={addProduct}>Submit</button>
            </div>
        </>
    )
}