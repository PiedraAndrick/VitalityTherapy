"use client";

import Link from "next/link";
import { socialNetworks } from "@/dataIndex";

export default function Footer() {
  return (
    <footer className="bg-[#205225]">
      <div className="mx-auto  max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Lado izquierdo: texto */}
        <div className="text-sm text-zinc-100 text-center">
          <p className="font-semibold">
            © {new Date().getFullYear()} Vitality Therapy
          </p>
        </div>
       
      </div>
    </footer>
  );
};
