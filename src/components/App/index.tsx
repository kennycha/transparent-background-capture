import { useCallback, useRef, useState } from "react";
import html2canvas from "html2canvas";
import Canvas from "../Canvas";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { saveUrlAsFile } from "../../utils";

const ASSETS_BASE_URL = "/transparent-background-capture/assets";

const cx = classNames.bind(styles);

const App = () => {
  const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas>();
  const [resultImageUrl, setResultImageUrl] = useState<string>();

  const resultRef = useRef<HTMLDivElement>(null);

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

  const handleSaveImageButtonClick = async () => {
    if (!resultRef.current || !resultImageUrl) return;

    const canvas = await html2canvas(resultRef.current);
    const url = canvas.toDataURL("image/jpeg");
    saveUrlAsFile(url, "result.jpeg");
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
      <div className={cx("combined")} ref={resultRef}>
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
        <button
          className={cx("saveImageButton")}
          disabled={!resultImageUrl}
          onClick={handleSaveImageButtonClick}
        >
          Save Image
        </button>
      </div>
    </div>
  );
};

export default App;
