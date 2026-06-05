import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResumeById } from "../api/resumeApi";

const ResumeDetails = () => {
  const { id } = useParams();

  const [resume, setResume] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchResume =
      async () => {
        try {
          const data =
            await getResumeById(
              id as string
            );

          setResume(
            data.resume
          );
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
      <div className="text-center py-20">
        Loading...
      </div>
    );
  }

  if (!resume) {
    return (
      <div className="text-center py-20">
        Resume not found
      </div>
    );
  }

  const analysis =
    resume.analysis;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="bg-white shadow rounded-2xl p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold">
              {
                resume.fileName
              }
            </h1>

            <p className="text-slate-500 mt-2">
              Uploaded on{" "}
              {new Date(
                resume.createdAt
              ).toLocaleDateString()}
            </p>
          </div>

          {/* ATS Score */}
          <div className="w-36 h-36 rounded-full border-12 border-blue-500 flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">
                {
                  analysis.atsScore
                }
              </p>

              <p className="text-sm text-slate-500">
                ATS Score
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="bg-white shadow rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">
          Resume Summary
        </h2>

        <p className="text-slate-700 leading-8">
          {
            analysis.summary
          }
        </p>
      </section>

      {/* Strengths & Weaknesses */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <section className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Strengths
          </h2>

          <ul className="space-y-3">
            {analysis.strengths.map(
              (
                item: string,
                index: number
              ) => (
                <li
                  key={index}
                  className="flex gap-3"
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

        <section className="bg-white shadow rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Weaknesses
          </h2>

          <ul className="space-y-3">
            {analysis.weaknesses.map(
              (
                item: string,
                index: number
              ) => (
                <li
                  key={index}
                  className="flex gap-3"
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

      {/* Suggestions */}
      <section className="bg-white shadow rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-5">
          Improvement Suggestions
        </h2>

        <ol className="space-y-4 list-decimal pl-5">
          {analysis.suggestions.map(
            (
              item: string,
              index: number
            ) => (
              <li
                key={index}
                className="text-slate-700"
              >
                {item}
              </li>
            )
          )}
        </ol>
      </section>

      {/* Missing Keywords */}
      <section className="bg-white shadow rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-5">
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
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
              >
                {keyword}
              </span>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default ResumeDetails;