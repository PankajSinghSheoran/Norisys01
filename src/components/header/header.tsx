import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "Company",
    key: "company",
  },
  {
    label: "Products",
    key: "products",
  },
  {
    label: "Catalogues",
    key: "catalogues",
  },
  {
    label: "Contact",
    key: "contact",
  },
];

export default function Header() {
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div>
      <div className="flex justify-start mt-10 mb-4 align-middle">
        <Input
          type="text"
          placeholder="search"
          className="w-[200px] p-2 h-5 py-2 ml-3 border border-gray-300"
        />
        <SearchOutlined className="h-4 ml-2" />
      </div>
      <div className="flex justify-between">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <img
          className="h-10 "
          src="https://www.norisys.com/assets/img/logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
