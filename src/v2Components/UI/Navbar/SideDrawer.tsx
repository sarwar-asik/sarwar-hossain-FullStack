"use client";
import React, { useState } from "react";
import { Button, Drawer, Menu, Space } from "antd";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";

const SideBar = ({ items }: { items?: any }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Space className="text-2xl">
        {!open ? <MenuOutlined onClick={showDrawer} /> : <CloseOutlined />}
      </Space>
      <Drawer
        className="bg-primary text-white"
        placement={"left"}
        width={330}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button
              className="bg-primary text-white border-none "
              onClick={onClose}
            >
              <Link href="/">Sarwar</Link>
            </Button>
          </Space>
        }
      >
        <Menu
          className="bg-primary text-white  font-[800] text-xl flex flex-col gap-3"
          defaultSelectedKeys={["1"]}
          onClick={() => setOpen(false)}
          mode="inline"
          items={items}

        />
      </Drawer>
    </>
  );
};

export default SideBar;
