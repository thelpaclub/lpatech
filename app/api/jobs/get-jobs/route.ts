import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db_connect';
import Jobs from '@/models/Jobs';

export async function GET(request: Request) {
    await dbConnect();

    try {
        const jobs = await Jobs.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: jobs }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
}

