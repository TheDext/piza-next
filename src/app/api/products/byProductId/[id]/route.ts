//@ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../prisma/prisma-client';

export async function GET(req: NextRequest, { params }) {
    const { id } = await params;

    const data = await prisma.product.findFirst({
        where: {
            id: Number(id),
        },
        include: {
            items: true,
            ingredients: true,
            category: true,
        },
    });

    return NextResponse.json({ data });
}
