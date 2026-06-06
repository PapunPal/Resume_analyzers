import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="bg-[#0B1120] text-white">
      <section
        className="py-28"
        style={{
          background:
            "linear-gradient(135deg,#13005A 0%,#00337C 45%,#1C82AD 80%,#03C988 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            🚀 AI Powered Resume Analysis
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Analyze Your Resume
            <br />
            Like A Recruiter
          </h1>

          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-10">
            Upload your resume and instantly get ATS
            scores, strengths, weaknesses, missing
            keywords, and personalized suggestions
            powered by Gemini AI.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/register"
              className="bg-[#03C988] text-black font-semibold px-8 py-3 rounded-2xl hover:scale-105 transition-all duration-300"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="border border-white/20 bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0B1120]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["95%", "ATS Accuracy"],
              ["1000+", "Resumes Analyzed"],
              ["50+", "Keywords Checked"],
              ["24/7", "AI Analysis"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-[#111827] border border-slate-800 rounded-3xl p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-[#03C988]">
                  {value}
                </h3>

                <p className="text-slate-400 mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-[#1C82AD] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1C82AD]/20 flex items-center justify-center text-3xl mb-6">
                📊
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                ATS Score Analysis
              </h3>

              <p className="text-slate-400">
                Get a detailed ATS score and
                understand how recruiters evaluate
                your resume.
              </p>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-[#1C82AD] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1C82AD]/20 flex items-center justify-center text-3xl mb-6">
                🤖
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                AI Resume Review
              </h3>

              <p className="text-slate-400">
                Gemini AI reviews your resume and
                identifies strengths and weaknesses.
              </p>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-8 hover:border-[#1C82AD] hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-[#1C82AD]/20 flex items-center justify-center text-3xl mb-6">
                🔍
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Missing Keywords
              </h3>

              <p className="text-slate-400">
                Discover the keywords recruiters
                expect to see in your resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1120] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-10 text-center">
              <div className="text-6xl mb-6">
                📄
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Upload Resume
              </h3>

              <p className="text-slate-400">
                Upload your PDF resume securely.
              </p>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-10 text-center">
              <div className="text-6xl mb-6">
                🤖
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                AI Analysis
              </h3>

              <p className="text-slate-400">
                Gemini AI analyzes your resume in
                seconds.
              </p>
            </div>

            <div className="bg-[#111827] border border-slate-800 rounded-3xl p-10 text-center">
              <div className="text-6xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Improve & Apply
              </h3>

              <p className="text-slate-400">
                Improve your resume using actionable
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg,#13005A,#00337C)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">
            Ready To Improve Your Resume?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Upload your resume and get AI-powered
            feedback instantly.
          </p>

          <Link
            to="/register"
            className="bg-[#03C988] text-black font-semibold px-10 py-4 rounded-2xl hover:scale-105 transition-all duration-300 inline-block"
          >
            Analyze My Resume
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;