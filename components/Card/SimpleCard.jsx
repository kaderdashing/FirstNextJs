import Link from "next/link";
import React from "react";

export default function SimpleCard({
  titel = "Card title",
  content = "Some quick example text to build on the card title and make up thebulk. 222",
  secondecontent = "",
  links = "/blog",
  namedLink = "vers les blog",
}) {
  return (
    <div className="block rounded-lg bg-white p-6 border-solid border-2 border-indigo-600 ">
      <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {titel}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {content}
      </p>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {secondecontent}
      </p>
      <div className="my-4">
        <Link href={links} className="text-blue-500 hover:underline">
          {namedLink}
        </Link>
      </div>
    </div>
  );
}
