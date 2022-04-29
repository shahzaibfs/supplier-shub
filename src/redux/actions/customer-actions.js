import { constants } from "../constants";

export const updateCustomerDetailsAction = (payload) => ({
  type: constants["UPDATE-customer-details"],
  payload,
});


export const updateCustomerShippingAddressAction = (payload) => ({
  type: constants["UPDATE-customer-shipping-address"],
  payload,
});

export const addNewCustomerShippingAddressAction = (payload) => ({
  type: constants["ADD-new-customer-shipping-address"],
  payload,
});

