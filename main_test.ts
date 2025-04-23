import { assertEquals } from "@std/assert";
import { required, email } from "./src/rules.ts";

Deno.test("required", () => {
  assertEquals(required("hello"), true);
  assertEquals(required(""), false);
  assertEquals(required(null), false);
});

Deno.test("email", () => {
  assertEquals(email("test@example.com"), true);
  assertEquals(email("invalid-email"), false);
});
