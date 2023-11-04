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
import ParticlesBg from "@/v2Components/UI/Particles";
import { optionParticlesService } from "@/v2Components/const/particles/optionParticlesService";
import { optionParticlesHeader } from "@/v2Components/const/particles/optionParticlesHeader";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="bg-secondary  text-white w-full  min-h-screen overflow-y-auto overflow-x-hidden z-10 
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

      <ParticlesBg option={optionParticlesService} />
      <section className="z-40 relative">{children}</section>
    </div>
  );
};

export default PublicLayout;
