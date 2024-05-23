import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen relative">
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: "url(/image/landing-page/Image.svg)",
          filter: "brightness(0.5)",
        }}
      />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl text-white">
          <h1 className="mb-5 text-4xl font-semibold ">
            Welcome To Claire&apos;s Delight, Where Every Spice Tells a Story!!!
          </h1>
          <p className="mt-5 mb-[5rem] font-light ">
            Explore flavors that bring cultures to your kitchen, one pinch at a
            time and get ready to taste the world as our spices share their
            unique stories with every dish you create.
          </p>
          <button className="btn font-light bg-orange w-[150px] hover:bg-green border-none">
            Shop Spice
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
