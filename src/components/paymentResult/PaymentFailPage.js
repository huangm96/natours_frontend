import React from "react";
import PaymentPageLayout from "./PaymentPageLayout";
import { ImCross } from "react-icons/im";
const PaymentFailPage = () => {
  return (
    <PaymentPageLayout>
      <p className="payment-result-title payment-fail">
        <ImCross />
      </p>

      <p className="payment-result-title payment-fail">
        Oh no, your payment failed...
      </p>
      <p className="payment-message">
        Unfortunately, we couldn't collect payment on your purchase. Please take
        a moment to review your billing information, and try again.
      </p>
    </PaymentPageLayout>
  );
};

export default PaymentFailPage;
