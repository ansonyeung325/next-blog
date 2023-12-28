import { NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { getAuthSession } from "@/utils/auth"


export const GET = async (req:any) => {

    const {searchParams} = new URL(req.url)
    //@ts-ignore
    const page:any = searchParams.get("page") 
    const cat = searchParams.get("cat")
    const POST_PER_PAGE:number = 2;

    const query = {       
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && {catSlug: cat})
        }
    }



    try{
        const [posts,count,] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where}),
        ])

        return new NextResponse(JSON.stringify({posts, count}))
    }catch(err){
        console.log(err)
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!" })
        );
    }
}



export const POST = async (req:any) => {
    const session = await getAuthSession()

    if (!session) {
        return new NextResponse(
            JSON.stringify({message: "Not Authentication"})
        )
    }

    try{
        const body = await req.json()
        const post = await prisma.post.create({
            //@ts-ignore
            data:{...body, userEmail: session.user.email}
        })

        return new NextResponse(JSON.stringify(post))
    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Added"}))
    }
}