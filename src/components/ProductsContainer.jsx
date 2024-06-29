//components
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

//react icons
import { BsFillGridFill, BsList, BsTypeH5 } from "react-icons/bs";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function ProductsContainer() {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const activeStyle = (patter) => {
    return patter === layout
      ? "btn-primary text-primary-content "
      : "btn-ghost text-base-content";
  };

  const handleLayoutChange = (layout) => {
    setLayout(layout);
  };
  return (
    <>
      <div className="mb-5 border-b py-3 flex justify-between items-center p-9">
        <h3 className="font-medium text-2xl">
          Product{totalProducts > 1 && "s"}-{totalProducts}{" "}
        </h3>
        <div className="flex gap-3">
          <button
            className={activeStyle("grid")}
            onClick={() => handleLayoutChange("grid")}
            id="grid"
          >
            <BsFillGridFill className="w-7 h-7" />
          </button>
          <button
            className={activeStyle("list")}
            onClick={() => handleLayoutChange("list")}
            id="list"
          >
            <BsList className="w-7 h-7" />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="mt-16 text-2xl">
            Sorry,no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
