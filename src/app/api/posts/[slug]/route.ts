import { NextResponse } from "next/server"
import prisma from "@/utils/connect"

export const GET = async (req:any, {params}:{params:{slug:string}}) => {

    const {slug} = params
    //@ts-ignore

    try{

        const [post,hotPicks] = await prisma.$transaction([
            prisma.post.update({
                where: {slug},
                data: { views: { increment: 1 } },
                include: {user: true}
            }),
            prisma.post.findMany({
                take: 10,
                orderBy:{ views: 'desc'},
                include: {user:true}
            }),
        ])

        return new NextResponse(JSON.stringify({post,hotPicks}))
    }catch(err){
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!" })
        );
    }
}