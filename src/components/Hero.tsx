import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Hero() {
  return (
    <>
      <Carousel className="w-full  lg:w-[1440px] md:w-[689px] ">
        <CarouselContent >
          {/* Banner Slides */}
          {Array.from({ length: 1 }).map((_, index) => (
            <CarouselItem key={`banner-${index}`}>
              <div className="w-full lg:w-[1440px] md:w-[689px] h-auto">
                <Card>
                  <CardContent>
                    {/* Large Screen View */}
                    <div className="hidden md:block  w-full lg:w-[1440px] md:w-[689px] lg:h-[716px] h-screen">
                      <Image
                        src="/shop-hero.svg"
                        alt="Banner Image"
                        width={1440}
                        height={716}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute left-[100px] top-0 w-[50%] h-full flex flex-col justify-center text-white gap-8 ">
                        <h1 className="text-lg font-bold">SUMMER 2020</h1>
                        <h1 className="text-5xl lg:text-[58px] font-bold leading-tight">
                          NEW COLLECTION
                        </h1>
                        <p className="text-lg lg:text-[20px] w-[376px] lg:leading-[30px]">
                          We know how large objects will act, but things on a
                          small scale.
                        </p>
                        <div className="w-56 h-14 flex justify-center items-center bg-green-600 text-white rounded-md">
                          <button className="md:text-lg  text-md font-bold">Shop Now</button>
                        </div>
                      </div>
                    </div>

                    <div className='w-[414px] h-[753px] md:hidden'>
                       <Image
                               src={'/h12.svg'}
                               alt="img"
                               width={414}
                               height={753}
                               className="w-[414px] h-[753px]"
                           />
                       </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}

          {/* Product Section Slide */}
          
          <CarouselItem key="product-section w-full lg:w-[1440px] md:w-[689px]  ">
            <div className="w-full ">
              <Card className="w-full">
                <CardContent >
                  <div className="lg:w-[1440px]   lg:h-[709px] w-full h-auto flex lg:flex-row flex-col text-left items-center  bg-[#23856D] px-4">
                    {/* Text Section */}
                    <div className="lg:w-[1036px] lg:h-[711px] w-full h-auto flex lg:flex-row flex-col justify-center text-white items-center lg:gap-[80px] gap-6 pt-[80px] lg:pt-0 lg:my-0 mx-auto">
                      <div className="lg:w-[509px] lg:h-[432px] w-full h-auto flex flex-col items-start gap-4">
                        <h1 className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">
                          SUMMER 2020
                        </h1>
                        <h1 className="text-[40px] lg:text-[58px] leading-[50px] lg:leading-[80px] font-bold">
                          Vita Classic Product
                        </h1>
                        <p className="text-[14px] lg:text-[16px] w-[376px] leading-[20px] lg:leading-[24px]">
                          We know how large objects will act, We know how are objects will act, We know
                        </p>
                        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
                          <h3 className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-bold">
                            $16.48
                          </h3>
                          <Link href={"#"}>
                            <button className="w-[184px] sm:w-auto bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold lg:px-6 lg:py-3 px-1 py-4 rounded-md">
                              ADD TO CART
                            </button>
                          </Link>
                        </div>
                      </div>

                      {/* Image Section */}
                      <div className="lg:w-[510px] lg:h-[685px] w-full  h-auto flex justify-center  items-center mt-8 lg:mt-6">
                        <Image
                          src={"/men1.svg"}
                          alt="Product image"
                          width={510}
                          height={685}
                          className="w-full h-screen lg:w-[510px] lg:h-[685px] "
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="ml-[90px]  hidden lg:block" />
        <CarouselNext className="mr-[90px] hidden lg:block" />
      </Carousel>
    </>
  );
}

export default Hero;
