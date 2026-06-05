import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ResumeAI
            </h2>

            <p className="text-sm leading-6">
              Analyze your resume with AI and improve
              your chances of getting shortlisted.
              Get ATS scores, keyword analysis, and
              actionable suggestions instantly.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-white transition"
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <Link
                  to="/upload"
                  className="hover:text-white transition"
                >
                  Upload Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Features
            </h3>

            <ul className="space-y-3 text-sm">
              <li>ATS Score Analysis</li>
              <li>AI Resume Review</li>
              <li>Missing Keywords</li>
              <li>Resume Suggestions</li>
              <li>Resume History</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Developer
            </h3>

            <p className="text-sm mb-3">
              Built with React, Node.js, MongoDB and
              Gemini AI.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © {new Date().getFullYear()} ResumeAI. All
            rights reserved.
          </p>

          <p className="mt-2 md:mt-0">
            Developed by Papun Pal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;