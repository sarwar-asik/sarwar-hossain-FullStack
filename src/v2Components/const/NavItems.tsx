import type { MenuProps } from "antd";
import Link from "next/link";
import { ProfileOutlined, TableOutlined, ThunderboltOutlined, HomeOutlined, MessageOutlined, DatabaseOutlined, ControlOutlined, UsergroupAddOutlined, ContainerOutlined, TabletOutlined, QuestionOutlined, PlusSquareOutlined, ExperimentFilled, GithubOutlined } from "@ant-design/icons";

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
    {
      label: <Link href={`/github`}> Github State</Link>,
      key: `/github`,
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
      icon: <HomeOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },

    {
      label: <Link href={`/service`}> Service</Link>,
      key: `/service`,
      icon: <ThunderboltOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
    {
      label: <Link href={`/projects`}> Projects</Link>,
      key: "/projects",
      icon: <ProfileOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
    {
      label: <Link href={`/skills`}> Skills</Link>,
      key: `/skills`,
      icon: <ContainerOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
    {
      label: <Link href={`/testominal`}> Testimonial</Link>,
      key: `/testominal`,
      icon: <TabletOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
    {
      label: <Link href={`/blogs`}> Blogs</Link>,
      key: `/blogs`,
      icon: <ControlOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
    {
      label: <Link href={`/contact`}> Contact</Link>,
      key: `/contact`,
      icon: <MessageOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
    {
      label: <Link href={`/github`}> Github State</Link>,
      key: `/github`,
      icon: <GithubOutlined style={{
        fontSize: "1.7rem"
      }} />,
    },
  ];

  if (type === "nav") return NavbarItems;
  else if (type === "sidebar") return SidebarItems;
};

export default NavItems;
