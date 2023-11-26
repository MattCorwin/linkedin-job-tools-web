import Container from "./container";

const Markdown = ({ children }: { children: any }) => {
  return (
    <Container
      className={
        "flex w-full flex-col mt-4 items-center justify-center text-center"
      }
    >
      {children}
    </Container>
  );
};

export default Markdown;
