import { describe, expect, it } from "vitest";
import { quizQuestionSchema } from "@/schema/quizQuestion.schema";
import { multipleChoiceQuestion } from "@/fixtures/quizQuestion.fixture";
import { textAndImageItemFixture } from "@/fixtures/imageTextItems.fixture";

describe("multipleChoice question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => quizQuestionSchema.parse(q)).not.toThrow();
  });

  it("handles images and text in the question stem", () => {
    const q = multipleChoiceQuestion();

    const questionStem = textAndImageItemFixture();

    q.question_stem = questionStem;

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
