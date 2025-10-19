import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormikForm = () => {
  // ✅ Form submission logic
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Registration (Formik)
        </h2>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            {/* Username */}
            <label className="block mb-2 font-medium">Username</label>
            <Field
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm mb-2"
            />

            {/* Email */}
            <label className="block mb-2 font-medium">Email</label>
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mb-2"
            />

            {/* Password */}
            <label className="block mb-2 font-medium">Password</label>
            <Field
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mb-2"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-4"
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormikForm;
