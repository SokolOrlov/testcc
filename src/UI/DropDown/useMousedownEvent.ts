import { useEffect, useRef } from "react";

const useMousedownEvent = (open: boolean, callback:()=>void)=>{
    const test = useRef<HTMLDivElement>();

    useEffect(() => {
        const close = (event: MouseEvent) => {
          if (test.current && !test.current.contains(event.target as HTMLElement)) 
            callback();
        };
        document.addEventListener("mousedown", close);
        return () => {
          document.removeEventListener("mousedown", close);
        };
      }, [open]);

    return test
}

export default useMousedownEvent