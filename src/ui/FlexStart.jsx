const FlexStart = ({ children, direction }) => {
  const customClass =
    direction === "column"
      ? "items-start justiy-start flex-col gap-1 flex"
      : "items-center justiyf-start gap-2 flex";
  return <div className={customClass}>{children}</div>;
};

export default FlexStart;
