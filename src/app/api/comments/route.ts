import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { getAuthSession } from "@/utils/auth"

export const GET = async (req:any) => {
    const {searchParams} = new URL(req.url)
    const postSlug = searchParams.get("postSlug")

    try{
        const comments = await prisma.comment.findMany({
            where:{
                ...(postSlug && {postSlug:postSlug})
            },
            include:{user:true}
        })

        return new NextResponse(JSON.stringify(comments))
    }catch(error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"Something went wrong"}))
    }

}



//Create a comment
export const POST = async (req:any) => {
    const session = await getAuthSession()

    if (!session) {
        return new NextResponse(
            JSON.stringify({message: "Not Authentication"})
        )
    }

    try{
        const body = await req.json()
        const comment = await prisma.comment.create({
            //@ts-ignore
            data:{...body, userEmail: session.user.email}
        })

        return new NextResponse(JSON.stringify(comment))
    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Added"}))
    }
}