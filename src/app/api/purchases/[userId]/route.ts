import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//購入履歴検索API
export async function GET (
  request: Request, 
  { params }: { params: Promise<{ userId: string }>}
) {
  const {userId} = await params;
  try {
    const purchase = await prisma.purchase.findMany({
      where:{ userId},
    });
    return NextResponse.json(purchase);
  } catch (err) {
    return NextResponse.json(err);
  }
};