
import React, { useState } from 'react';

function Signup() {
    const [formData, setForm] = useState({
        name: "",
        email: ""
    });

    const [error, setError] = useState("");

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        if (!formData.name || !formData.email) {
            setError("Please fill all fields");
            return;
        }

        try {
            const res = await fetch(
                "https://68a582352a3deed2960dbd2c.mockapi.io/form/name",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            if (!res.ok) {
                throw new Error("Failed to submit");
            }

            const data = await res.json();
            console.log("Success:", data);

        } catch (err) {
            setError("Something went wrong");
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name || ""}
                onChange={handleChanges}
            />

            <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email || ""}
                onChange={handleChanges}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
