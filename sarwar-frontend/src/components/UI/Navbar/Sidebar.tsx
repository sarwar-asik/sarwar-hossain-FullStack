import React, { useState } from "react";
import { Button, Drawer, Menu, Space } from "antd";

import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

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
        className="bg-secondary"
        placement={"left"}
        width={400}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button className="bg-secondary border-none " onClick={onClose}>
              <h2>Sarwar</h2>
            </Button>
          </Space>
        }
      >
        <Menu
          className="bg-secondary"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Drawer>
    </>
  );
};

export default SideBar;
