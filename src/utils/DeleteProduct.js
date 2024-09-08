"use client"

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    const router = useRouter();
    const deleteProduct = async () => {
        try{
            let response = await fetch("http://127.0.0.1:3000/api/products/"+props.id,{
                method : "DELETE"
            });
    
            response = await response.json();
            if(response.success){
                router.push("/products");
                
            }else{
                alert("Product could not be deleted");
            }
        }catch(error){
            console.log(error);
        }
    }
    return <button onClick={deleteProduct}>Delete</button>
}