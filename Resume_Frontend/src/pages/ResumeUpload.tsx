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

      alert(
        "Resume analyzed successfully!"
      );

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
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white shadow-xl rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-center mb-4">
          Upload Resume
        </h1>

        <p className="text-center text-slate-500 mb-10">
          Upload your resume and get
          AI-powered ATS analysis.
        </p>

        {/* Upload Area */}
        <label
          htmlFor="resumeFile"
          className="border-2 border-dashed border-blue-300 rounded-2xl h-72 flex flex-col justify-center items-center cursor-pointer hover:border-blue-500 transition"
        >
          <div className="text-6xl mb-4">
            📄
          </div>

          <p className="text-lg font-medium">
            Click to select resume
          </p>

          <p className="text-sm text-slate-500 mt-2">
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

        {/* Selected File */}
        {file && (
          <div className="mt-6 bg-slate-100 p-4 rounded-xl">
            <p className="font-medium">
              Selected File:
            </p>

            <p className="text-blue-600">
              {file.name}
            </p>

            <p className="text-sm text-slate-500">
              {(
                file.size /
                1024
              ).toFixed(2)}{" "}
              KB
            </p>
          </div>
        )}

        {/* Upload Button */}
        <div className="mt-8 text-center">
          <button
            onClick={
              handleUpload
            }
            disabled={
              loading || !file
            }
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium disabled:opacity-50"
          >
            {loading
              ? "Analyzing Resume..."
              : "Upload & Analyze"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;