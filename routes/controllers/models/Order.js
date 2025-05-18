const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  address: String,
  phoneNumber: String,
  alternatePhoneNumber: String,
  personAvailableOnSite: String,
  deliveryDate: Date,
  installationDate: Date,
  selectedProducts: [String],
  productPrices: [Number],
  specialInstructionsDelivery: String,
  specialInstructionsInstallation: String,
  location: String,
  gstDetails: String,
  signatureCustomer: String,
  signatureStaff: String,
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
