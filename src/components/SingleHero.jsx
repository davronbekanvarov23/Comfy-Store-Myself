import { Link, useLoaderData } from "react-router-dom";
import { formatPrice, generedAmountOptions } from "../utils";
import { useState } from "react";
function SingleHero() {
  const { product } = useLoaderData();
  const [productColor, setProductColor] = useState(
    product.attributes.colors[0]
  );
  const [amount, setAmount] = useState(1);

  const handeAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
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
          <p className=" mt-3 text-xl">
            {formatPrice(product.attributes.price)}
          </p>
          <p className=" mt-6 leading-8">{product.attributes.description}</p>
          <div className=" mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              Colors:
            </h4>
            <div className=" mt-2">
              {product.attributes.colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color == productColor && "border-2 border-secondary "
                    } `}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/*Amount*/}
            <div className=" form-control w-full max-xs">
              <label className="label">
                <h4 className="text-md font-medium -tracking-wider capitalize">
                  amount:
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md"
                value={amount}
                onChange={handeAmount}
              >
                {generedAmountOptions(15)}
              </select>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-primary btn-md uppercase"
                onClick={() => console.log("click me")}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleHero;
