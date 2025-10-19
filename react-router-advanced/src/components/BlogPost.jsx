import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-4 bg-yellow-100 rounded shadow">
      <h3 className="font-semibold">Blog Post ID: {id}</h3>
      <p>This content is dynamically rendered based on the URL parameter.</p>
    </div>
  );
}
