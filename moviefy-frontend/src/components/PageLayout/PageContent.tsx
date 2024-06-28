import { Title } from "../Typography";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function PageContent({ title, children }: Props) {
  return (
    <>
      <Title className="mb-2 md:p-0 p-2">{title}</Title>
      <div>{children}</div>
    </>
  );
}
