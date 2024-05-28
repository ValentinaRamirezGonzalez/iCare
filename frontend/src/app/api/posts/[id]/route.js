
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req, { params }) {
  const { id } = params

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id, 10) }
    })
    if (post) {
      return new Response(JSON.stringify(post), { status: 200 })
    } else {
      return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 })
    }
  } catch (error) {
    console.error('Error fetching post:', error)
    return new Response(JSON.stringify({ error: 'Error fetching post' }), { status: 500 })
  }
}
