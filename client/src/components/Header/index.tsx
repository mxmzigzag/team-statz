// import Cookie from "js-cookie";
import {
  // useCallback,
  // useContext,
  // useEffect,
  useMemo,
  // useRef,
  // useState,
} from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Flex, Typography } from "antd";

// import { SessionContext } from "../../session/session.provider";

// import AuthModal from "../AuthModal/authModal";
// import Select from "../Select/select";

import { TeamIcon } from "../../assets/icons/TeamIcon";
import { ScheduleIcon } from "../../assets/icons/ScheduleIcon";
import { StatsIcon } from "../../assets/icons/StatsIcon";
// import { UserIcon } from "../../assets/icons/userIcon";
// import { SettingsIcon } from "../../assets/icons/settingsIcon";
// import { LogoutIcon } from "../../assets/icons/LogoutIcon";

const { Title, Text } = Typography;

export const Header = () => {
  // const { isAuthenticated, logOutUser } = useContext(SessionContext);
  // const [modal, setModal] = useState<boolean>(false);
  const {
    t,
    // i18n
  } = useTranslation();
  // const userPanelRef = useRef(null);
  // const closeUserPanel: boolean = useOutsideClickHandler(userPanelRef);

  const navItems = useMemo(
    () => [
      {
        id: "team",
        title: "Team",
        icon: <TeamIcon width="36px" height="36px" />,
      },
      {
        id: "schedule",
        title: "Schedule",
        icon: <ScheduleIcon width="36px" height="36px" />,
      },
      {
        id: "stats",
        title: "Stats",
        icon: <StatsIcon width="36px" height="36px" />,
      },
    ],
    []
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
    <Flex
      align="center"
      justify="flex-end"
      component="header"
      className="p-6 mb-9"
    >
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
          {navItems.map((item) => (
            <li className="relative text-lg px-4">
              <NavLink
                to={`/${item.id}`}
                className={({ isActive }) =>
                  `flex flex-col items-center text-zText text-sm ${
                    isActive ? "text-zGreen" : ""
                  } transition-all`
                }
              >
                {item.icon}
                <span className="mt-1.5">{t(item.title)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {/* <Select
        options={["en", "ru", "uk"]}
        className={styles.languageSwitcher}
        getActive={handleGetActive}
        defaultValue={Cookie.get("language") || "en"}
        type="language"
        arrow={false}
      />
      <span
        className={styles.auth}
        onClick={() => toggleModal()}
        ref={userPanelRef}
      >
        <UserIcon width="36px" height="36px" />
        {!isAuthenticated && !modal ? <span>{t("Moder")}</span> : null}
        {isAuthenticated ? (
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
        ) : null}
      </span>
      {modal && !isAuthenticated ? (
        <>
          <AuthModal closeOnLogin={closeOnLogin} />
          <div className={styles.modalBg} onClick={() => toggleModal()} />
        </>
      ) : null} */}
    </Flex>
  );
};
