import React, { FC, useContext, useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { createLabels } from "./AuthForm.assets";

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
  const [form, setForm] = useState<any>({ login: "", password: "" });

  const labels = useMemo(() => createLabels(intl), [intl]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    <div
    // className={styles.authModal}
    >
      <h3 className="title">{labels.formTitle}</h3>
      <form
        // className={styles.authCont}
        onSubmit={loginHandler}
      >
        <div
        // className={styles.authInput}
        >
          <input
            type="text"
            name="login"
            id="login"
            placeholder={labels.loginPlaceholder}
            onChange={changeHandler}
          />
          <label htmlFor="login">{labels.loginLabel}</label>
        </div>
        <div
        // className={styles.authInput}
        >
          <input
            type="password"
            name="password"
            id="password"
            placeholder={labels.passwordLabel}
            onChange={changeHandler}
          />
          <label htmlFor="password">{labels.passwordLabel}</label>
        </div>
        <div
        // className={styles.authAction}
        >
          <button
            type="submit"
            className="btn-submit"
            // disabled={loading}
          >
            {labels.loginButton}
          </button>
          {/* <button
            className="btn-submit"
            onClick={registerHandler}
            disabled={loading}
          >
            {t("Register")}
          </button> */}
        </div>
      </form>
    </div>
  );
};
