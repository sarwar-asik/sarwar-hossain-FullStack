"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";

const ContactMe = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="block lg:flex justify-between gap-4 pt-[5rem] px-3">
      <section>
        <h3 className="text-text1 text-[3em] font-bold "> Reach Me,</h3>
        <p className=" text-[1rem] text-slate-500  mt-2 mb-3">
          You can contact with me for any query about me. With my Social media
          and Contact form. I am glad to your to your message
        </p>
        <div className="flex gap-5 text-2xl">
          <a
            className="text-white"
            href="https://web.facebook.com/people/Sarwar-Asik/pfbid02sgLP9m9SYR6PCtejfmX5uE8pA55pGXmRpnmmX7boQwMi78Xmdt2VTt1sMNL4wMGMl/"
            target="_blank"
          >
            <FacebookFilled />
          </a>
          <a
            className="text-white"
            href="https://bd.linkedin.com/in/sarwar-hossain-a29660257"
            target="_blank"
          >
            <LinkedinFilled />
          </a>
          <a className="text-white" href="https://twitter.com/sarwar_asik">
            <TwitterSquareFilled />
          </a>
        </div>
      </section>

      <section className="py-3 mt-3 lg:px-[40px] lg:w-[80%] ">
        <h1 className="text-text1 text-[3em] font-bold mb-5">Send Message</h1>
        <Form className="font-serif" action="" onFinish={onSubmit}>
          <div className="text-white">
            <label htmlFor="" className="my-2">
              Type Your Gmail
            </label>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                type="email"
                placeholder="Your email"
                className="w-full rounded mt-2 outline-none py-3 bg-slate-300 px-3 text-primary"
              />
            </Form.Item>
          </div>

          <div className="mt-5 text-white">
            <label htmlFor="" className="my-2">
              Your Message
            </label>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                placeholder="Your Message"
                className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300 text-primary"
              />
            </Form.Item>
          </div>
          <div className="">
            <Button
              type="primary"
              htmlType="submit"
              className="text-[1em] py-2 rounded bg-slate-500 text-white font-bold"
            >
              Send Message
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default ContactMe;
