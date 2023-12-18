import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t, lang } = useTranslation("home");

  const title = t("title");

  console.log("lang", lang);

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1>Lang: {lang}</h1>
        <h1>Title: {title}</h1>
      </div>
    </>
  );
}
