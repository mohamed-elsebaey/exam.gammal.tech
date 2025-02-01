import React from "react";
import {
  getCoreLanguagesDataByUserId,
  getCoreLanguagesTopicsByProgrammingId,
  getLanguageIdByProgrammingLanguage,
} from "@/db/db";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/lib";

interface BlogPostPageProps {
  params: Promise<{
    programming_language: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;

  return {
    title: params.programming_language.replace(/_/g, " "),
  };
}

async function page({
  params,
}: {
  params: Promise<{ programming_language: string }>;
}) {
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  if (!userId) {
    redirect("/sign-in?path=practice/[programming_language]");
  }

  const programming_language = (await params).programming_language;
  const languages_id = await getLanguageIdByProgrammingLanguage(
    programming_language
  );
  if (languages_id.length != 1) {
    redirect(`/?${programming_language} not Founded`);
  }

  const core_languages_topics = await getCoreLanguagesTopicsByProgrammingId(
    languages_id[0].id
  );

  const userFlow: any = await getCoreLanguagesDataByUserId(userId);
  const languageFlow = userFlow[0][`${programming_language}`];

  return (
    <div className="py-20">
      <div className="container">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {core_languages_topics.map((topic: any) => {
            const active = languageFlow + 1 >= topic.topic_id ? true : false;
            const style = active
              ? `bg-green-500/95 cursor-pointer hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400`
              : `bg-gray-300 cursor-not-allowed select-none`;
            return (
              <button
                disabled={active}
                key={topic.topic_id}
                className={`relative w-72 rounded-xl px-6 py-4 overflow-hidden text-center group transition-all ease-out duration-300 ${style}`}
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">{topic.topic_name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
