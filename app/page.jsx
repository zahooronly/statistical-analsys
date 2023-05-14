// import Image from "next/image";

import Register from "@/components/Authentication/Register/Register";

export default function Home() {
  return (
    <div>
      <head>
        <title>Statistical Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main>
        <h1 className="text-gray-700 bg-purple-400 ">Statistical Analysis</h1>
        <p>Hi there</p>
        <Register />
      </main>
    </div>
  );
}
