import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { getSession } from 'next-auth/react'  
import { authOptions } from '../auth/[...nextauth]/route'


const prisma = new PrismaClient()

export async function GET(req, res) {
  try {
    const posts = await prisma.post.findMany()
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return new Response(JSON.stringify({ error: 'Error fetching posts' }), { status: 500 })
  }
}

export async function POST(req) {
  const session = await getSession({ req })
  if (!session) {
    return new Response(JSON.stringify({ error: 'Not authenticated' }), { status: 401 })
  }

  const { title, content } = await req.json()
  const authorId = session.user.id  
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        authorId
      }
    })
    return new Response(JSON.stringify(newPost), { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return new Response(JSON.stringify({ error: 'Error creating post' }), { status: 500 })
  }
}
