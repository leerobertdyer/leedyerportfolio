"use client";

import { useState } from "react";

export default function DeletePage() {
  const [key, setKey] = useState("");
  const [bucket, setBucket] = useState("");
  const [status, setStatus] = useState("");

  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!key) return setStatus("Missing path to file");
    if (!bucket) return setStatus("Missing bucket name");

    try {
      const res = await fetch("/api/storage/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, bucket }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus(`Deleted successfully: ${key}`);
        setKey(""); 
        setBucket("");
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setStatus(`Network error: ${err.message}`);
    }
  };

  return (
    <div>
      <h1>Delete R2 Object</h1>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Enter key to delete"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter bucket file is stored"
          value={bucket}
          onChange={(e) => setBucket(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
