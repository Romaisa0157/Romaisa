"use client";

import Spline from "@splinetool/react-spline";

export default function SplineBackground() {
  return (
    <div className="bg-black absolute inset-0 w-full h-full z-[-1]">
      <Spline scene="https://prod.spline.design/QClKAAK-waBUg2FQ/scene.splinecode" />
    </div>
  );
}
