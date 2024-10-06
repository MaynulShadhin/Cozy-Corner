import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

// POST request handler
export async function POST(req) {
    const cartData = await req.json();
    const { productName, productId, userName, price, userEmail } = cartData;

    const db = await connectDB();
    const existingItem = await db.collection('cart').findOne({ userEmail, productId });
    if (existingItem) {
        return NextResponse.json({ success: true, message: 'Product already in cart' });
    }

    const result = await db.collection('cart').insertOne({ ...cartData });
    if (result.insertedId) {
        return NextResponse.json({ success: true, message: 'Product added to cart' });
    } else {
        return NextResponse.json({ success: false, message: 'Failed to add product to cart' });
    }
}