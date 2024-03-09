import {Options} from '@/app/api/auth/[...nextauth]/providers';
import { getServerSession } from 'next-auth';
import DocumentRepo from './documents';


export default async function Docs(){
  const session = await getServerSession(Options);

  return(
    <>
    {session ? (
      <DocumentRepo />
    ) : (
      <h1>Not Authenticated</h1>
    )}
    </>
  )
}