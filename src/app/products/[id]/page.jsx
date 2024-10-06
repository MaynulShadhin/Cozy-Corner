import ProductDetails from '@/components/ProductDetails';
import { getProductDetails } from '@/services/getProducts';

const page = async ({ params }) => {
    const details= await getProductDetails(params.id)

    return (
        <div className="container mx-auto p-6">
            <ProductDetails product={details.product}></ProductDetails>
        </div>
    );
};

export default page;