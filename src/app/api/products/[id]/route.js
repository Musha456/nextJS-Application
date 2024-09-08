import { connectStr } from "@/utils/db";
import { Product } from "@/utils/models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content){
    const productId = content.params.id;
    const filter = {_id:productId};
    const payload = await request.json();
    await mongoose.connect(connectStr);

    const result = await Product.findOneAndUpdate(filter,payload);
    return NextResponse.json({
        result,
        success : true
    });

}

export async function GET(request, content){
    const productId = content.params.id;
    const filter = {_id:productId};

    await mongoose.connect(connectStr);

    const result = await Product.findById(filter);
    return NextResponse.json({
        result,
        success : true
    });
}

export async function DELETE(request,content){
    const filter = content.params.id;
    await mongoose.connect(connectStr);
    const result = await Product.findOneAndDelete(filter);
    return NextResponse.json({
        result,
        success : true
    });
}