import { Paragraph, Subtitle } from "@/components/Typography";

interface Props {
  children?: React.ReactNode;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function PageResult({
  title,
  description,
  children,
  icon,
}: Props) {
  return (
    <article className="flex items-center justify-center m-auto flex-col gap-4 h-full px-2 md:px-0 md:w-[40%]">
      {icon}
      <div className="flex gap-1 flex-col items-center">
        <Subtitle className="text-center">{title}</Subtitle>
        <Paragraph secondary className="text-center">
          {description}
        </Paragraph>
      </div>
      <div className="flex gap-2">{children}</div>
    </article>
  );
}
