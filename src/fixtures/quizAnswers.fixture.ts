import {
  Match,
  MultipleChoice,
  Order,
  ShortAnswer,
} from "@/schema/quizAnswers.schema";
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
  answer: [textItemFixture(), imageItemFixture()],
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
  correct_choice: [textItemFixture()],
  match_option: [textItemFixture()],
  ...overrides,
});
