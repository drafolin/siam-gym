import "./style.scss";
import { ReactElement, useEffect, useRef } from "react";
import { useWindowScroll, useWindowSize } from "react-use";

export const Component = ({ children }: { children: ReactElement }) => {
  const tableToScroll = useRef<null | HTMLDivElement>(null);
  const windowScroll = useWindowScroll();
  const windowSize = useWindowSize();
  const tableAnimationData = useRef({
    isFinished: false,
    isGoingForward: true,
    pauseCounter: 50,
    isRunning: false,
  });

  useEffect(() => {
    const runAnimation = () => {
      tableAnimationData.current!.isRunning = true;
      if (
        tableToScroll.current!.scrollLeft === 0 &&
        !tableAnimationData.current.isGoingForward
      ) {
        tableAnimationData.current.isFinished = true;
      }

      if (tableAnimationData.current.isFinished) {
        return;
      }

      if (tableAnimationData.current.isGoingForward) {
        tableToScroll.current!.scrollBy(5, 0);
      } else if (tableAnimationData.current.pauseCounter > 0) {
        tableAnimationData.current.pauseCounter--;
      } else {
        tableToScroll.current!.scrollBy(-5, 0);
      }

      if (
        tableToScroll.current!.scrollLeft >
        tableToScroll.current!.scrollWidth -
          tableToScroll.current!.clientWidth -
          2
      ) {
        tableAnimationData.current.isGoingForward = false;
      }

      requestAnimationFrame(runAnimation);
    };
    if (
      tableToScroll.current!.offsetTop <
        windowScroll.y + (2 / 3) * windowSize.height &&
      !tableAnimationData.current!.isRunning
    ) {
      runAnimation();
    }
  }, [windowScroll.y]);

  return (
    <div className="scroll-container" ref={tableToScroll}>
      {children}
    </div>
  );
};

export default Component;
