import NextAuth from "next-auth";
import { Options } from "./providers";
import { connectDB } from "@/utils/connect"

const handler = NextAuth(Options);

// export async function POST(req){
//     try {
//         await connectDB();
        
//         const {username, email, password} = await req.json();
//         console.log({username, email, password});
//         return;
//     } catch (error) {
//         console.log(error)
//     }
// }

export {handler as GET, handler as POST};