/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { PiKeyReturnFill } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { FaMobileRetro } from "react-icons/fa6";
import { GiJewelCrown } from "react-icons/gi";
import { BiSolidCheckShield } from "react-icons/bi";
import { FaTruckFast } from "react-icons/fa6";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="sm:h-[300px] xl:h-[400px] h-[200px] flex justify-center items-center w-full ">
        <img
          src="/assets/banner16.jpg"
          alt="banner"
          className="h-full w-full sm:object-cover "
        />
        <div className="absolute max-w-xl lg:block text-gray-800 text-center p-3 xs:ml-[265px] sm:ml-[280px] lg:ml-[400px] xl:ml-[600px] ml-[174px] md:ml-[333px] ">
          <h1 className="font-bold text-lg md:text-4xl xl:text-5xl xs:mb-4 font-['Consolas']">
            About Us
          </h1>
          <p className="text-sm md:text-md xl:text-[15px] font-sans text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            labore consequuntur doloremque autem reiciendis sit tenetur, quis
            voluptatem at perspiciatis?
          </p>
        </div>
      </div>
      <div className="md:container mx-auto my-10">
        <div className="md:flex justify-center lg:h-[600px] p-3 lg:p-0">
          <div className="lg:w-2/5 flex justify-end shadow-md rounded ">
            <img
              src="/assets/girl.jpg"
              className="object-cover "
              alt="about-image"
            />
          </div>
          <div className=" lg:w-2/5 p-5 flex flex-col justify-center items-center">
            <div className="flex p-4 gap-5 mb-5">
              {/* <img src="/assets/trends1.jpeg" alt="" className="h-32 w-32" /> */}
              <GiClothes style={{ height: 100, width: 100 }} />
              <div>
                <h1 className="text-2xl font-[mono]">Latest trends for all</h1>
                <p className="mt-3 block w-52 xl:w-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis, tempora.
                </p>
              </div>
            </div>
            <div className="flex p-4 gap-5 mb-5 ">
              {/* <img src="/assets/trends1.jpeg" alt="" className="h-32 w-32" /> */}
              <GiJewelCrown style={{ height: 100, width: 100 }} />
              <div className="">
                <h1 className="text-2xl font-[mono] w-[208px]">
                  Exquisite Jewelry for Everyone
                </h1>
                <p className="mt-3 block w-52 xl:w-80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, quisquam!
                </p>
              </div>
            </div>
            <div className="flex p-4 gap-5">
              {/* <img src="/assets/trends1.jpeg" alt="" className="h-32 w-32" /> */}
              <FaMobileRetro style={{ height: 100, width: 100 }} />
              <div>
                <h1 className="text-2xl font-[mono]">Sale on Electronics</h1>
                <p className="mt-3 block w-52 xl:w-80">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Enim, porro!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[400px] flex justify-center items-center">
        <img
          src="/assets/clothes2.jpg"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex justify-center  flex-col items-center h-[400px] w-full overflow-hidden bg-black opacity-70">
          <h1 className="text-4xl text-center pb-10 text-white ">25% OFF</h1>
          <p className="text-2xl md:text-4xl text-center pb-10 text-white  uppercase ">
            on all products above $399
          </p>
          <Link href="/product">
            <button className="  p-2 bg-white text-black font-semibold  rounded ">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <div className="2xl:container mx-auto my-10">
        <div className="text-center text-3xl my-5 font-semibold font-['Consolas']">
          Testimonials
        </div>
        <div className="  mx-1 w-100 xs:grid rounded-md xs:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4 lg:gap-x-2 gap-x-6 xl:gap-x-6 gap-y-6 p-3 2xl:p-0 ">
          <div className="p-8 xs:p-4 xl:p-8 sm:p-4 shadow-md rounded flex flex-col items-center justify-center md:mb-0">
            <p className="text-lg text-center md:w-80 lg:w-52 xl:w-64 block">
              &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsam ad eligendi modi beatae eius odit odio dolores obcaecati
              enim nobis.&quot;
            </p>
            <div className="flex items-center gap-5 my-3 text-black">
              <img
                src="/assets/testimonial1.webp"
                alt="Lauren Lane"
                className="h-16 w-16 rounded-full"
              />
              <h1 className="text-lg font-semibold">Patricia Warren</h1>
            </div>
          </div>
          <div className="p-8 xs:p-4 xl:p-8 sm:p-4 shadow-md rounded flex flex-col items-center justify-center  md:mb-0">
            <p className="text-lg text-center md:w-80 lg:w-52 xl:w-64 block">
              &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsam ad eligendi modi beatae eius odit odio dolores obcaecati
              enim nobis.&quot;
            </p>
            <div className="flex items-center gap-5 my-3 text-black">
              <img
                src="/assets/testimonial2.jpeg"
                alt="Lauren Lane"
                className="h-16 w-16 rounded-full"
              />
              <h1 className="text-lg font-semibold">Lauren Lane</h1>
            </div>
          </div>
          <div className="p-8 xs:p-4 xl:p-8 sm:p-4 shadow-md rounded flex flex-col items-center justify-center  md:mb-0">
            <p className="text-lg text-center md:w-80 lg:w-52 xl:w-64 block">
              &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsam ad eligendi modi beatae eius odit odio dolores obcaecati
              enim nobis.&quot;
            </p>
            <div className="flex items-center gap-5 my-3 text-black">
              <img
                src="/assets/testimonial3.jpeg"
                alt="Lauren Lane"
                className="h-16 w-16 rounded-full"
              />
              <h1 className="text-lg font-semibold">Monica Gala</h1>
            </div>
          </div>
          <div className="p-8 xs:p-4 xl:p-8 sm:p-4 shadow-md rounded flex flex-col items-center justify-center  md:mb-0">
            <p className="text-lg text-center md:w-80 lg:w-52 xl:w-64 block">
              &quot;Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Ipsam ad eligendi modi beatae eius odit odio dolores obcaecati
              enim nobis.&quot;
            </p>
            <div className="flex items-center gap-5 my-3 text-black">
              <img
                src="/assets/testimonial4.jpg"
                alt="Paul Smitten"
                className="h-16 w-16 rounded-full"
              />
              <h1 className="text-lg font-semibold">Paul Smitten</h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-gray-100">
        <div className="2xl:container mx-auto  mb-5">
          <div className=" w-100 xs:grid rounded-md xs:grid-cols-2  lg:grid-cols-4 xl:grid-cols-4  p-3 2xl:p-0 ">
            <div className="flex justify-center gap-5 items-center p-3 ">
              <div className="w-24">
                <FaTruckFast style={{ height: 40, width: 50 }} />
                {/* <TbTruckDelivery style={{ height: 100 }} /> */}
              </div>
              <div>
                <p className="font-semibold">FREE DELIVERY</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, reiciendis!
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-5 items-center p-3 ">
              <div className="w-24">
                <FaLocationDot style={{ height: 40, width: 50 }} />
              </div>
              <div>
                <p className="font-semibold">ORDER TRACKING</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, itaque.
                </p>
              </div>
            </div>
            <div className=" flex justify-center  gap-5 items-center p-3">
              <div className="w-24">
                <PiKeyReturnFill style={{ height: 70, width: 50 }} />
              </div>
              <div>
                <p className="font-semibold">60 DAYS RETURN</p>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, itaque.
                </p>
              </div>
            </div>
            <div className="flex justify-center  gap-5 items-center p-3">
              <div className="w-24">
                <BiSolidCheckShield style={{ height: 70, width: 50 }} />
              </div>
              <div>
                <p className="font-semibold">BEST QUALITY</p>
                <p className="text-sm">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis, nemo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
