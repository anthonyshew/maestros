import { cva } from "class-variance-authority";
import { AlertOctagon, AlertTriangle, Info } from "lucide-react";
import { cn } from "#/utils/cn";
import { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
  type: "info" | "goodToKnow" | "warning" | "danger";
  bold?: boolean;
}

const calloutStyles = cva("my-4 p-4 rounded text-sm leading-6", {
  variants: {
    type: {
      info: "bg-neutral-400 text-neutral-800",
      goodToKnow:
        "bg-transparent text-white border-white border [&>li>p]:inline",
      danger: "bg-red-400 text-red-800",
      warning: "bg-yellow-400 text-yellow-900",
    },
  },
});

const iconSet = (type: CalloutProps["type"]) => {
  if (type === "danger") {
    return <AlertOctagon className="w-5 h-5" />;
  }

  if (type === "warning") {
    return <AlertTriangle className="w-5 h-5" />;
  }

  if (type === "goodToKnow") {
    return <></>;
  }

  if (type === "info") {
    return <Info className="w-5 h-5" />;
  }
};

export const Callout = ({ children, type = "info" }: CalloutProps) => {
  return (
    <div
      className={cn(
        calloutStyles({ type }),
        type === "warning" ? "font-semibold" : "",
        "relative"
      )}
    >
      {type !== "goodToKnow" ? (
        <div
          className={cn(
            calloutStyles({ type }),
            "absolute -top-8 -left-4 p-2 text-xs rounded-full"
          )}
        >
          {iconSet(type)}
        </div>
      ) : null}
      {type === "goodToKnow" ? "Good to know:" : null}
      {children}
    </div>
  );
};
