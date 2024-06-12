import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST(req, res) {

  try{
    const { title,description,date } = await req.json();

    const newEvent = await prisma.event.create({
      data: {
        title,
        description,
        date: new Date(date)
      },
    });
    return new Response(JSON.stringify({ message: 'Event created successfully', post: newEvent }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });

    const data=await newEvent.json();
    return NextResponse.json(data);
    

  } catch (error) {
    console.error('Error creating event:', error);
    return new Response(JSON.stringify({ error: 'Error creating event' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};