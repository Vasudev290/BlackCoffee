import BgSlate from "../../assets/bg-slate.png";
import coffeeMain from "../../assets/black.png";

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
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Obcaecati sed tenetur deleniti commodi cum, et rem iure.
                  </p>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25"></div>
              </div>
            </div>
            {/* hero image section */}
            <div className="relative">
              <img
                src={coffeeMain}
                alt="Coffee Main"
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              {/* Orange circle ring */}
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-primary border-[20px] rounded-full z-10"></div>
              {/* Big Text Section */}
              <div className="absolute -top-20 left-[200px] z-[1]">
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Tumbler
                </h1>
              </div>
            </div>
            {/* third div section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Thumbler</h1>
                  <p className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit..
                  </p>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/50"></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
