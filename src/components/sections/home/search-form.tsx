"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchTextFormPage() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchText.trim()) return;
    router.push(`/events/${searchText.trim()}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <form className="w-full sm:w-[580px]" onSubmit={handleSubmit}>
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        placeholder="Search events in any city..."
        onChange={handleChange}
        value={searchText}
        spellCheck={false}
      />
    </form>
  );
}
