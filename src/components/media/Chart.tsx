import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Chart = ({ data }: any) => {
  console.log({ data });

  const containerRef = useRef<HTMLDivElement | null>();
  const [count, setcount] = useState(0);

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
