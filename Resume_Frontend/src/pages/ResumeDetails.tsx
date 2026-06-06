import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResumeById } from "../api/resumeApi";

const ResumeDetails = () => {
  const { id } = useParams();

  const [resume, setResume] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await getResumeById(id as string);
        setResume(data.resume);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResume();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0B1120] text-white text-xl">
        Loading...
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0B1120] text-white text-xl">
        Resume not found
      </div>
    );
  }

  const analysis = resume.analysis;

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h1 className="text-4xl font-bold break-all">
                {resume.fileName}
              </h1>

              <p className="text-slate-400 mt-3">
                Uploaded on{" "}
                {new Date(
                  resume.createdAt
                ).toLocaleDateString()}
              </p>
            </div>

            <div
              className="
              w-40
              h-40
              rounded-full
              border-[10px]
              border-[#03C988]
              flex
              items-center
              justify-center
              "
            >
              <div className="text-center">
                <p className="text-5xl font-bold text-[#03C988]">
                  {analysis.atsScore}
                </p>

                <p className="text-slate-400 mt-1">
                  ATS Score
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-slate-400">
              Strengths
            </h3>

            <p className="text-4xl font-bold text-[#03C988] mt-2">
              {analysis.strengths.length}
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-slate-400">
              Weaknesses
            </h3>

            <p className="text-4xl font-bold text-red-400 mt-2">
              {analysis.weaknesses.length}
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-slate-400">
              Missing Keywords
            </h3>

            <p className="text-4xl font-bold text-[#1C82AD] mt-2">
              {analysis.missingKeywords.length}
            </p>
          </div>
        </div>

        <section className="bg-[#111827] border border-slate-800 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Resume Summary
          </h2>

          <p className="text-slate-300 leading-8">
            {analysis.summary}
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <section className="bg-[#111827] border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-[#03C988] mb-6">
              Strengths
            </h2>

            <ul className="space-y-4">
              {analysis.strengths.map(
                (
                  item: string,
                  index: number
                ) => (
                  <li
                    key={index}
                    className="flex gap-3 text-slate-300"
                  >
                    <span>
                      ✅
                    </span>

                    <span>
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="bg-[#111827] border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold text-red-400 mb-6">
              Weaknesses
            </h2>

            <ul className="space-y-4">
              {analysis.weaknesses.map(
                (
                  item: string,
                  index: number
                ) => (
                  <li
                    key={index}
                    className="flex gap-3 text-slate-300"
                  >
                    <span>
                      ❌
                    </span>

                    <span>
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </section>
        </div>

        <section className="bg-[#111827] border border-slate-800 rounded-3xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-6">
            Improvement Suggestions
          </h2>

          <ol className="space-y-4 list-decimal pl-6">
            {analysis.suggestions.map(
              (
                item: string,
                index: number
              ) => (
                <li
                  key={index}
                  className="text-slate-300"
                >
                  {item}
                </li>
              )
            )}
          </ol>
        </section>

        <section className="bg-[#111827] border border-slate-800 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Missing Keywords
          </h2>

          <div className="flex flex-wrap gap-3">
            {analysis.missingKeywords.map(
              (
                keyword: string,
                index: number
              ) => (
                <span
                  key={index}
                  className="
                  bg-[#1C82AD]/20
                  text-[#1C82AD]
                  px-4
                  py-2
                  rounded-full
                  font-medium
                  "
                >
                  {keyword}
                </span>
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResumeDetails;