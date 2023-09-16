import heroImage from "../assets/hero.jpg";
import searchIcon from "../assets/search.svg";

const Hero = () => {
  return (
    <div className="w-full h-[75vh] relative">
      <img
        className="w-full h-full object-cover object-center absolute top-0 left-0 right-0 bottom-0"
        src={heroImage}
        alt="hero image"
      />
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <h1 className="w-[60%] text-center drop-shadow-2xl font-secondary text-4xl mb-6 text-white">Welcome to <span className="text-[#F31559]">BizGrow</span>, Boost your business growth using our services</h1>
        <div className="flex w-[50%] justify-between items-center p-[2px] bg-white rounded-3xl">
          <input
            className="bg-transparent w-[90%] font-normal px-4 py-2 outline-none"
            type="text"
            placeholder="Search anything here..."
          />
          <button>
            <img
              className="bg-[#F31559] w-10 h-10 p-2 rounded-full"
              src={searchIcon}
              alt="search icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
