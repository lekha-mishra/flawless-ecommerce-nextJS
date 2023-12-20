/* eslint-disable @next/next/no-img-element */

import Products from "./product/page";

export default function Home() {
  return (
    <>
      {/* banner */}
      <div className="h-[200px] md:h-full flex justify-start items-center">
        <img
          src="/assets/banner.jpg"
          alt=""
          className="w-full object-fill h-full md:object-contain  md:h-full "
        />
        <div className="absolute max-w-xl lg:block text-gray-800 text-center  md:p-5 ml-4 mr-[192px] xs:mr-[305px] sm:mr-[330px] md:mr-[350px] 2xl:ml-64 ">
          <h1 className="font-bold text-lg md:text-4xl xl:text-5xl mb-5 underline font-['Consolas']">
            Winter season sale
          </h1>
          <p className="text-xs md:text-md xl:text-[15px] font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            labore consequuntur doloremque autem reiciendis sit tenetur, quis
            voluptatem at perspiciatis?
          </p>
        </div>
      </div>
      {/* cards */}
      <div className="container mx-auto text-black">
        <div className="w-100 flex items-center justify-center ">
          <h1 className="text-3xl text-center font-bold mt-10 mb-5">
            Trending deals
          </h1>
        </div>
        <Products />
      </div>
      {/* <div className="w-100 flex items-center justify-center ">
        <h1 className="text-lg text-center mb-5 hover:underline">
          View All {"->"}
        </h1>
      </div> */}
    </>
  );
}
