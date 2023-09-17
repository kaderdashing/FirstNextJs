import Link from "next/link";
import React from "react";

export default function Navbare() {
  return (
    <div>
      <nav class="bg-blue-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div class="flex flex-1 justify-center items-center sm:items-stretch ">
              <div class="hidden sm:ml-6 sm:block content-center">
                <div class="flex space-x-4">
                  <div
                    class="bg-blue-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    <Link href="/">Acceille</Link>
                  </div>
                  <div class="text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    <Link href="/blog">Blog</Link>
                  </div>
                  <div class="text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                    <Link href="/liste">Liste</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
