import Link from "next/link";
import DeleteProduct from "@/utils/DeleteProduct";

const getProducts = async () => {
    let response = await fetch("http://127.0.0.1:3000/api/products",{cache:"no-cache"});
    response = await response.json();;
    if(response.success){
        return response.result;
    }else{
        return {
            success : false
        }
    }
}


export default async function Page(){

   

    const products = await getProducts();

    return (
        <>
            <div className="shadow-lg rounded-lg flex flex-col items-center gap-5 my-10 p-5 m-4">
                <h3 className="uppercase font-bold">Products</h3>
                <table className=" table table-auto mauto">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>price</th>
                            <th>Company</th>
                            <th>Color</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map( (product, key) => (
                                <tr key={key}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.company}</td>
                                    <td>{product.color}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <Link href={"products/"+product._id}>Edit</Link>
                                        <DeleteProduct id={product._id} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}