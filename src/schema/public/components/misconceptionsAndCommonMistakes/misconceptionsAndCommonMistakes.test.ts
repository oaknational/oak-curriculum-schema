import { describe, it, expect } from "vitest";

import {
  misconceptionsAndCommonMistakesSchema,
  misconceptionsAndCommonMistakesSchemaCamel,
} from "./misconceptionsAndCommonMistakes.schema";
import {
  misconceptionsAndCommonMistakesFixture,
  misconceptionsAndCommonMistakesFixtureCamel,
} from "./misconceptionsAndCommonMistakes.fixture";

describe("misconceptionsAndCommonMistakesSchema", () => {
  it("should parse valid misconceptions and common mistakes", () => {
    const validData = misconceptionsAndCommonMistakesFixture();
    const result = misconceptionsAndCommonMistakesSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid data", () => {
    const invalidData = { misconception: "test" };
    const result = misconceptionsAndCommonMistakesSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe("misconceptionsAndCommonMistakesSchemaCamel", () => {
  it("should parse camelCase misconceptions and common mistakes", () => {
    const validData = misconceptionsAndCommonMistakesFixtureCamel();
    const result =
      misconceptionsAndCommonMistakesSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
