import { IntlShape } from "react-intl";

const createLabels = (intl: IntlShape) => ({
  formTitle: intl.formatMessage({
    id: "Auth.Form.Title",
    defaultMessage: "Authentication",
  }),
  loginLabel: intl.formatMessage({
    id: "Auth.Form.Field.Login.Label",
    defaultMessage: "Login",
  }),
  loginPlaceholder: intl.formatMessage({
    id: "Auth.Form.Field.Login.Placeholder",
    defaultMessage: "Login",
  }),
  passwordLabel: intl.formatMessage({
    id: "Auth.Form.Field.Password.Label",
    defaultMessage: "Password",
  }),
  passwordPlaceholder: intl.formatMessage({
    id: "Auth.Form.Field.Password.Placeholder",
    defaultMessage: "Password",
  }),
  loginButton: intl.formatMessage({
    id: "Auth.Form.Button.Login",
    defaultMessage: "Login",
  }),
});

export { createLabels };
