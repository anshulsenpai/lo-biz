const BizCard = ({ image, title, address }) => {
  return (
    <div className="w-[300px] h-[320px] flex flex-col justify-between bg-[#F1F6F9] p-3 rounded-lg overflow-hidden shadow-md hover:scale-[105%] ease-in-out duration-300">
      <div>
        <img className="mb-2 rounded-lg" src={image} alt="" />
      </div>
      <div className="flex-1">
        <p className="text-[#000] text-lg mb-2 font-medium">{title}</p>
        <p className="text-[#727272]">{address}</p>
      </div>
      <a className="text-[#F31559] font-medium" href="#">
        Learn more
      </a>
    </div>
  );
};

export default BizCard;
