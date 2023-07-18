import React, { useState } from "react";

interface props {
  children: string;
  max_length?: number;
}

const ExtendableText = ({ children, max_length = 100 }: props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= max_length) return <p>{children} </p>;

  const text = isExpanded ? children : children.substring(0, max_length);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExtendableText;
