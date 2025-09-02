//購入履歴の保存

import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe/client";

export async function POST(request: Request, response: Resposne) {
  const { sessionId } = await request.json();

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const existingPurchase =  await prisma.purchase.findFirst({
      where: {
        userId: session.client_reference_id!,
        bookId: session.metadata!.bookId,
      },
    });
  
    if (!existingPurchase) {
      const purchase = await prisma.purchase.create({
        data: {
          userId: session.client_reference_id!,
          bookId: session.metadata!.bookId,
        },
      });
      return NextResponse.json({ purchase });

    } else {
      return NextResponse.json({message: "すでに購入済みです。"});
    }
    
  } catch (err) {
    return NextResponse.json(err);
  }
}
