import { ReactNode } from "react";

interface CaseProps {
  children: ReactNode;
  title: string;
  description: string;
}

const Case = ({ children, title, description }: CaseProps) => {
  return (
    <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1 className="text-4xl">{title}</h1>
      <p style={{ whiteSpace: "pre-line" }} className="text-lg">
        {description}
      </p>
      <p className="text-2xl">Solution:</p>
      <div>{children}</div>
    </div>
  );
};
export default Case;
