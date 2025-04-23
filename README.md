# 🛠️ Simple Validator

A lightweight and reusable validation module for form and identity field validation in Deno.

## 📦 Installation

```ts
import {
  required,
  email,
  minLength,
  pan,
  validate
} from "jsr:@celusion/simple-validator@1";
```

## 🧰 Validators

### Generic
```required(value)```

```email(value)```

```minLength(value, length)```

```maxLength(value, length)```

```pattern(value, regex)```

```sameAs(value, compareTo)```

### Identity Types
```pan(value) – Validates Indian PAN```

```aadhaar(value) – Validates Aadhaar number```

```passport(value) – Validates Passport number```

```drivingLicense(value) – Validates Driving License (India)```

```nationalId(value) – Validates 12-digit National ID```

## 🚀 Usage
```ts
validate("example@email.com", [
  [required],
  [email],
]);

validate("ABCDE1234F", [
  [pan],
]);

validate("HelloWorld", [
  [minLength, 5],
  [maxLength, 15],
]);
```