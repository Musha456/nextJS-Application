import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectStr } from "@/utils/db"
import { Product } from "@/utils/models/product"


// ################ API For Get All Products From Database ################
export async function GET(){

    let data = [];
    let success = true;

    try{
        await mongoose.connect(connectStr);
        data = await Product.find();
    }catch(error){
        data = {error: "Product Error"}
       success = false;
    }

    return NextResponse.json({
        result : data,
        success : success
    });

}

// ################ API For Get All Products From Database ################
export async function POST(request){

    const payload = await request.json();
    await mongoose.connect(connectStr);
    let product = new Product(payload);
    const result = await product.save();

    return NextResponse.json({
        result,
        success : true
    });
}