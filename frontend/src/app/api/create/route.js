import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();


export async function POST(req, res) {

  try{
    const { title,content } = await req.json();

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return new Response(JSON.stringify({ message: 'Post created successfully', post: newPost }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

    const data=await newPost.json();
    return NextResponse.json(data);
    

  } catch (error) {
    console.error('Error creating post:', error);
    return new Response(JSON.stringify({ error: 'Error creating post' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
  
 
 

  

  
