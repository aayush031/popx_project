
import React from "react";

function MobileContainer({ children }) {
  return (
    <div className="outer">
      <div className="mobile">
        {children}
      </div>
    </div>
  );
}

export default MobileContainer;
