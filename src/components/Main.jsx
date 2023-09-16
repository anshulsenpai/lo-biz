import BizCard from "./BizCard";
import potShop from "../assets/pot-shop.jpg"
import plantShop from "../assets/plant-shop.jpg"
import clothingShop from "../assets/clothing-shop.jpg"


const Main = () => {
  return (
    <div className="p-8 w-full min-h-screen">
      <div className="text-lg font-semibold">
        Recently Joined <span className="text-[#F31559]">Businesses -</span>
      </div>
      <main className="flex justify-center items-center gap-8 flex-wrap pt-10">
        <BizCard image={potShop} title={"Flourish Pottery"} address={"5493 Ernser Stream, South Art, Hawaii"}/>
        <BizCard image={plantShop} title={"The Plant Corner"} address={"XYZ street, near church, NYC"}/>
        <BizCard image={clothingShop} title={"Evolution Clothes"} address={"XYZ street, near church, NYC"}/>
      </main>
    </div>
  );
};

export default Main;
