import React from "react";
import "./Login.css";

export default function Login({
  isLoginOpen,
  handleChangeClick,
  handleDeliveryTab,
}) {
  return (
    <div className={`login-container ${isLoginOpen ? "active" : "inactive"}`}>
      <div className="bg-blue flex-container align-center justify-space-between pp2 gap1 px-4 py-2">
        <div className="flex-container gap1 align-center">
          <div className="btn py-1 border-rounded bg-white">
            <h6 className="m0 text-blue font-small">1</h6>
          </div>
          <div className="text-white">
            <h6 className="m0 text-bold">Login</h6>
          </div>
        </div>
        <div>
          <button
            className="font-large text-white m0 btn"
            onClick={handleChangeClick}
          >
            Change
          </button>
        </div>
      </div>
      {isLoginOpen && (
        <div className="flex-container container-fluid bg-white py-4 px-4 w100">
          <div className="flex-container flex-column w100">
            <p className="text-gray font-small">
              Name{" "}
              <span className="font-small text-bold text-black">
                Sareria Nandit
              </span>
            </p>
            <p className="text-gray font-small">
              Phone{" "}
              <span className="font-small text-bold text-black">
                +91 1234567890
              </span>
            </p>
            <button
              className="border-0 bg-warning border-rounded bg-blue text-white px-5 py-3 w-75"
              onClick={handleDeliveryTab}
            >
              Continue to Checkout
            </button>
          </div>
          <div className="flex-container flex-column w100">
            <p className="font-small text-bold text-gray">
              Advantages of our secure login
            </p>
            <p className="font-small text-gray flex-container gapp5">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M9.466 18.257h4.87c0 1.764 1.42 3.195 3.174 3.195a3.185 3.185 0 0 0 3.175-3.195H22.5c.276 0 .499-.23.499-.496v-5.57l-3.273-4.868h-3.261V4.645a.497.497 0 0 0-.497-.502H1.497A.498.498 0 0 0 1 4.645v13.11c0 .277.219.502.497.502h1.62a3.185 3.185 0 0 0 3.175 3.195 3.185 3.185 0 0 0 3.174-3.195zm6.978-8.381H18.7l2.214 3.057h-4.47V9.876zm2.644 8.381c0 .877-.706 1.588-1.578 1.588a1.583 1.583 0 0 1-1.578-1.588c0-.877.706-1.588 1.578-1.588.872 0 1.578.71 1.578 1.588zm-11.218 0c0 .877-.707 1.588-1.578 1.588a1.583 1.583 0 0 1-1.579-1.588c0-.877.707-1.588 1.579-1.588.871 0 1.578.71 1.578 1.588z"
                    fill="#2874f0"
                  ></path>
                </g>
              </svg>
              Easily Track Orders, Hassle free Returns
            </p>
            <p className="font-small text-gray flex-container gapp5">
              <i className="fa-solid fa-bell text-blue"></i>
              Get Relevant Alerts and Recommendation
            </p>
            <p className="font-small text-gray flex-container gap1">
              <span className="text-blue">★</span>
              Get Relevant Alerts and Recommendation
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
