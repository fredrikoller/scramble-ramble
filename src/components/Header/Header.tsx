import Link from "next/link";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <h1 className={"hero-header"}>Scramble</h1>
        </Link>
      </div>
    </header>
  );
}
