import React, { useEffect, CSSProperties } from "react";

import GDemo from "@glorious/demo";
import Prism from "prismjs";

type CodeBoxProps = {
  variant: "dark" | "light";
  title: string;
  code: string;
  style?: CSSProperties;
  className?: string;
};
const CodeBox = (props: CodeBoxProps) => {
  const { variant, title, code, style, className } = props;

  variant === "dark" && require("./dark.css") && require("./prism.css");
  variant === "light" && require("./light.css") && require("./prism-light.css");

  useEffect(() => {
    const demo = new GDemo("#container-react-box");

    const highlightedCode = Prism.highlight(
      code,
      Prism.languages.js,
      "javascript"
    );

    demo
      .openApp("editor", {
        minHeight: "400px",
        maxWidth: "50px",
        minWidth: "40px",
        width: "40px",
        windowTitle: `${title}`,
        overflowX: "hidden",
        overflowY: "hidden",
        scroll: "hideen"
      })
      .write(highlightedCode)
      .end();
  });

  return <div id="container-react-box" style={style} className={className} />;
};
export default CodeBox;
