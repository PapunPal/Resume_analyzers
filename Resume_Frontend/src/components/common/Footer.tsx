import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2">
              ResumeAI
            </h2>

            <p className="text-sm text-gray-400">
              AI-powered resume analysis to help you land your dream job.
            </p>
            
            {/* Decorative line */}
            <div className="w-12 h-1 bg-linear-to-r from-purple-500 to-pink-500 mt-3 rounded-full"></div>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h3 className="font-semibold mb-3 text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">
                Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-400 hover:text-purple-400 transition flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition">→</span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-400 hover:text-purple-400 transition flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition">→</span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/resumes/upload" 
                    className="text-gray-400 hover:text-purple-400 transition flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition">→</span>
                    Upload Resume
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-transparent bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text">
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/PapunPal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition px-3 py-1 rounded-lg bg-gray-900/50 hover:bg-gray-900"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/papun-pal-247833285/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition px-3 py-1 rounded-lg bg-gray-900/50 hover:bg-gray-900"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} ResumeAI. All rights reserved.
          </p>
          
          <p className="text-gray-500 mt-2 md:mt-0">
            Developed with <span className="text-purple-400">❤️</span> by Papun Pal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;