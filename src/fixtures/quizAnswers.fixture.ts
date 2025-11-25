import type {
  Match,
  MultipleChoice,
  Order,
  ShortAnswer,
} from "@/schema/public/quizAnswers/quizAnswers.schema";
import { imageItemFixture, textItemFixture } from "./imageTextItems.fixture";

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
