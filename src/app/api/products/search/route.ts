//@ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    try {
        const query = req.nextUrl.searchParams.get('product');
        console.log('query', query);
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: query,
                },
            },
        });
        return NextResponse.json({ products });
    } catch (err) {
        console.log(err);
    }
}
