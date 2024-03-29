import type { MenuProps } from "antd";
import Link from "next/link";
import { ProfileOutlined, TableOutlined, ThunderboltOutlined, HomeOutlined,  MessageOutlined, DatabaseOutlined, ControlOutlined, UsergroupAddOutlined, ContainerOutlined, TabletOutlined, QuestionOutlined, PlusSquareOutlined, } from "@ant-design/icons";

const NavItems = (type:"nav" | "sidebar") => {
  const NavbarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,
      key: `/Home`,
    },
    {
      label: <Link href={`/projects`}> projects</Link>,
      key: `/projects`,
    },
    {
      label: <Link href={`/about`}> about</Link>,
      key: `/about`,
    },
    {
      label: <Link href={`/blogs`}> blogs</Link>,
      key: `/blogs`,
    },
    {
      label: <Link href={`/contact`}> contact</Link>,
      key: `/contact`,
    },
  ];

  const SidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,
      key: `/Home`,
      icon: <HomeOutlined />,
    },
    {
      label: "projects",
      key: "projects",
      icon: <ProfileOutlined />,
    },
    {
      label: <Link href={`/about`}> about</Link>,
      key: `/about`,
      icon: <ThunderboltOutlined />,
    },

    {
      label: <Link href={`/blogs`}> blogs</Link>,
      key: `/blogs`,
      icon: <ControlOutlined/>,
    },
    {
      label: <Link href={`/contact`}> contact</Link>,
      key: `/contact`,
      icon: <MessageOutlined />,
    },
  ];

  if (type === "nav") return NavbarItems;
  else if (type === "sidebar") return SidebarItems;
};


export default NavItems