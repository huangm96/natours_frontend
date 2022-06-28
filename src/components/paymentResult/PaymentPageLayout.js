import React from "react";
const PaymentPageLayout = ({ children }) => {
  return (
    <div className="payment-result-container">
      <img
        src="/img/logo-green.png"
        alt="logo"
        className="payment-result-logo"
      />
      <div className="payment-result-content">{children}</div>
    </div>
  );
};

export default PaymentPageLayout;
