import copy from "copy-to-clipboard";
import { FC, useCallback, useRef, useState } from "react";

interface SnippetWrapperProps {}

const SnippetWrapper: FC<SnippetWrapperProps> = ({ children }) => {
  const snippetRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(() => {
    copy(snippetRef.current?.innerHTML ?? "");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [snippetRef]);

  return (
    <div className="relative inline-block max-w-[740px]" onClick={handleClick}>
      <div className="absolute transition-all opacity-0 hover:opacity-100 flex items-center justify-center bg-black/0 rounded hover:bg-black/60 inset-0 cursor-pointer">
        {copied ? ( //
          <span className="text-4xl">✅</span>
        ) : (
          <span className="text-white [text-shadow:0_0_10px_rgba(0,0,0)] text-center p-10 text-lg drop-shadow-lg">Cliquer pour copier le code HTML de cet élément</span>
        )}
      </div>
      <div ref={snippetRef}>{children}</div>
    </div>
  );
};

export default SnippetWrapper;
