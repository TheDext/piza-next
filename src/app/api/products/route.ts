//@ts-nocheck
import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            take: 10,
        });
        return NextResponse.json(products);
    } catch (e) {
        console.log(e);
    }
}
