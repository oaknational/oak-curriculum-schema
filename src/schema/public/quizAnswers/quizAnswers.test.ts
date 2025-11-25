import { describe, expect, it } from "vitest";
import {
  matchFixture,
  multipleChoiceFixture,
  orderFixture,
  shortAnswerFixture,
} from "@/fixtures/quizAnswers.fixture";
import {
  matchSchema,
  multipleChoiceSchema,
  orderSchema,
  shortAnswerSchema,
} from "@/schema/public/quizAnswers/quizAnswers.schema";

describe("multipleChoice answer", () => {
  it("conforms to the schema", () => {
    const a = multipleChoiceFixture();
    expect(() => multipleChoiceSchema.parse(a)).not.toThrow();
  });
});

describe("shortAnswer answer", () => {
  it("conforms to the schema", () => {
    const a = shortAnswerFixture();
    expect(() => shortAnswerSchema.parse(a)).not.toThrow();
  });
});

describe("order answer", () => {
  it("conforms to the schema", () => {
    const a = orderFixture();
    expect(() => orderSchema.parse(a)).not.toThrow();
  });
});

describe("match answer", () => {
  it("conforms to the schema", () => {
    const a = matchFixture();
    expect(() => matchSchema.parse(a)).not.toThrow();
  });
});
