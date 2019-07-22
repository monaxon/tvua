import React, { lazy, Suspense } from "react";
import "styles/AbsencePage.css";

const Absence = lazy(() => import("components/Absence"));

function AbsencePage() {
  return (
    <div className="AbsencePage">
      <Suspense fallback={<p>در حال بارگذاری...</p>}>
        <Absence />
      </Suspense>
    </div>
  );
}

export default AbsencePage;
