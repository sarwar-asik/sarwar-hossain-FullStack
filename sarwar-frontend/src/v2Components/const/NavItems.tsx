import type { MenuProps } from "antd";
import Link from "next/link";
import {
  ProfileOutlined,
  TableOutlined,
  ThunderboltOutlined,
  HomeOutlined,
  MessageOutlined,
  DatabaseOutlined,
  ControlOutlined,
  UsergroupAddOutlined,
  ContainerOutlined,
  TabletOutlined,
  QuestionOutlined,
  PlusSquareOutlined,
  ExperimentFilled,
} from "@ant-design/icons";

const NavItems = (type: "nav" | "sidebar") => {
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
      label: (
        <Link href={`/`} className="">
          {" "}
          Home
        </Link>
      ),
      key: `/Home`,
      icon: <HomeOutlined />,
    },
    {
      label: <Link href={`/projects`}> Projects</Link>,
      key: "projects",
      icon: <ProfileOutlined />,
    },
    {
      label: <Link href={`/blogs`}> Blogs</Link>,
      key: `/blogs`,
      icon: <ControlOutlined />,
    },
    {
      label: <Link href={`/service`}> Service</Link>,
      key: `/service`,
      icon: <ThunderboltOutlined />,
    },

    {
      label: <Link href={`/skills`}> Skills</Link>,
      key: `/skills`,
      icon: <ExperimentFilled />,
    },
    {
      label: <Link href={`/testominal`}> Testimonial</Link>,
      key: `/testominal`,
      icon: <TabletOutlined />,
    },
    {
      label: <Link href={`/contact`}> Contact</Link>,
      key: `/contact`,
      icon: <MessageOutlined />,
    },
  ];

  if (type === "nav") return NavbarItems;
  else if (type === "sidebar") return SidebarItems;
};

export default NavItems;
