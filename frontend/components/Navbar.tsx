// frontend/components/Navbar.tsx

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <h2>TalkToDocs</h2>
      </Link>
      <div className="nav-links">
        <Link href="/docs">Upload Docs</Link>
        <Link href="/bot">Chatbot</Link>
      </div>
    </nav>
  );
};

export default Navbar;
