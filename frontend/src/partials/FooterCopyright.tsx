import React from "react";

const FooterCopyright: React.FC = () => {
  return (
    <div className="footer-copyright w-100 text-center border-top">
      <div className="container">
        <p className="m-0">
          &copy; 2021 <span style={{ color: "#C17743" }}>NAZ-TEC</span>. All
          right reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
