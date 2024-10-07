import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const DELETE = async (request, { params }) => {
    const db = await connectDB()
    const cartCollection = db.collection('cart')
    try {
        const res = await cartCollection.deleteOne({ _id: new ObjectId(params.id) });
        return Response.json({ message: 'Cart deleted successfully', response: res })
    } catch (error) {
        return Response.json({ message: 'Something went wrong' })
    }
}