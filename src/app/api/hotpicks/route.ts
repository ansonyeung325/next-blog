import { NextResponse } from "next/server"
import prisma from "@/utils/connect"

export const GET = async () => {
    try{
        const hotPicks = await prisma.post.findMany({
            take: 10,
            orderBy:{ views: 'desc'},
            include: {user:true}
        })

        return new NextResponse(JSON.stringify({hotPicks}))
    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Something went wrong"}))
    }
}