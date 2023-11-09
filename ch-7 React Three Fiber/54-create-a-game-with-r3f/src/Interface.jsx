import { useRef, useEffect } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { addEffect } from "@react-three/fiber";
import useGame from "./stores/useGame";

export default function Interface() {
  const { backward, forward, jump, leftward, rightward } = useKeyboardControls((state) => state);
  const { restart, phase } = useGame((state) => state);

  const time = useRef();

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const { phase, startTime, endTime } = useGame.getState();

      let elapsedTime = 0;

      if (phase === "playing") elapsedTime = Date.now() - startTime;
      else if (phase === "ended") elapsedTime = endTime - startTime;

      elapsedTime /= 1000;
      elapsedTime = elapsedTime.toFixed(2);

      if (time.current) time.current.textContent = elapsedTime;
    });

    return () => unsubscribeEffect();
  }, []);

  return (
    <div className="interface">
      {/* Time */}
      <div className="time" ref={time}>
        0.00
      </div>

      {/* Restart */}
      {phase === "ended" && (
        <div className="restart" onClick={restart}>
          Restart
        </div>
      )}

      {/* Controls */}
      <div className="controls">
        <div className="raw">
          <div className={`key ${forward && "active"}`} />
        </div>
        <div className="raw">
          <div className={`key ${leftward && "active"}`} />
          <div className={`key ${backward && "active"}`} />
          <div className={`key ${rightward && "active"}`} />
        </div>
        <div className="raw">
          <div className={`key large ${jump && "active"}`} />
        </div>
      </div>
    </div>
  );
}
