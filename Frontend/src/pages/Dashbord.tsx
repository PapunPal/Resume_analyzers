import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteResume,
  getResumes,
} from "../api/resumeApi";
import type { Resume } from "../types/resume";

const Dashboard = () => {
  const [resumes, setResumes] =
    useState<Resume[]>([]);

  const [loading, setLoading] =
    useState(true);

  const fetchResumes =
    async () => {
      try {
        const data =
          await getResumes();

        setResumes(data.resumes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleDelete =
    async (id: string) => {
      const confirmDelete =
        window.confirm(
          "Delete this resume?"
        );

      if (!confirmDelete) return;

      try {
        await deleteResume(id);

        setResumes((prev) =>
          prev.filter(
            (resume) =>
              resume._id !== id
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-[#0B1120] text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              My Resumes
            </h1>

            <p className="text-slate-400 mt-2">
              Manage and analyze all your resumes
            </p>
          </div>

          <Link
            to="/resumes/upload"
            className="w-full md:w-auto bg-[#03C988] text-black font-semibold px-6 py-3 rounded-2xl text-center hover:scale-105 transition-all duration-300"
          >
            + Add Resume
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-slate-400 text-sm">
              Total Resumes
            </h3>

            <p className="text-4xl font-bold mt-2 text-[#03C988]">
              {resumes.length}
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-slate-400 text-sm">
              Highest ATS
            </h3>

            <p className="text-4xl font-bold mt-2 text-[#1C82AD]">
              {resumes.length
                ? Math.max(
                    ...resumes.map(
                      (r) =>
                        r.analysis
                          .atsScore
                    )
                  )
                : 0}
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6">
            <h3 className="text-slate-400 text-sm">
              Average ATS
            </h3>

            <p className="text-4xl font-bold mt-2 text-white">
              {resumes.length
                ? Math.round(
                    resumes.reduce(
                      (
                        acc,
                        curr
                      ) =>
                        acc +
                        curr.analysis
                          .atsScore,
                      0
                    ) /
                      resumes.length
                  )
                : 0}
            </p>
          </div>
        </div>

        {resumes.length === 0 ? (
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-16 text-center">
            <div className="text-6xl mb-6">
              📄
            </div>

            <h2 className="text-3xl font-bold mb-4">
              No Resume Available
            </h2>

            <p className="text-slate-400 mb-8">
              Upload your first resume and get
              AI-powered analysis.
            </p>

            <Link
              to="/resumes/upload"
              className="inline-block bg-[#03C988] text-black px-8 py-3 rounded-2xl font-semibold"
            >
              Upload Resume
            </Link>
          </div>
        ) : (
          <div className="bg-[#111827] border border-slate-800 rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-175">
                <thead className="bg-[#13005A]">
                  <tr>
                    <th className="p-5 text-left">
                      #
                    </th>

                    <th className="p-5 text-left">
                      Resume Name
                    </th>

                    <th className="p-5 text-left">
                      ATS Score
                    </th>

                    <th className="p-5 text-left">
                      Date
                    </th>

                    <th className="p-5 text-left">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {resumes.map(
                    (
                      resume,
                      index
                    ) => (
                      <tr
                        key={
                          resume._id
                        }
                        className="border-t border-slate-800 hover:bg-slate-900/30"
                      >
                        <td className="p-5">
                          {index + 1}
                        </td>

                        <td className="p-5">
                          {
                            resume.fileName
                          }
                        </td>

                        <td className="p-5">
                          <span
                            className={`px-4 py-2 rounded-full font-semibold ${
                              resume
                                .analysis
                                .atsScore >=
                              70
                                ? "bg-[#03C988]/20 text-[#03C988]"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {
                              resume
                                .analysis
                                .atsScore
                            }
                          </span>
                        </td>

                        <td className="p-5 text-slate-400">
                          {new Date(
                            resume.createdAt
                          ).toLocaleDateString()}
                        </td>

                        <td className="p-5">
                          <div className="flex flex-wrap gap-3">
                            <Link
                              to={`/resumes/${resume._id}`}
                              className="bg-[#1C82AD] px-4 py-2 rounded-xl hover:opacity-90"
                            >
                              View
                            </Link>

                            <button
                              onClick={() =>
                                handleDelete(
                                  resume._id
                                )
                              }
                              className="bg-red-500 px-4 py-2 rounded-xl hover:bg-red-600"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;