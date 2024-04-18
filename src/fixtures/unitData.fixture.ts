import { UnitData } from "@/schema/unitData.schema";

export const unitDataFixture = (): UnitData => ({
  unit_id: 0,
  unit_uid: "unit-uid",
  description: null,
  slug: "unit-slug",
  tags: null,
  title: "unit-title",
  _state: "published",
  _cohort: "2023-2024",
});
