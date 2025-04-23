# 🛠️ Simple Validator

A lightweight and flexible form validation module written in TypeScript for Deno, Node.js, and browser environments. Includes common validators for strings, patterns, and Indian identity types.

---

## ✨ Features

- Basic field validations: required, minLength, maxLength, pattern
- Format validations: email, sameAs
- Identity validations: PAN, Aadhaar, Passport, Driving License, National ID
- Composable validator engine

---

## 📦 Installation

### Deno
```ts
import { validate, required, email } from "jsr:@celusion/simple-validator";
```

### Node.js (via npm/pnpm/yarn)
```bash
npm install jsr:@celusion/simple-validator
# or
pnpm add jsr:@celusion/simple-validator
```

```ts
import { validate, required, email } from "@celusion/simple-validator";
```

### Browser (via ESM CDN)
```html
<script type="module">
  import { required, validate } from "https://jsr.io/@antarixcelusion/simple-validator/mod.ts";

  console.log(validate("", [[required]])); // false
</script>
```

---

## 🧪 Usage Example

```ts
import { validate, required, email, minLength, pan } from "@celusion/simple-validator";

const nameValid = validate("John", [[required], [minLength, 3]]);
const emailValid = validate("john@example.com", [[required], [email]]);
const panValid = validate("ABCDE1234F", [[required], [pan]]);

console.log({ nameValid, emailValid, panValid });
```

---

## ✅ Compatibility

| Platform | Support |
|----------|---------|
| **Deno**     | ✅ Native |
| **Browser**  | ✅ ESM import via `jsr.io` or `esm.sh` |
| **Node.js**  | ✅ Via `jsr:@...` npm compatibility |
| **npm / pnpm / yarn** | ✅ Use `npm install jsr:@antarixcelusion/simple-validator` |

---

## 📄 License

MIT

---

Contributions and issues welcome!