import camelcaseKeys from "camelcase-keys";

import type {
  KeyLearningPoints,
  KeyLearningPointsCamel,
} from "@/schema/public/components/keyLearningPoints/keyLearningPoints.schema";

export const keyLearningPointsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<KeyLearningPoints>;
} = {}): KeyLearningPoints => ({
  key_learning_point: "Example key learning point",
  ...overrides,
});

export const keyLearningPointsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<KeyLearningPointsCamel>;
} = {}): KeyLearningPointsCamel =>
  camelcaseKeys(
    keyLearningPointsFixture({
      overrides: overrides as Partial<KeyLearningPoints>,
    }),
  );
