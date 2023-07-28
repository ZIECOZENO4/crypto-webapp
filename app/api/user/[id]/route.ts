import prisma from "@/lib/prisma"
import { json } from "stream/consumers";
export async function GET(request: Request, {params}:{params:{id:number}}) {
    const userPost = await prisma.post.findMany({
        where:{ authorId: +params.id},
        include:{
            author:{
                select:{
                    email: true,
                    name:true
                }
            }
        }
    });
    return new Response(JSON.stringify(userPost));
}















