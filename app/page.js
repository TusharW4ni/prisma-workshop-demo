"use client";

// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

export default function Home({ res }) {
  return (
    <div className="flex justify-center items-center h-screen text-4xl">
      <title>Home</title>
      <div className="flex flex-col bg-gray-300 p-20 rounded-lg border-2 border-gray-400">
        Hello
        <button
          className="border-2 border-gray-100 rounded-lg hover:border-black hover:bg-green-100 p-2"
          onClick={async () => {
            const res = await fetch("/api", {
              method: "GET",
            });
            // Check if the response is okay
            if (res.ok) {
              const data = await res.json(); // Read the body as JSON
              console.log(data);
            } else {
              console.error(
                "Failed to fetch data:",
                res.status,
                res.statusText
              );
            }
          }}
        >
          👀
        </button>
      </div>
    </div>
  );
}
