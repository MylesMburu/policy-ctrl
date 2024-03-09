import {NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const Options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { 
                    label: "Username",
                    type: "text", 
                    placeholder: "Your Name"
                },
                password: {  
                    label: "Password", 
                    type: "password", 
                    placeholder: "Your Password"
                }
            },

            async authorize(credentials){
                const user = { id:"1", name:"admin", password:"admin" }

                console.log(credentials);

                if (credentials?.username === user.name && credentials?.password === user.password){
                    return user;
                }
                else{
                    return null;
                }
            }
        })
    ],
}