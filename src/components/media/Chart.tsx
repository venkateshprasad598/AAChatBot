import { useEffect, useRef } from "react";

const Chart = ({ data }: any) => {
  const containerRef = useRef<HTMLDivElement | null>();
  useEffect(() => {
    if (data && containerRef?.current) {
      const range = document.createRange();
      const fragment = range.createContextualFragment(data);
      containerRef.current.innerHTML = ""; // Clear old content
      containerRef.current?.appendChild(fragment);
    }
  }, [data, containerRef]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    >
      <div ref={containerRef} />;
    </div>
  );
};

export default Chart;
