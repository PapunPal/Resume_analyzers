import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      await registerUser(data);

      alert(
        "Registration successful"
      );

      navigate("/login");
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Registration failed"
      );
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "linear-gradient(135deg,#13005A 0%,#00337C 45%,#1C82AD 80%,#03C988 100%)",
      }}
    >
      <div className="w-full max-w-md bg-[#111827]/95 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            Create Account
          </h1>

          <p className="text-slate-400">
            Start analyzing resumes with AI.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="space-y-6"
        >
          <div>
            <label className="block text-slate-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              {...register(
                "name",
                {
                  required:
                    "Name is required",
                }
              )}
              className="
              w-full
              bg-[#0B1120]
              border
              border-slate-700
              text-white
              rounded-2xl
              px-4
              py-3
              outline-none
              focus:border-[#1C82AD]
              transition-all
              "
            />

            {errors.name && (
              <p className="text-red-400 text-sm mt-2">
                {
                  errors.name
                    .message
                }
              </p>
            )}
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Email
            </label>

            <input
              type="email"
              {...register(
                "email",
                {
                  required:
                    "Email is required",
                }
              )}
              className="
              w-full
              bg-[#0B1120]
              border
              border-slate-700
              text-white
              rounded-2xl
              px-4
              py-3
              outline-none
              focus:border-[#1C82AD]
              transition-all
              "
            />

            {errors.email && (
              <p className="text-red-400 text-sm mt-2">
                {
                  errors.email
                    .message
                }
              </p>
            )}
          </div>

          <div>
            <label className="block text-slate-300 mb-2">
              Password
            </label>

            <input
              type="password"
              {...register(
                "password",
                {
                  required:
                    "Password is required",
                  minLength: {
                    value: 6,
                    message:
                      "Minimum 6 characters",
                  },
                }
              )}
              className="
              w-full
              bg-[#0B1120]
              border
              border-slate-700
              text-white
              rounded-2xl
              px-4
              py-3
              outline-none
              focus:border-[#1C82AD]
              transition-all
              "
            />

            {errors.password && (
              <p className="text-red-400 text-sm mt-2">
                {
                  errors.password
                    .message
                }
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              isSubmitting
            }
            className="
            w-full
            bg-[#03C988]
            text-black
            font-bold
            py-3
            rounded-2xl
            hover:scale-[1.02]
            transition-all
            duration-300
            disabled:opacity-50
            "
          >
            {isSubmitting
              ? "Creating Account..."
              : "Create Account"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-400">
            Already have an account?
          </p>

          <Link
            to="/login"
            className="text-[#03C988] font-semibold hover:underline"
          >
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;