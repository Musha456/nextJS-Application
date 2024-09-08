import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req){
    console.log("Uploding");
    const data = await req.formData();
    console.log(data);
    const file = data.get('file');
    // console.log(file);
    if(!file){
        return NextResponse.json({
            message : "Image not found!",
            success : false
        })
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path,buffer);
    return NextResponse.json({
        "message" : "Image uploaded successfully!",
        "success" : true
    });
}