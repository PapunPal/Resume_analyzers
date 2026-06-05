import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  deleteResume,
  getResumes,
} from "../api/resumeApi";

import type { Resume } from "../types/resume.ts";

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
      <div className="text-center mt-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            My Resumes
          </h1>

          <p className="text-slate-500">
            Total Resumes:{" "}
            {resumes.length}
          </p>
        </div>

        <Link
          to="/resumes/upload"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Resume
        </Link>
      </div>

      {/* Empty State */}
      {resumes.length === 0 ? (
        <div className="bg-white shadow rounded-xl p-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            No Resume Available
          </h2>

          <p className="text-slate-500 mb-6">
            Upload your first resume
            and get AI analysis.
          </p>

          <Link
            to="/
            resumes/upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Upload Resume
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">
                  #
                </th>

                <th className="p-4 text-left">
                  Resume Name
                </th>

                <th className="p-4 text-left">
                  ATS Score
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-left">
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
                    className="border-t"
                  >
                    <td className="p-4">
                      {index + 1}
                    </td>

                    <td className="p-4">
                      {
                        resume.fileName
                      }
                    </td>

                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {
                          resume
                            .analysis
                            .atsScore
                        }
                      </span>
                    </td>

                    <td className="p-4">
                      {new Date(
                        resume.createdAt
                      ).toLocaleDateString()}
                    </td>

                    <td className="p-4 flex gap-3">
                      <Link
                        to={`/resumes/${resume._id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          handleDelete(
                            resume._id
                          )
                        }
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;