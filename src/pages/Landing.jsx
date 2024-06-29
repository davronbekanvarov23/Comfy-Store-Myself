import { Hero, FeturedProductes } from "../components";

import { customFetch } from "../utils";
const url = "/products?featured=true";

// loaders
export const loader = async () => {
  const req = await customFetch(url);

  const products = req.data.data;

  return { products };
};

function Landing() {
  return (
    <section className="align-content  py-20">
      <Hero />
      <FeturedProductes />
    </section>
  );
}

export default Landing;
