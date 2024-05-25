import { SingleHero } from "../components";
import { customSingle } from "../utils";

export const loader = async ({ params }) => {
  const req = await customSingle(`/products/${params.id}`);
  const product = req.data.data;
  return { product };
};
function SingleProduct() {
  return (
    <div className="align-content py-20">
      <SingleHero />
    </div>
  );
}

export default SingleProduct;
