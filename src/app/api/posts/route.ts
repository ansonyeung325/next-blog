import { NextResponse } from "next/server"
import prisma from "@/utils/connect"


export const GET = async (req:any) => {

    const {searchParams} = new URL(req.url)
    //@ts-ignore
    const page:any = searchParams.get("page") 
    const POST_PER_PAGE:number = 2;

    const query = {       
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1)        
    }

    try{
        const [posts,count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count()
        ])
        return new NextResponse(JSON.stringify({posts, count}))
    }catch(err){
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!" })
        );
    }
}