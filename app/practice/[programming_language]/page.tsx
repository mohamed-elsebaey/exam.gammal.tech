import React from "react";
import {
  getCoreLanguagesTopicsByProgrammingId,
  getLanguageIdByProgrammingLanguage,
} from "@/db/db";
import { redirect } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    programming_language: string;
  }>;
}

export async function generateMetadata(props: BlogPostPageProps) {
  const params = await props.params;

  return {
    title: params.programming_language,
  };
}

async function page(props: BlogPostPageProps) {
  const params = await props.params;

  const languages_id = await getLanguageIdByProgrammingLanguage(
    params.programming_language
  );
  if (languages_id.length != 1) {
    redirect(`/?${params.programming_language} not Founded`);
  }

  const core_languages_topics = await getCoreLanguagesTopicsByProgrammingId(
    languages_id[0].id
  );

  return (
    <div className="py-20">
      <div className="container">
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {core_languages_topics.map((topic: any) => {
            return (
              <div
                key={topic.topic_id}
                className="w-72 rounded-xl px-6 py-4 border-2 text-center"
              >
                <h1>{topic.topic_name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
