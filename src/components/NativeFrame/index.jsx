import { cn } from "@/lib/utils";
import NativeClose from "../NativeClose";

export default function NativeFrame({ className, children, setIsActive }) {
  return (
    <div id="frame">
      <NativeClose onClick={() => setIsActive(false)} />
      <div className="frame-wrap">
        <div className="frame-container">
          {children}
          {/* <iframe id="pen" loading="lazy" src="" style={{ border: 0 }}></iframe>
          <ViewCode /> */}
        </div>
      </div>
    </div>
  );
}

export function ViewCode() {
  return (
    <a id="penlink" target="_blank">
      <strong>
        View the Code <span>&rarr;</span>
      </strong>
    </a>
  );
}
