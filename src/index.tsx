import React, { useEffect, CSSProperties } from "react";

import GDemo from "@glorious/demo";
import Prism from "prismjs";

type CodeBoxProps = {
  variant: "dark" | "light";
  title: string;
  code: string;
  style?: CSSProperties;
  className?: string;
  id: string;
};
const CodeBox = (props: CodeBoxProps) => {
  const { variant, title, code, style, className } = props;

  if (variant === "dark") {
    require("./dark.css");
    require("./prism.css");
  } else if (variant === "light") {
    require("./light.css");
    require("./prism-light.css");
  }

  useEffect(() => {
    const demo = new GDemo(`#${props.id}`);

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

  return <div id={props.id} style={style} className={className} />;
};
export default CodeBox;
