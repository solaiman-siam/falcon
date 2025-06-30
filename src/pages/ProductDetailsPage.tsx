import { ChevronDown, Minus, Plus, Share2 } from "lucide-react";
import Container from "../shared/Container";
import { imageProvider } from "../utils/imageProvider";
import { Rating } from "@smastrom/react-rating";
import { GoHeart } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules

import "@smastrom/react-rating/style.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const ProductPage = () => {
  const [currentSlug, setCurrentSlug] = useState("iphone-15-plus");
  const starStyles = {
    itemShapes: (
      <path d="M11.0748 3.25583C11.4141 2.42845 12.5859 2.42845 12.9252 3.25583L14.6493 7.45955C14.793 7.80979 15.1221 8.04889 15.4995 8.07727L20.0303 8.41798C20.922 8.48548 21.2841 9.59942 20.6021 10.1778L17.1369 13.1166C16.8482 13.3614 16.7227 13.7483 16.8122 14.1161L17.8882 18.5304C18.1 19.3992 17.152 20.0879 16.3912 19.618L12.5255 17.1635C12.2034 16.9599 11.7966 16.9599 11.4745 17.1635L7.60881 19.618C6.84796 20.0879 5.90001 19.3992 6.1118 18.5304L7.18785 14.1161C7.27729 13.7483 7.1518 13.3614 6.86314 13.1166L3.3979 10.1778C2.71588 9.59942 3.07796 8.48548 3.96971 8.41798L8.50046 8.07727C8.87794 8.04889 9.20704 7.80979 9.35068 7.45955L11.0748 3.25583Z" />
    ),
    activeFillColor: "#EAB308", // Filled star color
    inactiveFillColor: "#EAB308", // Empty star color
  };

  const sizeStyle =
    "size-11 hover:border-[#00A788] flex transition-all duration-150 cursor-pointer items-center justify-center  rounded-md border border-black/10";

  // get product data
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "http://157.230.240.97:9999/api/v1/shop/products"
      );
      return res?.data?.data;
    },
  });

  // product details ata
  const { data: productDetails = {} } = useQuery({
    queryKey: ["productDetails", currentSlug],
    queryFn: async () => {
      const res = await axios.get(
        `http://157.230.240.97:9999/api/v1/product/${currentSlug}`
      );
      return res?.data?.data;
    },
    enabled: !!currentSlug,
  });

  console.log(productDetails);

  const handleProductClick = (slug: string) => {
    if (slug) {
      setCurrentSlug(slug);
    }
  };

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 gap-10 py-8">
          <div className="col-span-9  ">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-5">
                {/* main image */}
                <div className="h-[400px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={productDetails?.thumbnail}
                    alt="product"
                  />
                </div>
                {/* others image */}
                <div className="  gap-2 pt-2">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwiper"
                  >
                    {products?.map((product) => (
                      <SwiperSlide>
                        <div
                          onClick={() => handleProductClick(product?.slug)}
                          className="rounded-md col-span-1 overflow-hidden"
                        >
                          <img
                            className="w-full h-[100px] object-cover "
                            src={product?.thumbnail}
                            alt="product"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              {/* description */}
              <div className="col-span-7 w">
                <h3 className="text-xl font-semibold  text-black/80">
                  {productDetails?.name}
                </h3>
                {/* ratings */}
                <div className="pt-6 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <h4> {productDetails?.rating_avg}</h4>
                    <Rating
                      readOnly
                      style={{ maxWidth: 100 }}
                      itemStyles={starStyles}
                      value={productDetails?.rating_count}
                    />
                    <h4>{productDetails?.total_stock_qty}</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <GoHeart
                      size={28}
                      className="text-[#475569] cursor-pointer"
                    />
                    <Share2 className="text-[#475569] cursor-pointer" />
                  </div>
                </div>
                {/* price */}
                <div className="flex  items-start gap-3 pt-6">
                  <h3 className="text-2xl text-[#00A788] font-semibold">
                    ৳{productDetails?.product_detail?.discount_price}
                  </h3>
                  <h4 className="line-through text-[#94A3B8]">
                    ৳
                    {productDetails?.product_detail?.regular_price -
                      productDetails?.product_detail?.discount_price}
                  </h4>
                </div>
                {/* promotion text */}
                <div className="flex items-center gap-4 pt-4">
                  <h4 className="text-black/80">Promotion</h4>
                  <div
                    style={{
                      clipPath:
                        "polygon(100% 0, 91% 50%, 100% 100%, 0% 100%, 0 54%, 0% 0%)",
                      width: "180px",
                      height: "30px",
                      backgroundColor: "red",
                    }}
                    className=" bg-gradient-to-r px-4 items-center flex from-[#FF8810] to-[#e63e0b] text-white"
                  >
                    Min. spend ৳550
                  </div>
                </div>
                {/* colors */}
                <div className="pt-4">
                 {
                  productDetails?.is_variant &&  <h4 className="flex font-medium items-center gap-1">
                    <span className="text-black/80">Available Color:</span>{" "}
                    <span>Navy Blue</span>
                  </h4>
                 }
                  <div className="flex items-center w-6/12 pt-4  gap-2">
                    {
                      productDetails?.variations?.map((colors) => (
                        <div>
                          <img
                            className="rounded-sm"
                            src={colors?.image}
                            alt="variants"
                          />
                        </div>
                      ))}
                  </div>
                </div>
                {/* sizes */}
                <div className="pt-4">
                  <h4 className="pb-2 font-medium">Select Size: XS</h4>
                  <div className="flex items-center gap-2">
                    <h4 className={sizeStyle}>XL</h4>
                    <h4 className={sizeStyle}>XS</h4>
                    <h4 className={sizeStyle}>S</h4>
                    <h4 className={sizeStyle}>M</h4>
                    <h4 className={sizeStyle}>L</h4>
                  </div>
                </div>
                {/* quantity */}
                <div className="pt-4">
                  <h4 className="pb-2 font-medium">Quantity</h4>
                  <div className="flex rounded-full border border-black/8 w-4/12 justify-between items-center gap-4">
                    <button className="px-2.5 py-2.5 rounded-full border-2 cursor-pointer border-white bg-[#F1F5F9]">
                      <Minus className="size-5 text-black/50" />
                    </button>
                    <h4 className="select-none font-medium text-black/90">
                      02
                    </h4>
                    <button className="px-2.5 py-2.5 rounded-full cursor-pointer border-2 border-white bg-[#F1F5F9]">
                      <Plus className="size-5 text-black/50" />
                    </button>
                  </div>
                </div>
                {/* cart button */}
                <div className="pt-4">
                  <button className="w-8/12 bg-[#00A788] cursor-pointer text-white rounded-md py-3 font-medium ">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* rightside */}
          <div className="col-span-3 flex  flex-col gap-3 ">
            <div className="rounded-xl border border-black/10 p-4">
              <h3 className="text-black/80 pb-2 text-lg">Delivery Options</h3>
              <div className="flex items-start pt-2.5 gap-2 pb-2">
                <div className="pt-px">
                  <img src={imageProvider.PackageGreen} alt="package" />
                </div>
                <div className="flex flex-col gap-px">
                  <h4>Regular</h4>
                  <p className="text-xs text-black/70">
                    Delivery within 2-3 days
                  </p>
                </div>
              </div>
              <div className="flex items-start pt-2.5 gap-2">
                <div className="pt-px">
                  <img src={imageProvider.Express} alt="package" />
                </div>
                <div className="flex flex-col gap-px">
                  <div className="flex items-center gap-2">
                    <h4 className="text-black/20">Express</h4>
                    <p className="text-red-400/60 text-xs">Not Available</p>
                  </div>
                  <p className="text-xs text-black/20">
                    Delivery within 2-3 days
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 p-4">
              <h3 className="text-black/80 pb-2 text-lg">Sold by</h3>
              <div>
                <img src={imageProvider.RisingStar} alt="" />
              </div>
              <div className="flex border-b pb-3 border-black/10 items-center pt-4 gap-2">
                <div className="flex justify-center flex-1 bg-[#E6F8F4] px-2 rounded-sm py-2 items-center gap-2">
                  <div>
                    <img src={imageProvider.Chat} alt="" />
                  </div>
                  <h4 className="text-[#00A788]"> Chat Now</h4>
                </div>
                <div className="flex-1 bg-[#F1F5F9] py-2 justify-center flex  rounded-md">
                  <button className="text-black/70">View Shop</button>
                </div>
              </div>
              <div className="flex items-center pt-4 justify-between">
                <div className="flex flex-col gap-3 items-center">
                  <h4 className=" text-[15px] text-black/60">Ship on Time</h4>
                  <h2 className="text-[32px]  text-black/60">100%</h2>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center">
                  <h4 className=" text-[15px] text-black/60">Chat Response</h4>
                  <h2 className="text-[32px]  text-black/60">90%</h2>
                </div>
                <div className="flex flex-col gap-3 items-center">
                  <h4 className=" text-[15px] text-black/60">Shop Rating</h4>
                  <h2 className="text-[32px]  text-black/60">99.8%</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#F1F5F9] py-4">
        <Container>
          <div className="w-[77%] flex flex-col gap-3 pb-20">
            {/* description */}
            <div className="p-5 rounded-md bg-white">
              <h3 className="text-lg font-medium pb-4">Description</h3>
              <p className="text-black/70 ">
                Just as a book is judged by its cover, the first thing you
                notice when you pick up a modern smartphone is the display.
                Nothing surprising, because advanced technologies allow you to
                practically level the display frames and cutouts for the front
                camera and speaker, leaving no room for bold design solutions.
                And how good that in such realities Apple everything is fine
                with displays. Advanced technologies allow you to practically
                level the display frames and cutouts for the front camera and
                speaker, leaving no room for bold design solutions. And how good
                that in such realities Apple everything
              </p>
              <div className="flex justify-center pt-2 items-center">
                <button className="flex cursor-pointer items-center gap-1 font-medium text-sm">
                  See More <ChevronDown strokeWidth={1.2} />
                </button>
              </div>
            </div>
            {/* specification */}
            <div className="p-5 rounded-md bg-white">
              <h3 className="text-lg font-medium pb-4">Specification</h3>
              <div className="text-black/70 ">
                <h4 className="pb-2 font-medium pb-4">
                  Sharp FP-J30E-B Air Purifier
                </h4>
                <div className="flex flex-col gap-2 **:text-sm **:text-black/70">
                  <li>GMP Cosmetic Good Manufacturing Practice</li>
                  <li>GMP Cosmetic Good Manufacturing Practice</li>
                  <li>GMP Cosmetic Good Manufacturing Practice</li>
                  <li>GMP Cosmetic Good Manufacturing Practice</li>
                </div>
              </div>
              <div className="flex justify-center pt-2 items-center">
                <button className="flex cursor-pointer items-center gap-1 font-medium text-sm">
                  See More <ChevronDown strokeWidth={1.2} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ProductPage;
