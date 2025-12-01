import { describe, it, expect } from "vitest";

import { keywordsSchema, keywordsSchemaCamel } from "./keywords.schema";
import { keywordsFixture, keywordsFixtureCamel } from "./keywords.fixture";

describe("keywordsSchema", () => {
  it("should parse valid keywords", () => {
    const validData = keywordsFixture();
    const result = keywordsSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid data", () => {
    const invalidData = { keyword: "test" };
    const result = keywordsSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe("keywordsSchemaCamel", () => {
  it("should parse camelCase keywords", () => {
    const validData = keywordsFixtureCamel();
    const result = keywordsSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
