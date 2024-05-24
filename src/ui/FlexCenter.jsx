const FlexCenter = ({ children, direction }) => {
  const customClass =
    direction === "column"
      ? "items-start justify-start gap-1 flex flex-col"
      : "items-center justify-center gap-2 flex";
  return <div className={customClass}>{children}</div>;
};

export default FlexCenter;
