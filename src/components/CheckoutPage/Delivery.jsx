import React from "react";
import "./Delivery.css";

export default function Delivery({
  isDeliveryAddressOpen,
  handleDeliveryTab,
  handleOrderTab,
}) {
  return (
    <div
      className={`delivery-container ${
        isDeliveryAddressOpen ? "active" : "inactive"
      } flex-container flex-column mt-3 bg-white`}
    >
      <div className="bg-blue flex-container align-center justify-space-between pp2 gap1 px-4 py-2">
        <div className="flex-container gap1 align-center">
          <div className="btn py-1 border-rounded bg-white">
            <h6 className="m0 text-blue font-small">2</h6>
          </div>
          <div className="text-white">
            <h6 className="m0 text-bold">Delivery</h6>
          </div>
        </div>
        <div>
          <button
            className="font-large text-white m0 btn"
            onClick={handleDeliveryTab}
          >
            Change
          </button>
        </div>
      </div>
      {isDeliveryAddressOpen && (
        <div className="px-4 py-3 flex-container gap1">
          <div>
            <input
              type="radio"
              name="select"
              id="select"
              checked
              onChange={() => {}}
            />
          </div>
          <div className="flex-container flex-column w100 gapp5 delivery-container-contact-content">
            <div className="flex-container gap1 flex-wrap">
              <p className="text-bold  m0">Nandit Sareria</p>
              <p className="text-bold m0">+91 9234567890</p>
            </div>
            <div className="flex-container gapp5 font-small flex-wrap delivery-container-address-content">
              <p>267, Lawyer Chamber Court</p>
              <p>Delhi,</p>
              <p className="text-bold">+91 23381655,</p>
              <p className="text-bold">110001,</p>
              <p className="text-bold">India</p>
            </div>
            <div>
              <button
                className="btn bg-warning text-white"
                onClick={(e) => {
                  console.log(e);
                  e.preventDefault();
                  handleOrderTab(e);
                }}
              >
                Deliver Here
              </button>
            </div>
          </div>
          <div>
            <button className="btn text-blue text-bold font-small px-0 py-0">
              {/* Edit */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
