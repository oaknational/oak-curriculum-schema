import { describe, expect, it } from "vitest";

import { syntheticProgrammesByYearFixture } from "@/fixtures/syntheticProgrammesByYear.fixture";
import { syntheticProgrammesByYearSchema } from "@/schema/syntheticProgrammesByYear.schema";

describe("syntheticProgrammesByYear", () => {
  it("conforms to the schema", () => {
    const l = syntheticProgrammesByYearFixture();
    expect(() => syntheticProgrammesByYearSchema.parse(l)).not.toThrow();
  });
});
