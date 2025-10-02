import BgSlate from "../../assets/bg-slate.png";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${BgSlate})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div>
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati sed tenetur deleniti commodi cum, et rem iure.
                  </p>
                </div>
              </div>
            </div>
            {/* hero image section */}
            <div></div>
            {/* third div section */}
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
