import React from "react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  let { t } = useTranslation();
  let router = useRouter();

  return (
    <section className="grid place-items-center h-screen text-center">
      <div>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-5">
        <h1 className="font-bold text-5xl">{t("common:title")}</h1>
        <p className="font-semibold">
          This project contain Tailwind Css and I18n
        </p>
        <p>
          This project created by{" "}
          <a className="text-blue-700 hover:text-blue-500 hover:cursor-pointer">
            Walid Essaied
          </a>
        </p>
        <div>
          <p>Contact me for more info</p>
          <ul className="grid gap-1">
            <li className="text-blue-700 hover:text-blue-500 hover:cursor-pointer">
              <a href="https://twitter.com/walid__essaied" target="_blank">
                Twitter
              </a>
            </li>
            <li className="text-blue-700 hover:text-blue-500 hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/in/walidessaied01/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li className="text-blue-700 hover:text-blue-500 hover:cursor-pointer">
              <a href="https://github.com/walidEssaied" target="_blank">
                Github
              </a>
            </li>
            <li className="text-blue-700 hover:text-blue-500 hover:cursor-pointer">
              <a
                href="https://walid-essaied-portfolio.vercel.app/"
                target="_blank"
              >
                My website
              </a>
            </li>
            <li className="text-blue-700 hover:text-blue-500 hover:cursor-pointer">
              <a href="https://facebook.com/walidessaied01" target="_blank">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
