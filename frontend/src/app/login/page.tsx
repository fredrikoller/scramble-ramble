"use client";

import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    console.log("clicked", event.target.value);
    const data = {
      username: String(event.target.username.value),
      password: String(event.target.password.value),
    };

    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("success");
      setLoading(false);
      event.target.reset();
    }

    if (!response.ok) {
      console.log("fail");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="">
        <label className="" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          minLength={3}
          maxLength={150}
          required
          className=""
          autoComplete="off"
          name="userName"
        />
      </div>
      <div className="">
        <label className="" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          minLength={8}
          required
          className=""
        />
      </div>
      <br />
    </form>
  );
}
