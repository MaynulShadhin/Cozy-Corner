import { connectDB } from "@/lib/connectDB"
import { products } from "@/lib/product";

export const GET = async () => {
    const db = await connectDB()
    const productsCollection = db.collection('products')
    try {
        await productsCollection.deleteMany();
        const res = await productsCollection.insertMany(products)
        return Response.json({message: "seeded successfully"})
    } catch (error) {
        console.log(error)
    }
}