import type {
  Match,
  MatchCamel,
  MultipleChoice,
  MultipleChoiceCamel,
  Order,
  OrderCamel,
  ShortAnswer,
  ShortAnswerCamel,
} from "@/schema/public/quizAnswers/quizAnswers.schema";
import { imageItemFixture, textItemFixture } from "./imageTextItems.fixture";
import camelcaseKeys from "camelcase-keys";

export const multipleChoiceFixture = ({
  overrides = {},
}: {
  overrides?: Partial<MultipleChoice>;
} = {}): MultipleChoice => ({
  answer: [textItemFixture(), imageItemFixture()],
  answer_is_active: true,
  answer_is_correct: true,
  ...overrides,
});

export const multipleChoiceFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<MultipleChoiceCamel>;
} = {}): MultipleChoiceCamel =>
  camelcaseKeys(
    {
      answer: [textItemFixture(), imageItemFixture()],
      answer_is_active: true,
      answer_is_correct: true,
      ...overrides,
    },
    { deep: true },
  ) as MultipleChoiceCamel;

export const shortAnswerFixture = ({
  overrides = {},
}: {
  overrides?: Partial<ShortAnswer>;
} = {}): ShortAnswer => ({
  answer: [textItemFixture()],
  answer_is_active: true,
  answer_is_default: true,
  ...overrides,
});

export const shortAnswerFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ShortAnswerCamel>;
} = {}): ShortAnswerCamel =>
  camelcaseKeys(
    {
      answer: [textItemFixture()],
      answer_is_active: true,
      answer_is_default: true,
      ...overrides,
    },
    { deep: true },
  ) as ShortAnswerCamel;

export const orderFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Order>;
} = {}): Order => ({
  answer: [textItemFixture()],
  correct_order: 1,
  answer_is_active: true,
  ...overrides,
});

export const orderFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<OrderCamel>;
} = {}): OrderCamel =>
  camelcaseKeys(
    {
      answer: [textItemFixture()],
      correct_order: 1,
      answer_is_active: true,
      ...overrides,
    },
    { deep: true },
  ) as OrderCamel;

export const matchFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Match>;
} = {}): Match => ({
  answer_is_active: true,
  correct_choice: [textItemFixture({ overrides: { text: "Paris" } })],
  match_option: [textItemFixture({ overrides: { text: "Capital of France" } })],
  ...overrides,
});

export const matchFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<MatchCamel>;
} = {}): MatchCamel =>
  camelcaseKeys(
    {
      answer_is_active: true,
      correct_choice: [textItemFixture({ overrides: { text: "Paris" } })],
      match_option: [
        textItemFixture({ overrides: { text: "Capital of France" } }),
      ],
      ...overrides,
    },
    { deep: true },
  ) as MatchCamel;
