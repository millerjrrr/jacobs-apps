import { useEffect, useState } from "react";
import { appInfo, type AppId } from "../data/appInfo";

export default function HoverPreview({
  app,
  visible,
}: {
  app: AppId;
  visible: boolean;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX - 200, y: e.clientY + -420 });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`website-preview ${visible ? "lg:opacity-100" : "opacity-0"}`}
      style={{ top: pos.y, left: pos.x }}
    >
      <h2>{appInfo[app].name}</h2>
      <img
        src={appInfo[app].preview}
        className="my-2 rounded-xl border-[2px]"
        style={{
          height: 200,
        }}
      />
      <p>{appInfo[app].description}</p>
    </div>
  );
}
