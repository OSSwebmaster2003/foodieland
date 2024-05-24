const FlexEnd = ({ children, direction }) => {
  const customClass =
    direction === "column"
      ? "items-start justiy-start gap-1"
      : "items-center justiyf-end gap-2";
  return <div className={("flex ", customClass)}>{children}</div>;
};

export default FlexEnd;
