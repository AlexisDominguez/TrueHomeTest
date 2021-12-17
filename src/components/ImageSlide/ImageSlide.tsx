import { FC, ReactNode } from "react";
import styles from "./ImageSlide.module.css";

interface IImageSlideProps {
  children: ReactNode;
}

const ImageSlide: FC<IImageSlideProps> = ({ children }) => {
  return <div className={styles.imageSlide}>{children}</div>;
};

export default ImageSlide;
