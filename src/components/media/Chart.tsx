import React, { useEffect, useRef } from "react";

const Chart = ({ data }: any) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const range = document.createRange();
    const fragment = range.createContextualFragment(data);
    if (containerRef.current) {
      containerRef.current.appendChild(fragment);
    }
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        objectFit : "contain"
      }}
    >
      <div ref={containerRef} />;
    </div>
  );
};

export default Chart;
