import s from "./Newsletter.module.scss";
import Image from "next/image";
import { Button, Form, Input, notification } from "antd";
import { FC, useState } from "react";
import { subscribeToNewsletter } from "../../../services";
import Link from "next/link";
import axios from "axios";
import Email from "@components/ui/icon/Email";
import { AudioOutlined } from "@ant-design/icons";
import { Space } from "antd";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const onSearch = (value: string) => console.log(value);

const Newsletter = () => {
  const { Search } = Input;

  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (formData: any) => {
    console.log("Inside onfinish");
    // return;
    setIsLoading(true);
    try {
      // console.log("Data: " + ...formData);
      const response = await subscribeToNewsletter({
        ...formData,
      });
      notification.success({
        message: "Subscribed to newsletter",
        placement: "bottomRight",
        key: "Newsletter-success",
      });
    } catch (error: any) {
      if (error.response.data.message !== undefined) {
        notification.error({
          message: "Please enter valid email",
          placement: "bottomRight",
          key: "Newsletter-error",
        });
        return;
      }
      notification.info({
        message: "Already Subscribed",
        placement: "bottomRight",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`${s.container}`}
      data-aos-duration="1000"
      data-aos="slide-up"
      id="community"
    >
      <h1>Join our community today!</h1>
      <div className={s.input}>
        <div className={s.letter}>
          <Image src="/images/letter.svg" alt="letter" width={20} height={20} />
        </div>
        <Form autoComplete="off">
          <Form.Item
            name="email"
            className="input-newsletter"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter valid email",
              },
            ]}
          >
            <Input placeholder="Enter Email Address" />
          </Form.Item>

          <Button
            className={`${s.startBtn} btn-primary `}
            loading={isLoading}
            htmlType="submit"
          >
            Get Started
          </Button>
        </Form>
        {/* <div className={s.startBtn}>
      <p></p>
      </div> */}
      </div>
    </div>
  );
};

export default Newsletter;
