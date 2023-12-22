import classNames from "classnames/bind";
import styles from "./index.module.scss";

const ASSETS_BASE_URL = "/transparent-background-capture/assets";

const cx = classNames.bind(styles);

const App = () => {
  return (
    <div className={cx("container")}>
      <img src={`${ASSETS_BASE_URL}/background.jpeg`} alt="background" />
      <img src={`${ASSETS_BASE_URL}/sample.png`} alt="sample" />
      <div className={cx("separator")} />
      <div className={cx("combined")}>
        <img
          className={cx("background")}
          src={`${ASSETS_BASE_URL}/background.jpeg`}
          alt="background"
        />
        <img
          className={cx("sample")}
          src={`${ASSETS_BASE_URL}/sample.png`}
          alt="sample"
        />
      </div>
    </div>
  );
};

export default App;
