"use client";

// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/login">
        <button
          className="bg-tulip-tree hover:bg-carnation text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
      </Link>
    </div>
  );
}
