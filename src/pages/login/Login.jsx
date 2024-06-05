import { useState } from "react";
import { useDispatch } from "react-redux";
import "../signup/Signup.css";
import axiosInstance from "../../axios/axiosInstance";
import { setUser } from "../../redux/actions";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setErrors({}); // Clear any previous errors
      const response = await axiosInstance.post("/login", formData);
      console.log("Login successful:", response.data);

      // Dispatch the user data to Redux
      dispatch(setUser(response.data));

      // Redirect to the homepage
      window.location.href = "/";
    } catch (error) {
      window.alert(error.response.data.message);
      console.error("Login error:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
        <a href="/sign-up" className="auth_redirect_link">
          Sign Up Here If You Don&apos;t Have an Account{" "}
        </a>
      </form>
    </div>
  );
};

export default Login;
