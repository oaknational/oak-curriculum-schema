import { describe, it, expect } from "vitest";

import {
  lessonOutlineSchema,
  lessonOutlineSchemaCamel,
} from "./lessonOutline.schema";
import {
  lessonOutlineFixture,
  lessonOutlineFixtureCamel,
} from "./lessonOutline.fixture";

describe("lessonOutlineSchema", () => {
  it("should parse valid lesson outline", () => {
    const validData = lessonOutlineFixture();
    const result = lessonOutlineSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid data", () => {
    const invalidData = { lesson_outline: 123 };
    const result = lessonOutlineSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe("lessonOutlineSchemaCamel", () => {
  it("should parse camelCase lesson outline", () => {
    const validData = lessonOutlineFixtureCamel();
    const result = lessonOutlineSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
