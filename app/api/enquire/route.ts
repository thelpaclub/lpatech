import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db_connect';
import Enquiry from '@/models/Enquiry';

export async function POST(request: Request) {
    await dbConnect();
    const body = await request.json();

    try {
        const enquiry = await Enquiry.create(body);
        return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

