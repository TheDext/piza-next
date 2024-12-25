//@ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../../prisma/prisma-client';

export async function GET(req: NextRequest, { params }) {
    const { categoryId } = await params;

    const data = await prisma.product.findMany({
        where: {
            categoryId: Number(categoryId),
        },
    });

    return NextResponse.json({ data });
}
