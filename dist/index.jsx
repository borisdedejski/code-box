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
require("@glorious/demo/dist/gdemo.min.css");
const demo_1 = __importDefault(require("@glorious/demo"));
const prismjs_1 = __importDefault(require("prismjs"));
const CodeBox = () => {
    react_1.useEffect(() => {
        const demo = new demo_1.default("#cont");
        const code = `
    function hireUs(project, deadline){
    getBestDevelopers();
    getBestManagers();
    
    project.involve(developers, managers, deadline)
    
    return project < deadline
    }
      `;
        const highlightedCode = prismjs_1.default.highlight(code, prismjs_1.default.languages.javascript, "javascript");
        demo
            .openApp("editor", {
            minHeight: "400px",
            maxWidth: "50px",
            minWidth: "40px",
            width: "40px",
            windowTitle: "~/bova-software.js",
            overflowX: "hidden",
            overflowY: "hidden",
            scroll: "hideen"
        })
            .write(highlightedCode)
            .end();
    });
    return (<div id="cont" className="col-lg-6 col-sm-7 col-xs-12" style={{ height: "500px", marginTop: "50px" }}/>);
};
exports.default = CodeBox;
