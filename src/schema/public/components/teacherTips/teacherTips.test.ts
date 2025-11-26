import { describe, it, expect } from "vitest";

import {
  teacherTipsSchema,
  teacherTipsSchemaCamel,
} from "./teacherTips.schema";
import {
  teacherTipsFixture,
  teacherTipsFixtureCamel,
} from "./teacherTips.fixture";

describe("teacherTipsSchema", () => {
  it("should parse valid teacher tips", () => {
    const validData = teacherTipsFixture();
    const result = teacherTipsSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it("should reject invalid data", () => {
    const invalidData = { teacher_tip: 123 };
    const result = teacherTipsSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe("teacherTipsSchemaCamel", () => {
  it("should parse camelCase teacher tips", () => {
    const validData = teacherTipsFixtureCamel();
    const result = teacherTipsSchemaCamel.safeParse(validData);
    expect(result.success).toBe(true);
  });
});
