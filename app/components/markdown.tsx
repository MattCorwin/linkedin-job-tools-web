const Markdown = ({ children }: { children: any }) => {
  return (
    <div
      className={
        "flex w-full flex-col mt-4 items-center justify-center text-center"
      }
    >
      {children}
    </div>
  );
};

export default Markdown;
