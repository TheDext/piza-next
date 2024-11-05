import { NextRequest } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
    try {
        const products = await prisma.product.findMany({
            where: {
                name: {
                    contains: 'омле',
                    mode: 'insensitive',
                },
            },
        });
        return products;
    } catch (err) {
        console.log(err);
    }
}
