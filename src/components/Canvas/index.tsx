import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { fabric } from "fabric";
import { useEffect, useRef } from "react";

type Props = {
  initializeFabricCanvas: (canvas: fabric.Canvas) => void;
};

const cx = classNames.bind(styles);

const Canvas = ({ initializeFabricCanvas }: Props) => {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasElementRef.current;

    if (canvasElement) {
      const canvas = new fabric.Canvas(canvasElement, {
        width: 350,
        height: 300,
      });
      initializeFabricCanvas(canvas);
      console.log("fabric canvas engine created...");

      const line = new fabric.Line([10, 10, 100, 100], {
        stroke: "red",
        strokeWidth: 2,
      });
      const circle = new fabric.Circle({
        radius: 30,
        fill: "green",
        left: 150,
        top: 50,
      });
      const rect = new fabric.Rect({
        fill: "blue",
        width: 100,
        height: 100,
        left: 200,
        top: 150,
      });

      canvas.add(line);
      canvas.add(circle);
      canvas.add(rect);

      return () => {
        canvas.dispose();
        console.log("fabric canvas engine disposed...");
      };
    }
  }, [initializeFabricCanvas]);

  return (
    <div className={cx("container")}>
      <canvas ref={canvasElementRef} />
    </div>
  );
};

export default Canvas;
