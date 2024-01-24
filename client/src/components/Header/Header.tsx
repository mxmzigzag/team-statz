// import Cookie from "js-cookie";
import {
  // useCallback,
  // useContext,
  // useEffect,
  useMemo,
  useState,
  // useRef,
  // useState,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Flex, Modal, Select, Typography } from "antd";

// import { SessionContext } from "../../session/session.provider";

// import AuthModal from "../AuthModal/authModal";
// import Select from "../Select/select";

import { ELanguages } from "./Header.types";
import { LANGUAGE_OPTIONS, NAV_ITEMS, createLabels } from "./Header.assets";
import { UserIcon } from "../../assets/icons/UserIcon";
import { AuthForm } from "../AuthForm";
import { useIntl } from "react-intl";
// import { SettingsIcon } from "../../assets/icons/settingsIcon";
// import { LogoutIcon } from "../../assets/icons/LogoutIcon";

const { Title, Text } = Typography;

export const Header = () => {
  const intl = useIntl();
  // const { isAuthenticated, logOutUser } = useContext(SessionContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const [lang, setLang] = useState<ELanguages>(ELanguages.en);

  const labels = useMemo(() => createLabels(intl), [intl]);

  // const userPanelRef = useRef(null);
  // const closeUserPanel: boolean = useOutsideClickHandler(userPanelRef);

  const activeNavItem = useMemo(
    () => NAV_ITEMS.find((item) => item.id === pathname.slice(1)),
    [pathname]
  );

  // useEffect(() => {
  //   if (isAuthenticated && closeUserPanel && modal) setModal(false);
  // }, [closeUserPanel, isAuthenticated, modal]);

  // useEffect(() => {
  //   const lang = Cookie.get("language");
  //   i18n.changeLanguage(lang || "en");
  // }, [i18n]);

  // const toggleModal = () => setModal(!modal);
  // const closeOnLogin = () => setModal(false);

  // const handleGetActive = useCallback(
  //   (option: string) => i18n.changeLanguage(option),
  //   [i18n]
  // );

  return (
    <Flex justify="flex-end" component="header" className="p-6 mb-9">
      <NavLink to="/" className="pr-5 mr-auto">
        <Title level={1} className="relative group">
          Team Stat
          <Text className="flex items-center justify-center text-white absolute -right-6 top-1/4 -translate-y-1/2 bg-zGreen rounded-full w-5 h-5 group-hover:rotate-180 transition-all">
            Z
          </Text>
        </Title>
      </NavLink>
      <nav>
        <ul className="flex items-center list-style-none">
          {NAV_ITEMS.map((item) => (
            <li className="relative px-4">
              <NavLink
                to={`/${item.id}`}
                className={`group flex flex-col items-center text-sm ${
                  activeNavItem?.id === item.id ? "text-zGreen" : "text-zText"
                } transition-all`}
              >
                {item.icon}
                <Text
                  className={`mt-1.5 group-hover:opacity-100 group-hover:text-zGreen group-hover:translate-y-0 ${
                    activeNavItem?.id === item.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  } transition-all`}
                >
                  {item.title}
                </Text>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Select
        defaultValue={ELanguages.en}
        value={lang}
        onChange={setLang}
        options={LANGUAGE_OPTIONS}
      />
      <button
        className="group relative px-4 cursor-pointer flex flex-col items-center text-sm"
        onClick={() => setIsModalOpen(true)}
      >
        <UserIcon width="36px" height="36px" />
        <Text className="mt-1.5 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:text-zGreen group-hover:translate-y-0 transition-all">
          {labels.authTooltip}
        </Text>
        {/* {isAuthenticated ? (
          <div
            className={`${styles.userPanel} ${
              modal ? styles.userPanelOpened : ""
            }`}
          >
            <NavLink to={"/app/settings"}>
              <SettingsIcon width="30px" height="30px" />
            </NavLink>
            <button
              type="button"
              onClick={() => logOutUser()}
              className={styles.hoverLogout}
            >
              <LogoutIcon width="30px" height="30px" />
            </button>
          </div>
        ) : null} */}
      </button>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
      >
        <AuthForm />
      </Modal>
      {/*  {modal && !isAuthenticated ? (
        <>
          <AuthModal closeOnLogin={closeOnLogin} />
          <div className={styles.modalBg} onClick={() => toggleModal()} />
        </>
      ) : null} */}
    </Flex>
  );
};
