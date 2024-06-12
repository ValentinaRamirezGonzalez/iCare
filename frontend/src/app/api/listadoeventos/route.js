
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
  
    try {
      const events = await prisma.event.findMany();
      return new Response(JSON.stringify(events), { status: 200 });
    } catch (error) {
      console.error('Error fetching event:', error);
      return new Response(JSON.stringify({ error: 'Error fetching events' }), { status: 500 });
    }
  } 

  

