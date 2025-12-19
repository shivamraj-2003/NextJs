import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(request: Request) {
  const data = await request.json();
  const name = data.name || 'Guest';
  return NextResponse.json({ received: data , greeting: `Hello, ${name}!` });
}