import { Button, Checkbox, Divider, Flex, Form, Input, Typography } from "antd";
import { useDB } from "../../db";
import { BasketBallIcon } from "../../assets/icons/BasketBallIcon";
import { sectionClasses, sectionTitleClasses } from "./SettingsList.styles";
import { useMemo } from "react";
import { createLabels } from "./SettingsList.assets";
import { useIntl } from "react-intl";

const { Title, Text } = Typography;

export const SettingsList = () => {
  const isAuthenticated = true;
  const loading = false;
  const { getFirst } = useDB();
  const settings = getFirst("settings");
  console.log("ZXC", settings);

  const intl = useIntl();
  const [form] = Form.useForm();

  const labels = useMemo(() => createLabels(intl), [intl]);

  // const [form, setForm] = useState<Settings>(settings);
  // const [popup, setPopup] = useState<boolean>(false);
  // const message = useMessage();
  // const { t } = useTranslation();

  // useEffect(() => setForm(settings), [settings]);

  // const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  // const handleCheckboxInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  //   setForm((prev) => ({ ...prev, [e.target.id]: Boolean(e.target.checked) }));

  // const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     //@ts-ignore
  //     const [file] = e.target.files;
  //     const reader = new FileReader();
  //     reader.onload = function (evt) {
  //       const contents = evt.target?.result?.toString();
  //       if (contents) setForm((prev) => ({ ...prev, teamLogo: contents }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (
  //     /[0-9]{4}-[0-9]{2}-[0-9]{2}/iu.test(form.playoffsStart) &&
  //     form.playoffsStart.split("-")[0].length <= 4 &&
  //     Number(form.playoffsStart.split("-")[1]) <= 12 &&
  //     Number(form.playoffsStart.split("-")[2]) <= 31
  //   ) {
  //     saveSettings(form);
  //   } else {
  //     message("Wrong date format");
  //   }
  // };

  // const handleGetAnswer = (answer: boolean) => {
  //   setPopup(false);
  //   if (answer) {
  //     buildPlayoffsBracket();
  //     setForm((prev) => ({ ...prev, playoffsBracketBuilt: true }));
  //   }
  // };

  return (
    <Flex className="max-w-[400px] w-full mx-auto">
      {loading ? (
        <BasketBallIcon width={120} height={120} />
      ) : settings ? (
        <Form
          form={form}
          initialValues={settings}
          layout="vertical"
          className="w-full"
        >
          <Flex vertical align="center" className={sectionClasses}>
            <Title level={5} className={sectionTitleClasses}>
              {labels.teamTitle}
            </Title>
            {/* <div className={styles.inputGroup}>
              <label htmlFor="teamLogo" className={styles.teamLogo}>
                <img src={form.teamLogo || BlankLogo} alt={t("Team logo")} />
              </label>
              <input
                type="file"
                accept="image/*"
                multiple={false}
                className={styles.inputFile}
                id="teamLogo"
                onChange={handleImageInputChange}
              />
            </div> */}
            <Form.Item name="teamName">
              <Input
                placeholder={labels.teamPlaceholder}
                className="text-center"
              />
            </Form.Item>
          </Flex>
          <Divider />
          <Flex vertical align="center" className={sectionClasses}>
            <Title level={5} className={sectionTitleClasses}>
              {labels.calendarTitle}
            </Title>
            <Form.Item name="enableCalendarScrollMode">
              <Checkbox>{labels.calendarLabel}</Checkbox>
            </Form.Item>
          </Flex>
          <Divider />
          <Flex vertical align="center" className={sectionClasses}>
            <Title level={5} className={sectionTitleClasses}>
              {labels.playoffsTitle}
            </Title>
            <Form.Item name="playoffsStart">
              <Input
                placeholder={labels.playoffsFieldPlaceholder}
                className="text-center"
              />
            </Form.Item>

            <Flex
              vertical
              align="center"
              className="border-2 border-zLightGray bg-[#e65c5c54] rounded-xl p-2.5"
            >
              <Divider dashed className="my-1">
                {labels.playoffBracketBuilderOr}
              </Divider>
              <Text className="mb-2">
                {labels.playoffBracketBuilderInfoText1}
              </Text>
              <Text className="mb-5">
                {labels.playoffBracketBuilderInfoText2}
              </Text>
              <Button type="primary" danger className="mb-2">
                {settings.playoffsBracketBuilt
                  ? labels.playoffBracketBuilderRebuild
                  : labels.playoffBracketBuilderBuild}
              </Button>
              <Button type="text">{labels.playoffBracketBuilderClear}</Button>
            </Flex>
            {/* <div className={styles.warning}>
              <p className={styles.subText}>
                <span className={styles.dividers}>{t("or")}</span>
                {t("Build the Playoffs bracket by pressing this button")}.{" "}
                {t(
                  "Be careful, because it will make changes in the standings table too"
                )}
              </p>
              <button
                type="button"
                className={`btn__main warning ${styles.btn}`}
                onClick={() => setPopup(true)}
              >
                {form.playoffsBracketBuilt ? t("Rebuild") : t("Build")}
              </button>
              <p
                className={styles.littleText}
                onClick={() => {
                  clearPlayoffsBracket();
                  setForm((prev) => ({ ...prev, playoffsBracketBuilt: false }));
                  message("Playoff bracket cleared!", "success");
                }}
              >
                {t("Clear playoffs")}
              </p>
            </div> */}
          </Flex>

          <Form.Item className="flex flex-col items-center">
            <Button type="primary" size="large">
              {labels.saveBtn}
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Text>Failed</Text>
      )}
      {/* {popup ? (
        <>
          <ConfirmPopup
            title={t("Are you shure?")}
            handleGetAnswer={handleGetAnswer}
            loadingTitle={`${t("Building")}...`}
          />
          <div className="dark-overlay" onClick={() => setPopup(false)} />
        </>
      ) : null} */}
    </Flex>
  );
};
