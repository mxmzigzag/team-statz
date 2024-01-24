import React, { FC, useContext, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { createLabels } from "./AuthForm.assets";
import { Button, Form, Input, Typography } from "antd";

const { Title } = Typography;

// import { User } from "../../session/session.types";

// import { useHttp } from "../../hooks/http.hook";
// import { useMessage } from "../../hooks/message.hook";

// import { SessionContext } from "../../session/session.provider";

// import styles from "./authModal.module.css";

interface IAuthFormProps {
  // closeOnLogin: () => void;
}

export const AuthForm: FC<IAuthFormProps> = () => {
  const intl = useIntl();

  // const { logInUser } = useContext(SessionContext);
  // const { loading, clearError } = useHttp();
  // const message = useMessage();
  const [form] = Form.useForm();

  const labels = useMemo(() => createLabels(intl), [intl]);

  // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // await logInUser(form);
      // closeOnLogin();
    } catch (error: any) {
      // message(error);
      // clearError();
    }
  };

  // const registerHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     const data = await request("/api/auth/register", "POST", { ...form });
  //     console.log("Data:", data);
  //   } catch (e) {}
  // };

  return (
    <Form
      form={form}
      name="auth"
      layout="vertical"
      autoComplete="off"
      requiredMark={false}
      className="flex flex-col"
    >
      <Title level={3} className="text-center">
        {labels.formTitle}
      </Title>

      <Form.Item
        name="login"
        label={labels.loginLabel}
        rules={[{ required: true }]}
      >
        <Input placeholder={labels.loginPlaceholder} />
      </Form.Item>

      <Form.Item
        name="password"
        label={labels.passwordLabel}
        rules={[{ required: true }]}
      >
        <Input placeholder={labels.passwordPlaceholder} />
      </Form.Item>

      <Form.Item className="flex justify-center mb-0">
        <Button type="primary" htmlType="submit">
          {labels.loginButton}
        </Button>
      </Form.Item>
    </Form>
  );
};
