import { connectDB } from "@/lib/connectDB"

export const GET = async (request, { params }) => {
    const db = await connectDB()
    const cartCollection = db.collection('cart');
    const userEmail = params.email
    try {
        const product = await cartCollection.find({ userEmail: userEmail }).toArray();
        return Response.json({ product })
    } catch (error) {
        console.log(error)
    }
}