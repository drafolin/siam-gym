import { FunctionComponent, useState, useRef } from "react";
import "./style.scss";

const Component: FunctionComponent<{
  title: React.ReactNode;
  children: React.ReactNode;
  deploy?: boolean;
}> = ({ title, children, deploy }) => {
  const [state, setState] = useState<"closed" | "opening" | "open" | "closing">(
    "closed",
  );

  const open = () => {
    setState("opening");
    setTimeout(() => setState("open"), 300);
  };

  const close = () => {
    setState("closing");
    setTimeout(() => setState("closed"), 300);
  };

  const shouldBeDeployed = () =>
    deploy ?? (state === "open" || state === "opening");
  const childrenDiv = useRef<HTMLDivElement>();

  return (
    <div className="Cstm__DD">
      <button
        onClick={() =>
          deploy ??
          (state === "closed" || state === "closing" ? open() : close())
        }
        className="header"
      >
        <div className="title">{title}</div>
        <span
          className={`symbol transition-all duration-300 ${shouldBeDeployed() ? "rotate-90" : ""}`}
        >
          &#1051643;
        </span>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden flex flex-col justify-center ${
          state === "opening" ? `opacity-100` : ""
        } ${state === "closing" ? "opacity-0" : ""} ${
          state === "closed" ? "opacity-0" : ""
        }`}
        style={{
          height: shouldBeDeployed()
            ? (childrenDiv.current?.clientHeight ?? "auto")
            : 0,
        }}
      >
        <div ref={childrenDiv} className="h-fit">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Component;
