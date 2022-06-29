import React from "react";
import { FaCheck } from "react-icons/fa";
import PaymentPageLayout from "./PaymentPageLayout";
const PaymentSuccessPage = ({ amount }) => {
  return (
    <PaymentPageLayout>
      <p className="payment-result-title payment-success">
        <FaCheck />
      </p>

      <p className="payment-result-title payment-success">
        Thank you for your payment!
      </p>
      <p className="payment-message">
        A Receipt of this transaction has been sent via email for your records.
      </p>
      <p className="payment-subtitle">Total Payment Amount</p>
      <p className="payment-amount">${(amount / 100).toFixed(2)}</p>
    </PaymentPageLayout>
  );
};

export default PaymentSuccessPage;
