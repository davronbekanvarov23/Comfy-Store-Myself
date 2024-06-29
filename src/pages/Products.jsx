import { useLoaderData } from "react-router-dom";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";
import Filter from "../components/Filter";

export const loader = async () => {
  const req = await customFetch("/products");

  const products = await req.data.data;
  const meta = req.data.meta;
  return { products, meta };
};

function Products() {
  const { meta } = useLoaderData();
  return (
    <div className="align-content">
      <Filter />
      <ProductsContainer />
    </div>
  );
}

export default Products;
