import classNames from "classnames/bind";
import styles from "./index.module.scss";
import Canvas from "../Canvas";
import { useCallback, useState } from "react";

const ASSETS_BASE_URL = "/transparent-background-capture/assets";

const cx = classNames.bind(styles);

const App = () => {
  const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas>();
  const [resultImageUrl, setResultImageUrl] = useState<string>();

  const initializeFabricCanvas = useCallback((canvas: fabric.Canvas) => {
    setFabricCanvas(canvas);
  }, []);

  const handleExtractButtonClick = async () => {
    if (!fabricCanvas) return;

    const sourceUrl = fabricCanvas.toDataURL({
      format: "png",
      left: 0,
      top: 0,
      width: 350,
      height: 300,
    });
    setResultImageUrl(sourceUrl);
  };

  return (
    <div className={cx("container")}>
      <img src={`${ASSETS_BASE_URL}/background.jpeg`} alt="background" />
      <div className={cx("canvasWrapper")}>
        <Canvas initializeFabricCanvas={initializeFabricCanvas} />
      </div>
      <div className={cx("separator")} />
      <img alt="result" src={resultImageUrl} />
      <div className={cx("separator")} />
      <div className={cx("combined")}>
        <img
          className={cx("background")}
          src={`${ASSETS_BASE_URL}/background.jpeg`}
          alt="background"
        />
        <img className={cx("sample")} src={resultImageUrl} alt="sample" />
      </div>
      <div className={cx("controls")}>
        <button
          className={cx("extractButton")}
          onClick={handleExtractButtonClick}
        >
          Extract
        </button>
      </div>
    </div>
  );
};

export default App;
