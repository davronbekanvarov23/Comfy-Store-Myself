import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function FeturedProductes() {
  const { products } = useLoaderData();
  return (
    <div className="pt-24">
      <div className="border-b border-base-300 pb-5">
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          featured products
        </h2>
      </div>
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
              key={product.id}
            >
              <figure className="px-4 pt-4">
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title capitalize tracking-wider">
                  {product.attributes.title}
                </h2>
                <p className=" text-secondary">
                  {formatPrice(product.attributes.price)}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default FeturedProductes;
