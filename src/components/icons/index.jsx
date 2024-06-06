import { cn } from "@/lib/utils";
import Image from "next/image";

export function Twitter({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3333 3333"
      clipRule="evenodd"
      fillRule="evenodd"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      className={cn(className)}
    >
      <path d="M1667 0c920 0 1667 746 1667 1667 0 920-746 1667-1667 1667C747 3334 0 2588 0 1667 0 747 746 0 1667 0zm900 1108c-66 30-137 49-212 58 76-46 135-118 162-204-71 42-151 73-234 90-68-72-163-116-270-116-204 0-369 165-369 369 0 29 3 57 9 84-307-16-579-162-761-386-33 56-50 120-50 186 0 128 65 241 164 307-61-2-117-19-167-46v5c0 179 127 328 296 362-31 8-64 13-97 13-24 0-47-2-70-7 47 147 183 253 345 257-127 99-285 158-459 158-30 0-59-2-88-5 164 105 358 166 566 166 679 0 1051-563 1051-1051 0-16 0-32-1-48 72-52 135-117 184-191z" />
    </svg>
  );
}

export function Codepen({ className }) {
  return (
    <svg
      // ariaHidden="true"
      dataPrefix="fab"
      dataIcon="codepen"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={cn(className)}
    >
      <path
        fill="currentColor"
        d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"
      />
    </svg>
  );
}

// export function Twitter({ className }) {
//   return <div ><Portfolio /></div>;
// }

// export function Codepen({ className }) {
//   return <div>i</div>;
// }
