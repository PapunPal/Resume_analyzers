import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Analyze Your Resume with AI
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Upload your resume and get an ATS score,
            strengths, weaknesses, missing keywords,
            and actionable suggestions powered by AI.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-white px-6 py-3 rounded-lg font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                ATS Score
              </h3>

              <p className="text-gray-600">
                Get an ATS score to understand how
                well your resume performs.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                AI Analysis
              </h3>

              <p className="text-gray-600">
                Discover strengths, weaknesses, and
                areas for improvement.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Missing Keywords
              </h3>

              <p className="text-gray-600">
                Find important keywords recruiters
                expect to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">
                📄
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Upload Resume
              </h3>

              <p>
                Upload your PDF resume securely.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">
                🤖
              </div>

              <h3 className="text-xl font-semibold mb-2">
                AI Analysis
              </h3>

              <p>
                Gemini AI analyzes your resume.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">
                📊
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Get Insights
              </h3>

              <p>
                Improve your resume using detailed
                suggestions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Resume?
          </h2>

          <p className="mb-8 text-lg">
            Upload your resume and receive AI-powered
            feedback instantly.
          </p>

          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold"
          >
            Start Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;