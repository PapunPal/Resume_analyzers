import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadResume } from "../api/resumeApi";

const UploadResume = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(
    null
  );

  const [loading, setLoading] =
    useState(false);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile =
      e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    try {
      setLoading(true);

      const data =
        await uploadResume(file);

      navigate(
        `/resumes/${data.resume._id}`
      );
    } catch (error: any) {
      console.log(error);

      alert(
        error?.response?.data?.message ||
          "Upload failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4">
            Upload Resume
          </h1>

          <p className="text-slate-400 text-lg">
            Upload your resume and receive
            AI-powered ATS analysis instantly.
          </p>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 md:p-10">
          <label
            htmlFor="resumeFile"
            className="
            border-2
            border-dashed
            border-[#1C82AD]
            rounded-3xl
            h-80
            flex
            flex-col
            justify-center
            items-center
            cursor-pointer
            hover:bg-[#1C82AD]/5
            transition-all
            duration-300
            "
          >
            <div className="text-7xl mb-5">
              📄
            </div>

            <p className="text-2xl font-semibold mb-2">
              Select Your Resume
            </p>

            <p className="text-slate-400">
              PDF files only
            </p>

            <input
              id="resumeFile"
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={
                handleFileChange
              }
            />
          </label>

          {file && (
            <div className="mt-8 bg-[#0F172A] border border-slate-800 rounded-2xl p-5">
              <p className="text-slate-400 text-sm mb-2">
                Selected File
              </p>

              <p className="text-[#03C988] font-semibold break-all">
                {file.name}
              </p>

              <p className="text-slate-500 mt-2">
                {(
                  file.size /
                  1024
                ).toFixed(2)}{" "}
                KB
              </p>
            </div>
          )}

          <div className="mt-8">
            <button
              onClick={
                handleUpload
              }
              disabled={
                loading || !file
              }
              className="
              w-full
              bg-[#03C988]
              text-black
              font-bold
              py-4
              rounded-2xl
              hover:scale-[1.01]
              transition-all
              duration-300
              disabled:opacity-50
              disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Analyzing Resume..."
                : "Upload & Analyze"}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 text-center">
            <div className="text-4xl mb-4">
              📊
            </div>

            <h3 className="font-semibold mb-2">
              ATS Score
            </h3>

            <p className="text-slate-400 text-sm">
              Get detailed ATS evaluation.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 text-center">
            <div className="text-4xl mb-4">
              🤖
            </div>

            <h3 className="font-semibold mb-2">
              AI Analysis
            </h3>

            <p className="text-slate-400 text-sm">
              Discover strengths and weaknesses.
            </p>
          </div>

          <div className="bg-[#111827] border border-slate-800 rounded-3xl p-6 text-center">
            <div className="text-4xl mb-4">
              🚀
            </div>

            <h3 className="font-semibold mb-2">
              Suggestions
            </h3>

            <p className="text-slate-400 text-sm">
              Improve your chances of getting hired.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;