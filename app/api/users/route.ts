import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({message: 'Hello world'});
}
export async function POST(request: Request) {
  return NextResponse.json({message: 'Hello world'});
}