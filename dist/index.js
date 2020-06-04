"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const demo_1 = __importDefault(require("@glorious/demo"));
const prismjs_1 = __importDefault(require("prismjs"));
const CodeBox = (props) => {
    const { variant, title, code, style, className } = props;
    variant === "dark" && require("./dark.css") && require("./prism.css");
    variant === "light" && require("./light.css") && require("./prism-light.css");
    react_1.useEffect(() => {
        const demo = new demo_1.default("#container-react-box");
        const highlightedCode = prismjs_1.default.highlight(code, prismjs_1.default.languages.js, "javascript");
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
    return react_1.default.createElement("div", { id: "container-react-box", style: style, className: className });
};
exports.default = CodeBox;
