import React, { useState } from "react";

export default function Box() {
  const [value, setValue] = useState(100);
  return (
    <div className="glass" style={{ backdropFilter: `blur(${value}px)` }}>
      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
