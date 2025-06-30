import { Menu } from "lucide-react";
import { imageProvider } from "../utils/imageProvider";
import Container from "./Container";
import { Menu as AntdMenu } from "antd";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const SubNavbar = () => {

  const [isMenu, setIsMenu] = useState(false);

  const { data: menuData = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get(
        "http://157.230.240.97:9999/api/v1/categories"
      );
      return res?.data?.data;
    },
  });
// @ts-ignore
  const items = menuData?.map((item) => ({
    key: `cat-${item.id}`,
    label: item.name,
    // @ts-ignore
    children: item.subcategories.map((subcat) => ({
      key: `subcat-${subcat.id}`,
      label: subcat.name,
      type: "group",
      // @ts-ignore
      children: subcat.subchilds.map((child) => ({
        key: `child-${child.id}`,
        label: child.name,
      })),
    })),
  }));

  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuContainerRef.current &&
        // @ts-ignore
        !menuContainerRef.current.contains(event.target as Node)
      ) {
        setIsMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Container>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center relative gap-6">
            <button
              ref={menuRef}
              onClick={() => setIsMenu(!isMenu)}
              className="flex items-center cursor-pointer gap-4"
            >
              <Menu className="text-[#00B795]" />{" "}
              <h4 className="font-medium ">Categories</h4>
            </button>
            <div className="flex border-l border-black/20 items-center **:cursor-pointer **:text-sm **:text-black/80 gap-10 pl-8">
              <h4>Electronics</h4>
              <h4>Home Appliances</h4>
              <h4>Mother & Baby</h4>
              <h4>Automotive</h4>
              <h4>Automotive</h4>
            </div>
            <div
              ref={menuContainerRef}
              className={`bg-gray-50 rounded-md shadow-lg w-1/3 pt-3 h-[400px] z-[88] top-5.5 left-0 absolute transition-all  ${
                isMenu ? "visible opacity-100" : "opacity-0 invisible"
              }`}
            >
              <AntdMenu
                style={{
                  width: "100%",
                  background: "#fff",
                  fontWeight: "medium",
                }}
                mode="vertical"
                items={items && items}
              />
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center cursor-pointer gap-2 text-[13px] text-black/70">
              <img src={imageProvider.Package} alt="" />
              <h4 className="uppercase">TRACK ORDER</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 text-[13px] text-black/70">
              <img src={imageProvider.Support} alt="" />
              <h4 className="uppercase">Help Center</h4>
            </div>
            <div className="flex items-center cursor-pointer gap-2 text-[13px] text-black/70">
              <img src={imageProvider.Sell} alt="" />
              <h4 className="uppercase">Sell With Us</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubNavbar;
