import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// POST request handler
export async function POST(req) {
    const orderData = await req.json();
    const db = await connectDB();
    const result = await db.collection('order').insertOne({ ...orderData });
    if (result.insertedId) {
        const query = {
            _id: {
                $in: orderData.cartId.map(id => new ObjectId(id))
            }
        }
        const deleteCart = await db.collection('cart').deleteMany(query)
        return NextResponse.json({ success: true, message: 'Order Added Successfully' });
    } else {
        return NextResponse.json({ success: false, message: 'Failed to place order' });
    }
}