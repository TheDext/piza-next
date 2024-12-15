//@ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../prisma/prisma-client';

export async function GET(req: NextRequest, { params }) {
    const { id } = await params;
    console.log('ID------------------------------------------------------');
    const data = await prisma.product.findMany({
        where: {
            id: Number(id),
        },
    });

    return NextResponse.json({ data });
}
