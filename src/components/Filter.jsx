import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FilterSelect from "./FilterSelect";

function Filter() {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-y-8 items-center mt-20 mb-10">
      <FormInput
        type="search"
        label="search products"
        name="search"
        size="input-sm"
      />
      <FilterSelect
        label="select Catagory"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      <FilterSelect
        label="select Company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />{" "}
      <FilterSelect
        label="Sort by"
        name="sort"
        list={["a-z", "z-a", "hight", "low"]}
        size="select-sm"
      />
      <button type="submit" className="btn btn-primary btn-sm">
        search
      </button>
      <button className="btn btn-info btn-sm">reset</button>
    </Form>
  );
}

export default Filter;
