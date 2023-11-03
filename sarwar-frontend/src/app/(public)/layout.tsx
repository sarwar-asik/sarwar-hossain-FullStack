"use client";
import React from "react";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  FacebookOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FloatButton } from "antd";
import Link from "next/link";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-secondary text-white w-full  min-h-screen overflow-y-auto overflow-x-hidden 

    "
    >
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24 }}
        icon={<MessageOutlined />}
      >
        <FloatButton icon={<SettingOutlined spin twoToneColor="#eb2f96" />} />
        <FloatButton
          icon={
            <Link
              href="https://www.linkedin.com/in/sarwar-asik"
              target="_blank"
            >
              <CommentOutlined />
            </Link>
          }
        />
      </FloatButton.Group>
      {/* <section className="min-h-screen w-full bg-secondary">
        </section> */}
      {children}
    </div>
  );
};

export default PublicLayout;
