"use client";
import { useState } from "react";

export default function LikeButton() {
  const [count, countSet] = useState(0);
  return (
    <button
      className="border py-2 px-3 rounded-md mt-4"
      onClick={() => countSet(count + 1)}
    >
      Like ({count})
    </button>
  );
}
