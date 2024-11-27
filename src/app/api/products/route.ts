//@ts-nocheck
import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma-client';

export async function GET() {
    try {
        const products = await prisma.product.findMany({});
        return NextResponse.json(products);
    } catch (e) {
        console.log(e);
    }
}
