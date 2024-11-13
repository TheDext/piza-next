//@ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('product');

    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: query,
                },
            },
        });
        return NextResponse.json(products);
    } catch (e) {
        console.log(e);
    }
}
