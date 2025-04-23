import {
  required,
  email,
  minLength,
  pan,
  aadhaar,
  passport,
  drivingLicense,
  nationalId,
  validate
} from "./mod.ts";

console.log("Email validation:", validate("test@example.com", [[required], [email]]));
console.log("PAN validation:", validate("ABCDE1234F", [[required], [pan]]));
console.log("Aadhaar validation:", validate("234567890123", [[aadhaar]]));
console.log("Passport validation:", validate("A1234567", [[passport]]));
console.log("DL validation:", validate("MH1220141234567", [[drivingLicense]]));
console.log("National ID validation:", validate("123456789012", [[nationalId]]));

console.log("Password validation:", validate("StrongPass123", [[minLength, 8]]));