import { SingleHero } from "../components";
import { customFetch } from "../utils";

export const loader = async ({ params }) => {
  console.log(params);
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
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
