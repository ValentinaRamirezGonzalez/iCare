

import { Prisma, PrismaClient } from '@prisma/client'
import { getSession } from 'next-auth/react'

const prisma = new PrismaClient();

export async function GET(req,res) {
  try {
    const posts = await prisma.post.findMany();
    
    
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response(JSON.stringify({ error: 'Error fetching posts' }), { status: 500 });
  }
}

