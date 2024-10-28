function LabelFilterComponent({
  uniqueLabels,
  selectedLabels,
  handleCheckboxChange,
  colorObjs,
}) {
  if (!uniqueLabels?.length) return null;

  return (
    <div className="absolute flex flex-col gap-2 bottom-2 right-2 p-4 bg-black text-pink-50 rounded-md max-h-screen overflow-y-auto">
      {uniqueLabels.map((label) => (
        <label
          key={label}
          className="flex items-baseline gap-5 justify-between"
        >
          <div className="flex items-center gap-1">
            <span
              className=" ml-2 mr-1"
              style={{
                backgroundColor: colorObjs[label],
                width: "10px",
                height: "10px",
                borderRadius: "50%",
              }}
            ></span>
            <span>{label}</span>
          </div>
          <input
            type="checkbox"
            checked={selectedLabels.includes(label)}
            onChange={() => handleCheckboxChange(label)}
            className="mr-2"
          />
        </label>
      ))}
    </div>
  );
}

export default LabelFilterComponent;
