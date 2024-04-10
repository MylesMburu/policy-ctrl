import NextAuth from "next-auth";
import { Options } from "./providers";
import { connectDB } from "@/utils/connect"

const handler = NextAuth(Options);

export {handler as GET, handler as POST};