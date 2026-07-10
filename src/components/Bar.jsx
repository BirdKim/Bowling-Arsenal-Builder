import React from 'react';

export default function Bar({ value, color }) {
  return (
    <div style={{ background: "#2A241D", borderRadius: 4, height: 8, width: "100%", overflow: "hidden" }}>
      <div style={{ width: `${value}%`, height: "100%", background: color, borderRadius: 4, transition: "width .4s ease" }} />
    </div>
  );
}