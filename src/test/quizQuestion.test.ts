import { describe, expect, it } from "vitest";
import { multipleChoiceQuestion, quizQuestionSchema } from "..";

describe("multipleChoice question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => quizQuestionSchema.parse(q)).not.toThrow();
  });
});

describe("shortAnswer question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => quizQuestionSchema.parse(q)).not.toThrow();
  });
});

describe("order question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => quizQuestionSchema.parse(q)).not.toThrow();
  });
});

describe("match question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => quizQuestionSchema.parse(q)).not.toThrow();
  });
});
