import { Link, useLoaderData } from "react-router-dom";
function SingleHero() {
  const { product } = useLoaderData();
  console.log(product);
  return (
    <div>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
          src={product.attributes.image}
          alt={product.attributes.title}
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">
            {product.attributes.title}
          </h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {product.attributes.company}
          </h4>
          <p className=" mt-3 text-xl">${product.attributes.price}</p>
          <p className=" mt-6 leading-8">{product.attributes.description}</p>
          <div className=" mt-6">
            <h4>Colors</h4>
            <div className=" mt-2">
              {product.attributes.colors.map((color) => {
                return (
                  <button
                    type="button"
                    className="badge w-6 h-6 mr-2 "
                    style={{ backgroundColor: color }}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleHero;
