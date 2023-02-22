import { CopyBlock, dracula } from "react-code-blocks";

function MyCoolCodeBlock({ code, language, showLineNumbers }) {
    return (
        <div className="d-flex justify-content-center">
            <CopyBlock
    text={code}
    language={language}
    showLineNumbers={showLineNumbers}
    theme={dracula}
    codeBlock
  />
        </div>
  
)}

export default MyCoolCodeBlock;

