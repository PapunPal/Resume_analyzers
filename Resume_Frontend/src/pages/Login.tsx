import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getMe } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const { setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = async (
    data: LoginFormData
  ) => {
    try {
      console.log("Login try...........");
      await loginUser(data);
      const userData =
        await getMe();

      setUser(userData.user);

      navigate("/dashboard");
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Login failed"
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Login
      </h1>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-4"
      >
        <div>
          <label>
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
            className="w-full border p-2 rounded"
          />

          {errors.email && (
            <p className="text-red-500 text-sm">
              {
                errors.email
                  .message
              }
            </p>
          )}
        </div>

        <div>
          <label>
            Password
          </label>

          <input
            type="password"
            {...register(
              "password",
              {
                required:
                  "Password is required",
              }
            )}
            className="w-full border p-2 rounded"
          />

          {errors.password && (
            <p className="text-red-500 text-sm">
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
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {isSubmitting
            ? "Logging in..."
            : "Login"}
        </button>
      </form>

      <p className="mt-4 text-center">
        Don't have an account?
        <Link
          to="/register"
          className="text-blue-600 ml-2"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;