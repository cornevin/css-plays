import { CSSProperties } from "react";
import "./App.css";

function App() {
  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: "rgb(30 41 59)" }}
    >
      <div
        style={
          {
            "--background": "30 41 59",
            "--highlight": "255 255 255",

            "--bg-color":
              "linear-gradient(rgb(var(--background)), rgb(var(--background)))",
            "--border-color": `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(162,207,120,1) 0%, rgba(78,143,217,1) 98%)
            `,
          } as CSSProperties
        }
        className="flex mx-auto my-auto aspect-[2/1] w-full max-w-md flex-col items-center justify-center rounded-xl border border-transparent p-8 text-center
      [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
      >
        <p className="text-xl font-medium text-white">Hello, gradient</p>
      </div>
    </div>
  );
}

export default App;
