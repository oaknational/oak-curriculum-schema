import { describe, expect, it } from "vitest";

import { syntheticProgrammesByYearFixture } from "@/schema/published/syntheticProgrammesByYear/syntheticProgrammesByYear.fixture";
import { syntheticProgrammesByYearSchema } from "@/schema/published/syntheticProgrammesByYear/syntheticProgrammesByYear.schema";

describe("syntheticProgrammesByYear", () => {
  it("conforms to the schema", () => {
    const l = syntheticProgrammesByYearFixture();
    expect(() => syntheticProgrammesByYearSchema.parse(l)).not.toThrow();
  });
});
