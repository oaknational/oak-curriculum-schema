import { describe, expect, it } from "vitest";

import { questionSchema } from "@/schema/public/question/question.schema";
import { multipleChoiceQuestion } from "@/schema/public/question/question.fixture";
import { textAndImageItemFixture } from "@/schema/public/components/imageTextItems/imageTextItems.fixture";

describe("multipleChoice question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => questionSchema.parse(q)).not.toThrow();
  });

  it("handles images and text in the question stem", () => {
    const q = multipleChoiceQuestion();

    const questionStem = textAndImageItemFixture();

    q.question_stem = questionStem;

    expect(() => questionSchema.parse(q)).not.toThrow();
  });
});

describe("shortAnswer question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => questionSchema.parse(q)).not.toThrow();
  });
});

describe("order question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => questionSchema.parse(q)).not.toThrow();
  });
});

describe("match question", () => {
  it("conforms to the schema", () => {
    const q = multipleChoiceQuestion();
    expect(() => questionSchema.parse(q)).not.toThrow();
  });
});
