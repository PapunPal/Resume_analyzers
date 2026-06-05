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
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Register
      </h1>

      <form
        onSubmit={handleSubmit(
          onSubmit
        )}
        className="space-y-4"
      >
        <div>
          <label>
            Name
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
            className="w-full border p-2 rounded"
          />

          {errors.name && (
            <p className="text-red-500 text-sm">
              {
                errors.name
                  .message
              }
            </p>
          )}
        </div>

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
                minLength: {
                  value: 6,
                  message:
                    "Minimum 6 characters",
                },
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
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          {isSubmitting
            ? "Registering..."
            : "Register"}
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?
        <Link
          to="/login"
          className="text-blue-600 ml-2"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;