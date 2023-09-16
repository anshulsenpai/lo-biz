const Subscribe = () => {
  return (
    <div className="w-full min-h-screen p-8 bg-[#2B2730]">
      <div className="text-lg font-semibold text-white">
        Subscribe to our <span className="text-[#F31559]">services -</span>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-8">
      <form className="flex-1 m-8">
        <div className="border w-[20rem] border-transparent border-b-[#F31559] mb-6">
          <input
            className="p-2 bg-transparent text-gray-300 outline-none"
            type="text"
            placeholder="Owner's Name"
          />
        </div>
        <div className="border w-[20rem] border-transparent border-b-[#F31559] mb-6">
          <input
            className="p-2 bg-transparent text-gray-300 outline-none"
            type="text"
            placeholder="Business Name"
          />
        </div>
        <div className="border w-[20rem] border-transparent border-b-[#F31559] mb-6">
          <textarea
            className="p-2 w-full bg-transparent text-gray-300 outline-none"
            type="text"
            placeholder="Business Description"
          />
        </div>
        <div className="border w-[20rem] border-transparent border-b-[#F31559] mb-6">
          <textarea
            className="p-2 w-full bg-transparent text-gray-300 outline-none"
            type="text"
            placeholder="Business Address"
          />
        </div>
        <div className="border w-[20rem] border-transparent border-b-[#F31559] mb-6">
            <label className="text-gray-300 text-sm">Image for your business</label>
          <input
            className="p-2 w-full bg-transparent text-gray-300 outline-none"
            type="file"
            placeholder="Image for business"
          />
        </div>
        <button className="px-6 py-3 text-white font-semibold rounded-lg bg-[#F31559]">Subscribe in $5</button>
      </form>
      <div className="flex-1 justify-start items-start">
        <p className="text-lg text-gray-200 mb-4"><span className="text-[#F31559]">BizGroww is a platform for local businesses,</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam aut vero id animi cupiditate. Vel perferendis dolorem laudantium voluptatum, cumque quae illum, voluptatem quasi, debitis dolores omnis rerum magnam id.</p>
        <p className="text-sm text-[#bababa]">Designed and developed by Anshul S. Kulkarni</p>
      </div>
      </div>
    </div>
  );
};

export default Subscribe;
