import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  // Example slug from your project list
  const slug = "my-protfolio";

  return (
    <div>
      <Link to={`/project/${slug}`} className="px-4 py-2 bg-purple-600 text-white rounded-lg">
        View Project
      </Link>
    </div>
  );
};

export default Button;
