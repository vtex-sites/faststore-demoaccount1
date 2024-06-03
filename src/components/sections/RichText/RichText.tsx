import React, { useState, useEffect } from "react";
import styles from "./RichText.module.scss";

export interface RichTextProps {
  title: string;
  description: string;
  isMainDescription: boolean;
}

function RichText({ title, description, isMainDescription }: RichTextProps) {

  const [path, setPath] = useState<string | null>(null);
  const [scene, isScene] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (!path || !path.includes('?scene')) {
      return;
    }
  
    isScene(true);
  }, [path]);

  return (
    <section
      className={styles.RichText}
      data-fs-rich-text-main-description={isMainDescription}
      data-fs-rich-text-scene={scene}
    >
      <p data-fs-rich-text-title>{title}</p>
      <p data-fs-rich-text-description>{description}</p>
    </section>
  );
}

export default RichText;
