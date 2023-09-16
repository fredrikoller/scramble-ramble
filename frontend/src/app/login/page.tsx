'use client';

import Link from "next/link";

export default function Login() {
  function handleLogin (e: any) {
    e.preventDefault();
    console.log("clicked", e.target.value);
  }

  return (
    <div className="w-full">
      <Link href={"/"}>Back</Link>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <br />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <br/>
      </form>
    </div>
  )
}
