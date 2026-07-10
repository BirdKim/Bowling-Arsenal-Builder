import React from "react";
import { Search } from "lucide-react";

export function FilterBar({ query, onQueryChange, brand, onBrandChange, brands, resultCount }) {
  return (
    <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap", alignItems: "center" }}>
      <div style={{ position: "relative", flex: "1 1 260px", maxWidth: 340 }}>
        <Search size={15} style={{ position: "absolute", left: 10, top: 10, color: "#8A7E67" }} />
        <input
          value={query}
          onChange={e => onQueryChange(e.target.value)}
          placeholder="Search ball, brand, or coverstock..."
          style={{
            width: "100%", boxSizing: "border-box", background: "#211C16", border: "1px solid #3A3226",
            borderRadius: 8, padding: "8px 10px 8px 32px", color: "#EDE6D6", fontSize: 13, outline: "none",
          }}
        />
      </div>
      <select
        value={brand}
        onChange={e => onBrandChange(e.target.value)}
        style={{
          background: "#211C16", border: "1px solid #3A3226", borderRadius: 8, padding: "8px 10px",
          color: "#EDE6D6", fontSize: 13,
        }}
      >
        {brands.map(b => <option key={b} value={b}>{b}</option>)}
      </select>
      <span style={{ fontSize: 12, color: "#8A7E67", fontFamily: "'IBM Plex Mono', monospace" }}>{resultCount} balls</span>
    </div>
  );
}