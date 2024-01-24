"use client";
import HeaderPage from "@/v2Components/HOME/Header";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  FacebookOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-secondary text-white  min-h-fit">

     
      <HeaderPage />
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<MessageOutlined />}
      >
        <FloatButton icon={<SettingOutlined spin twoToneColor="#eb2f96" />} />
        <FloatButton
          icon={
            <Link href="https://www.linkedin.com/in/sarwar-asik" target="_blank" >
              <CommentOutlined />
            </Link>
          }
        />
      </FloatButton.Group>
    </section>
  );
}
