import { Link } from "react-router-dom";

const images = [
  "../assets/hero1.png",
  "../assets/hero2.png",
  "../assets/hero3.png",
  "../assets/hero4.png",
];
function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div className="">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <Link to="./products" className="btn btn-primary mt-10">
          OUR PRODUCTS
        </Link>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {images.map((image) => {
          
          return (
            <div className=" carousel-item">
              <img
                src={image}
                alt=""
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
