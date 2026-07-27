import { useState, useEffect } from "react";

export default function CatToggle() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const cat = document.getElementById("oneko");
    if (!cat) return;

    cat.style.display = enabled ? "block" : "none";
  }, [enabled]);

  return (
    <div>
      <div className="mb-1 text-sm">
        Disable Cat
      </div>
      <label className="relative inline-block h-7 w-12.5">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="peer sr-only"
        />
        <span
          className="absolute inset-0 cursor-pointer rounded-full bg-[#444] transition-colors duration-300 before:absolute before:bottom-0.75 before:left-0.75 before:h-5.5 before:w-5.5 before:rounded-full before:bg-white before:transition-transform before:duration-300 before:content-[''] peer-checked:bg-[#636363] peer-checked:before:translate-x-5.5"
        />
      </label>
    </div>
  );
}
