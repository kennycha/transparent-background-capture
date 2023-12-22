import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { fabric } from "fabric";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);

const Canvas = () => {
  const canvasElementRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasElement = canvasElementRef.current;

    if (canvasElement) {
      const canvas = new fabric.Canvas(canvasElement, {
        width: 350,
        height: 300,
      });
      console.log("fabric canvas engine created...");

      return () => {
        canvas.dispose();
        console.log("fabric canvas engine disposed...");
      };
    }
  }, []);

  return (
    <div className={cx("container")}>
      <canvas ref={canvasElementRef} />
    </div>
  );
};

export default Canvas;
