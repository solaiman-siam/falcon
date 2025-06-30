import { Menu } from "lucide-react";
import { imageProvider } from "../utils/imageProvider";
import Container from "./Container";
import type { MenuProps } from "antd";
import { Menu as AntdMenu } from "antd";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const SubNavbar = () => {
  type MenuItem = Required<MenuProps>["items"][number];

  //   const items: MenuItem[] = [
  //     {
  //       key: "sub1",
  //       label: "Navigation One",
  //       children: [
  //         {
  //           key: "1-1",
  //           label: "Item 1",
  //           type: "group",
  //           children: [
  //             { key: "1", label: "Option 1" },
  //             { key: "2", label: "Option 2" },
  //           ],
  //         },
  //         {
  //           key: "1-2",
  //           label: "Item 2",
  //           type: "group",
  //           children: [
  //             { key: "3", label: "Option 3" },
  //             { key: "4", label: "Option 4" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       key: "sub2",
  //       label: "Navigation Two",
  //       children: [
  //         { key: "5", label: "Option 5" },
  //         { key: "6", label: "Option 6" },
  //         {
  //           key: "sub3",
  //           label: "Submenu",
  //           children: [
  //             { key: "7", label: "Option 7" },
  //             { key: "8", label: "Option 8" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       key: "sub4",
  //       label: "Navigation Three",
  //       children: [
  //         { key: "9", label: "Option 9" },
  //         { key: "10", label: "Option 10" },
  //         { key: "11", label: "Option 11" },
  //         { key: "12", label: "Option 12" },
  //       ],
  //     },
  //   ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };

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

  const items = menuData?.map((item) => ({
    key: `cat-${item.id}`,
    label: item.name,
    children: item.subcategories.map((subcat) => ({
      key: `subcat-${subcat.id}`,
      label: subcat.name,
      type: "group",
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
                onClick={onClick}
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
