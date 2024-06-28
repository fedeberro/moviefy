import React from "react";
import { ButtonProps, Button as ButtonUI } from "@/components/ui/button";
import { Loader2, LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props extends ButtonProps {
  children?: React.ReactNode;
  loading?: boolean;
  tooltip?: string;
  icon?: LucideIcon | JSX.Element;
}

export default function Button({
  loading,
  children,
  tooltip,
  icon,
  ...props
}: Props) {
  if (tooltip !== undefined) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <ButtonUI
            disabled={props.disabled || loading}
            size={!children ? "icon" : "default"}
            className={`flex gap-2 ${props.className}`}
            {...props}
          >
            <>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
              {children}
            </>
          </ButtonUI>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    );
  }
  return (
    <ButtonUI
      {...props}
      disabled={props.disabled || loading}
      size={!children ? "icon" : "default"}
      className={`flex gap-2 ${props.className}`}
    >
      <>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : icon}
        {children}
      </>
    </ButtonUI>
  );
}
