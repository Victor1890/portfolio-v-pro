import Link from "next/link";
import React from "react";
import config from "@config";

const { github } = config;

export default function CreateAnIssue() {
  return (
    <div className="grid w-full h-screen px-10 sm:px-20 place-items-center dark:text-gray-200">
      <p>
        Something went wrong. I know you don't know what's the problem. So Let
        me know by{" "}
        <Link
          // TODO: Add a link to the issue page
          href={`https://github.com/${github.username}/j471n.in/issues/new`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline hover:text-blue-500 "
        >
          creating an issue
        </Link>{" "}
        on GitHub.
      </p>
    </div>
  );
}
