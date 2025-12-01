import camelcaseKeys from "camelcase-keys";

import type {
  Question,
  QuestionCamel,
} from "@/schema/public/question/question.schema";
import {
  matchFixture,
  multipleChoiceFixture,
  orderFixture,
  shortAnswerFixture,
} from "@/schema/public/components/quizAnswers/quizAnswers.fixture";

export const multipleChoiceQuestion = ({
  overrides = {},
}: {
  overrides?: Partial<Question>;
} = {}): Question => ({
  question_id: 1,
  question_uid: "question-1",
  _state: "published",
  question_type: "multiple-choice",
  question_stem: [
    {
      text: "What is the capital of France?",
      type: "text",
    },
  ],
  answers: {
    "multiple-choice": [
      multipleChoiceFixture({ overrides: { answer_is_correct: true } }),
      multipleChoiceFixture({ overrides: { answer_is_correct: false } }),
      multipleChoiceFixture({ overrides: { answer_is_correct: false } }),
      multipleChoiceFixture({ overrides: { answer_is_correct: false } }),
    ],
  },
  feedback: "Paris is the capital of France.",
  hint: "Think about the Eiffel Tower.",
  active: true,
  order: 1,
  ...overrides,
});

export const shortAnswerQuestion = ({
  overrides = {},
}: {
  overrides?: Partial<Question>;
} = {}): Question => ({
  question_id: 2,
  question_uid: "question-2",
  _state: "published",
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
  overrides = {},
}: {
  overrides?: Partial<Question>;
} = {}): Question => ({
  question_id: 3,
  question_uid: "question-3",
  _state: "published",
  question_type: "order",
  question_stem: [
    {
      text: "What is the capital of France?",
      type: "text",
    },
  ],
  answers: {
    order: [
      orderFixture({ overrides: { correct_order: 1 } }),
      orderFixture({ overrides: { correct_order: 2 } }),
      orderFixture({ overrides: { correct_order: 3 } }),
      orderFixture({ overrides: { correct_order: 4 } }),
    ],
  },
  feedback: "Paris is the capital of France.",
  hint: "Think about the Eiffel Tower.",
  active: true,
  order: 3,
  ...overrides,
});

export const matchQuestion = ({
  overrides = {},
}: {
  overrides?: Partial<Question>;
} = {}): Question => ({
  question_id: 4,
  question_uid: "question-4",
  _state: "published",
  question_type: "match",
  question_stem: [
    {
      text: "What is the capital of France?",
      type: "text",
    },
  ],
  answers: {
    match: [matchFixture(), matchFixture(), matchFixture(), matchFixture()],
  },
  feedback: "Paris is the capital of France.",
  hint: "Think about the Eiffel Tower.",
  active: true,
  order: 4,
  ...overrides,
});

export const multipleChoiceQuestionCamel = ({
  overrides = {},
}: {
  overrides?: Partial<QuestionCamel>;
} = {}): QuestionCamel => ({
  ...camelcaseKeys(multipleChoiceQuestion(), { deep: true }),
  ...overrides,
});

export const shortAnswerQuestionCamel = ({
  overrides = {},
}: {
  overrides?: Partial<QuestionCamel>;
} = {}): QuestionCamel => ({
  ...camelcaseKeys(shortAnswerQuestion(), { deep: true }),
  ...overrides,
});

export const orderQuestionCamel = ({
  overrides = {},
}: {
  overrides?: Partial<QuestionCamel>;
} = {}): QuestionCamel => ({
  ...camelcaseKeys(orderQuestion(), { deep: true }),
  ...overrides,
});

export const matchQuestionCamel = ({
  overrides = {},
}: {
  overrides?: Partial<QuestionCamel>;
} = {}): QuestionCamel => ({
  ...camelcaseKeys(matchQuestion(), { deep: true }),
  ...overrides,
});
