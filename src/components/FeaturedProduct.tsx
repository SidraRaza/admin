import React from "react";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const FeaturedProduct = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[1652px] w-[414px] h-[5510px] flex justify-center mx-auto items-center">
      <div className="lg:w-[1124px] lg:h-[1652px] w-[328px] h-[5510px]  py-[80px] mx-auto flex justify-center flex-col items-center lg:gap-[80px] gp-[48px]">
        <div className="lg:w-[692px] w-[261px] lg:h-[102px] h-[154px] flex mx-auto flex-col  gap-[10px] justify-center items-center">
          <h1
            className={`${montserrat.className} text-[20px] leading-[30px] text-[#737373]`}
          >
            Featured Products
          </h1>
          <h1
            className={`${montserrat.className} text-[24px] leading-[32px] text-center font-bold text-[#252B42]`}
          >
            BESTSELLER PRODUCTS
          </h1>
          <h1
            className={`${montserrat.className} text-[14px] leading-[20px] text-center text-[#737373]`}
          >
            Problems trying to resolve the conflict between{" "}
          </h1>
        </div>
        <div className="lg:w-[1049px] lg:h-[615px] w-[328px] h-[2550px] flex justify-center sm:flex-row flex-col items-center gap-[30px] mt-[50px] lg:mt-0">
          <div className="lg:w-[238px] w-[328px] h-[615px] flex justify-center  items-center flex-col">
            <Link href={'/ProductList'}>
            <Image
              src={"/f1.svg"}
              alt="img"
              width={239}
              height={427}
              className="hidden lg:block"
            />
            <Image
              src={"/f11.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block"
            />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
             <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
          {/* 2 */}
          <div className="lg:w-[238px] w-[348px] h-[615px] flex justify-center items-center flex-col">
          <Link href={'/ProductList'}>
            <Image
              src={"/f4.svg"}
              alt="img"
              width={239}
              height={427}
              className="hidden lg:block"
            />
             <Image
              src={"/f12.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block"
            />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
          {/* 3 */}
          <div className="lg:w-[238px] w-[348px]  h-[615px] flex justify-center items-center flex-col">
          <Link href={'/ProductList'}>
            <Image src={"/f5.svg"} alt="img" width={239} height={427} 
            className="hidden lg:block"/>
             <Image
              src={"/f13.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block"
            />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
          {/* 4 */}
          <div className="lg:w-[238px] w-[348px] h-[615px] flex justify-center items-center flex-col">
          <Link href={'/ProductList'}>
            <Image src={"/f6.svg"} alt="img" width={239} height={427} 
            className="hidden lg:block"/>
             <Image
              src={"/f14.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block" 
                         />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
        </div>
        {/* 2nd row */}
        <div className="lg:w-[1049px] lg:h-[615px] w-[328px] h-[2550px] flex justify-center sm:flex-row flex-col items-center gap-[30px]">
          <div className="lg:w-[238px] w-[348px] h-[615px] flex justify-center items-center flex-col">
          <Link href={'/ProductList'}>
            <Image src={"/f10.svg"} alt="img" width={239} height={427} 
            className="hidden lg:block"/>
               <Image
              src={"/f18.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block" 
                         />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
          {/* 6 */}
          <div className="lg:w-[238px] w-[348px] h-[615px] flex justify-center items-center flex-col">
          <Link href={'/ProductList'}>
            <Image src={"/f9.svg"} alt="img" width={239} height={427} 
            className="hidden lg:block"/>
               <Image
              src={"/f16.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block" 
                         />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
          {/* 7 */}
          <div className="lg:w-[238px] w-[348px] h-[615px] flex justify-center items-center flex-col">
          <Link href={'/ProductList'}>
            <Image src={"/f8.svg"} alt="img" width={239} height={427}
            className="hidden lg:block" />
               <Image
              src={"/f16.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block" 
                         />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
          {/* 8 */}
          <div className="lg:w-[238px] w-[348px] h-[615px] flex justify-center items-center flex-col ">
          <Link href={'/ProductList'}>
            <Image src={"/f7.svg"} alt="img" width={239} height={427} 
            className="hidden lg:block"/>
               <Image
              src={"/f17.svg"}
              alt="img"
              width={348}
              height={427}
              className="md:hidden block" 
                         />
            <div className="w-[239px] h-[188px] pt-[25px] px-[25px] pb-[35px] flex justify-center items-center flex-col gap-[10px]">
              <h1
                className={`${montserrat.className} text-[16px] leading-[24px] font-bold text-[#252B42]`}
              >
                Graphic Design
              </h1>
              <h1
                className={`${montserrat.className} text-[14px] leading-[24px] text-[#737373]`}
              >
                English Department
              </h1>
              <div className="flex justify-center items-center w-[108px] h-[34px] gap-[5px]">
              <p className="text-[16px] font-bold leading-[24px] text-[#BDBDBD]">$16.48</p>
              <p className="text-[16px] font-bold leading-[24px] text-[#23856D]">$6.48</p>
             </div>
              <div className="flex justify-center items-center gap-[6.08px] w-[82.23px] h-[16px]">
                <h1 className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></h1>
                <h1 className="w-[16px] h-[16px] bg-black rounded-full"></h1>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
