import { useState } from 'react'
import './App.css'

function Login() {
  const [formData, setForm] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [Load, setLoad] = useState(false);

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev, [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("")
    setSuccess("")

    if (!formData.email || !formData.password) {
      setError("All Field are required");
      return;
    }

    setLoad(true);
    try {
      const res = await fetch("https://68a582352a3deed2960dbd2c.mockapi.io/form/name");
      const data = await res.json();
      const user = data.find(u => u.email === formData.email && u.password === formData.password)
      if (!user) {
        throw new Error(data.error || "Login failed");
      }
      setSuccess("Login successful ✅");
      setForm({ email: "", password: "" });
    } catch (error) {
      setError(error.message)
    } finally {
      setLoad(false)
    }
  }

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChanges}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChanges}
        />

        <button type="submit" disabled={Load}>
          {Load ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}

export default Login
