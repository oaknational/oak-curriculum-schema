import { QuizQuestion } from "@/schema/quizQuestion.schema";

import {
  multipleChoiceFixture,
  orderFixture,
  shortAnswerFixture,
} from "./quizAnswers.fixture";

export const multipleChoiceQuestion = ({
  overrides = {},
}: {
  overrides?: Partial<QuizQuestion>;
} = {}): QuizQuestion => ({
  question_id: 1,
  question_uid: "question-1",
  question_type: "multiple-choice",
  question_stem: [
    {
      text: "What is the capital of France?",
      type: "text",
    },
  ],
  answers: {
    "multiple-choice": [
      multipleChoiceFixture(),
      multipleChoiceFixture(),
      multipleChoiceFixture(),
      multipleChoiceFixture(),
    ],
  },
  feedback: "Paris is the capital of France.",
  hint: "Think about the Eiffel Tower.",
  active: true,
  order: 1,
  ...overrides,
});

export const shortAnswerQuestion = ({
  overrides,
}: {
  overrides: Partial<QuizQuestion>;
}): QuizQuestion => ({
  question_id: 2,
  question_uid: "question-2",
  question_type: "short-answer",
  question_stem: [
    {
      text: "What is the capital of France?",
      type: "text",
    },
  ],
  answers: {
    "short-answer": [shortAnswerFixture()],
  },
  feedback: "Paris is the capital of France.",
  hint: "Think about the Eiffel Tower.",
  active: true,
  order: 2,
  ...overrides,
});

export const orderQuestion = ({
  overrides,
}: {
  overrides: Partial<QuizQuestion>;
}): QuizQuestion => ({
  question_id: 3,
  question_uid: "question-3",
  question_type: "order",
  question_stem: [
    {
      text: "What is the capital of France?",
      type: "text",
    },
  ],
  answers: {
    order: [orderFixture(), orderFixture(), orderFixture(), orderFixture()],
  },
  feedback: "Paris is the capital of France.",
  hint: "Think about the Eiffel Tower.",
  active: true,
  order: 3,
  ...overrides,
});
