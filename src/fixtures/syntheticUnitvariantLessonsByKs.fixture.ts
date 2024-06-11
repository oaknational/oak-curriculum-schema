import { SyntheticUnitvariantLessonsByKs } from "@/schema/syntheticUnitvariantLessonsByKs.schema";
import { syntheticUnitvariantLessonsFixture } from "./syntheticUnitvariantLessons.fixture";

export const syntheticUnitvariantLessonsByKsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<SyntheticUnitvariantLessonsByKs>;
} = {}): SyntheticUnitvariantLessonsByKs => ({
  unitvariant_id: 1,
  ...syntheticUnitvariantLessonsFixture(),
  ...overrides,
});
