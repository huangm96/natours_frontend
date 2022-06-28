import React from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import PaymentSuccessPage from "./PaymentSuccessPage";
import PaymentFailPage from "./PaymentFailPage";
import "./PaymentResult.css";
const PaymentResult = () => {
  let [urlSearchParams, setSearchParams] = useSearchParams();
  if (urlSearchParams.get("result") === "success") {
    if (
      typeof (urlSearchParams.get("amount") * 1) === "number" &&
      urlSearchParams.get("amount") * 1 > 0
    ) {
      return <PaymentSuccessPage amount={urlSearchParams.get("amount")} />;
    }
    return <Navigate to="/pageNotFound" />;
  } else if (urlSearchParams.get("result") === "fail") {
    return <PaymentFailPage />;
  } else {
    return <Navigate to="/pageNotFound" />;
  }
};

export default PaymentResult;
