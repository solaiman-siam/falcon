import { ChevronRight, Minus, Plus, Trash2 } from "lucide-react";
import Container from "../shared/Container";
import { imageProvider } from "../utils/imageProvider";
import { Checkbox } from "antd";
import { useState } from "react";

const MyCartPage = () => {



  const houseOnChange = () => {

  }

  const handleSelectAll = () => {

  }


  const [count, setCount] = useState<number>(1)

  return (
    <div className="py-24 bg-[#f1f5f9]">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8 bg-white p-5 rounded-lg">
            <div className="flex border-b border-black/10 pb-6 items-end  justify-between">
              <h2 className="text-3xl font-medium">
                My Cart <span>(3)</span>
              </h2>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Checkbox  onChange={handleSelectAll}></Checkbox>
                  <span className="text-black/70">Select All</span>
                </div>
                <h4 className="text-black/70 cursor-pointer">Clear All</h4>
              </div>
            </div>
            <div className="pt-4"> 
              <div className="bg-[#F1F5F9] p-2.5 flex items-center gap-2 w-full translate-x-5">
                <Checkbox  onChange={houseOnChange}></Checkbox>
                <div className="flex items-center cursor-pointer gap-3">
                  <img className="size-6" src={imageProvider.Store} alt="" />
                  <h4 className="flex items-center gap-2 text-sm text-black/60">BD FASHION HOUSE  <ChevronRight strokeWidth={1} size={16} /></h4>
                </div>
              </div>
              <div className="flex pl-7 justify-start items-start gap-4 py-3">
                <div>
                   <Checkbox  onChange={houseOnChange}></Checkbox>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2/12">
                     <img className="w-full rounded-md h-full" src={imageProvider.Shirt} alt="" />
                  </div>
                  <div className="w-8/12">
                    <h3 className="font-medium pb-1">Bestway Brand Air Inflatable 5 In 1 semi Double Sofa </h3>
                    <h4 className="text-black/70">Color: red; Size: M</h4>
                    <div className="pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex rounded-full border border-black/8 w-4/12 justify-between items-center gap-4">
                    <button onClick={() => count > 1 && setCount( count - 1)} className="px-2.5 py-2.5 rounded-full border-2 cursor-pointer border-white bg-[#F1F5F9]">
                      <Minus className="size-5 text-black/50" />
                    </button>
                    <h4 className="select-none font-medium text-black/90">{count}</h4>
                    <button onClick={() => setCount( count + 1)} className="px-2.5 py-2.5 rounded-full cursor-pointer border-2 border-white bg-[#F1F5F9]">
                      <Plus  className="size-5 text-black/50" />
                    </button>
                  </div>
                    <button  className="cursor-pointer">
                      <Trash2 size={20} className="text-black/40"/>
                    </button>
                  </div>
                </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                    <h3 className="text-xl font-semibold text-black/90">৳1139</h3>
                    <h4 className="line-through text-sm text-black/40">৳1539</h4>
                </div>
              </div>
            </div>
          </div>
          {/* summary */}
          <div className="col-span-4 bg-white p-5 rounded-lg">
            <h3 className="text-3xl text-[#475569] font-medium pb-4">Order summary</h3>
            <div className="flex items-center justify-between">
              <h4 className="text-[#475569] font-medium">Price (3 items)</h4>
              <h4>৳00</h4>
            </div>
            <div className="flex items-center justify-between pt-3 pb-3">
              <h4 className="text-[#475569] font-medium">Shipping Price</h4>
              <h4 className="text-blue-400">To be added</h4>
            </div>
            <div className=" flex  items-center mb-4 mt-2  rounded-md ">
              <input type="text" name="" className="w-9/12 border rounded-l-md border-black/10 text-black/80 focus:outline-none px-4 py-2.5" placeholder="Store / Falcon coupon" id="" />
              <button className="py-2.5 rounded-r-md w-3/12 border border-[#00B795]  bg-[#00B795] text-white">Apply</button>
            </div>

            <div className="flex items-center pt-4 border-t border-dashed border-black/15 justify-between">
              <h4 className="text-[#475569] font-medium">Sub Total</h4>
              <h3 className="text-black/90 font-medium text-xl">৳00</h3>
            </div>
            <div className="pt-5">
              <button className="w-full rounded-sm bg-[#00B795] text-white font-medium cursor-pointer py-3">Process to Checkout</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyCartPage;
