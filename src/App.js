import React from "react";
import "./App.css";

import AuthContextProvider from "./context/AuthContextProvider";
import ToursContextProvider from "./context/ToursContextProvider";
import TourImagesContextProvider from "./context/TourImagesContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import BookingContextProvider from "./context/BookingContextProvider";
import ReviewContextProvider from "./context/ReviewContextProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/privateRoute.js";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";
import TourPage from "./components/tourPage/TourPage";
import TourBooking from "./components/tourBooking/TourBooking";
import UserPage from "./components/userPage/UserPage";
import MySetting from "./components/userPage/mySetting/MySetting";
import MyBooking from "./components/userPage/myBooking/MyBooking";
import MyReviews from "./components/userPage/myReviews/MyReviews";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import PaymentResult from "./components/paymentResult/PaymentResult";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ToursContextProvider>
          <TourImagesContextProvider>
            <UserContextProvider>
              <ReviewContextProvider>
                <BookingContextProvider>
                  <Routes>
                    <Route path="/" element={<Home />}>
                      <Route index element={<Tours />} />
                      <Route path="login" element={<Login />} />
                      <Route path="signup" element={<Signup />} />
                      <Route
                        path="tours"
                        element={<Navigate replace to="/" />}
                      />
                      <Route path="tours/:tourId" element={<TourPage />} />
                      <Route
                        path="tours/:tourId/tourBooking"
                        element={
                          <PrivateRoute>
                            <TourBooking />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="me"
                        element={
                          <PrivateRoute>
                            <UserPage />
                          </PrivateRoute>
                        }
                      >
                        <Route index element={<MySetting />} />
                        <Route path="mysetting" element={<MySetting />} />
                        <Route path="mybooking" element={<MyBooking />} />
                        <Route path="myreviews" element={<MyReviews />} />
                      </Route>
                    </Route>
                    <Route path="/paymentResult" element={<PaymentResult />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </BookingContextProvider>
              </ReviewContextProvider>
            </UserContextProvider>
          </TourImagesContextProvider>
        </ToursContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
