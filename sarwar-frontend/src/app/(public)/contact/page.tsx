"use client";

import { Row, Col, Typography, Form, Input, Checkbox, Button, message } from "antd";

const { Title, Paragraph } = Typography;
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";

const ContactMe = () => {
  const [form] = useForm();
  const onFinish = (data: any) => {
    console.log(data);
    message.success("Sent Message")
    form.resetFields()
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen my-5 bg-secondary text-white"
    >
      <h1 className="text-4xl p-4 text-left font-bold tracking-wide">
        Reach me ?
      </h1>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary h-32 w-full"></div>

      <div className="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-5 md:px-0 mx-5">
          <div
            className="bg-gray-900  w-full lg:w-1/2 h-full pl-3  lg:p-7 pt-8"
            style={{
              border: "2px solid white",
            }}
          >
            <h3 className="text-2xl font-semibold mb-5">My Social Media</h3>

            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 no-underline py-3 text-white  hover:bg-black px-2"
              >
                <GithubFilled className="text-[1.6rem]" />
                Github
              </a>
              <a
                href="#"
                className="flex items-center gap-3 no-underline py-3 text-white  hover:bg-black px-2"
              >
                <LinkedinFilled className="text-[1.6rem]" />
                Linked In
              </a>
              <a
                href="#"
                className="flex items-center gap-3 no-underline py-3 text-white  hover:bg-black px-2"
              >
                <FacebookFilled className="text-[1.6rem]" />
                Facebook
              </a>
              <a
                href="#"
                className="flex items-center gap-3 no-underline py-3 text-white  hover:bg-black px-2"
              >
                <TwitterSquareFilled className="text-[1.6rem]" />
                Twitter
              </a>
            </div>
          </div>
        </div>

        <Form
          name="contact"
          className="w-full md:w-1/2 p-6 bg-gray-900"
          onFinish={onFinish}
          form={form}
          style={{
            border: "2px solid white",
          }}
        >
          <h1 className="text-[1.6rem] pb-3 text-white font-semibold">
            Send Message
          </h1>
          <div>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
              ]}
            >
              <Input
                type="text"
                id="name"
                className="px-3 py-4 bg-gray-800 border border-gray-900 focus:border-primary focus:outline-none focus:bg-gray-800 focus:text-primary"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input
                type="text"
                id="email"
                className="px-3 py-4 bg-gray-800 border border-gray-900 focus:border-primary focus:outline-none focus:bg-gray-800 focus:text-primary"
              />
            </Form.Item>
            <Form.Item name="message">
              <Input.TextArea
                rows={4}
                id="message"
                className="px-3 py-4 bg-gray-800 border border-gray-900 focus:border-primary focus:outline-none focus:bg-gray-800 focus:text-primary"
              />
            </Form.Item>
          </div>
          <div className="w-full pt-3">
            <Form.Item shouldUpdate>
              {() => (
                <button
                  // type="primary"
                  // htmlType="submit"
                  type="submit"
                  className="w-full bg-secondary border border-white px-4 py-4 transition duration-50 focus:outline-none font-semibold hover:bg-primary text-white  hover:text-white text-[1rem] cursor-pointer"
                >
                  Send
                </button>
              )}
            </Form.Item>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactMe;
