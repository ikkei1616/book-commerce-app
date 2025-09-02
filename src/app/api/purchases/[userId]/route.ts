import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: {userId: string;};
}
//購入履歴検索API
export async function GET (request : Request, {params}: Params) {
  const userId = params.userId;
  try {
    const purchase = await prisma.purchase.findMany({
      where:{ userId},
    });
    return NextResponse.json(purchase);
  } catch (err) {
    return NextResponse.json(err);
  }

};