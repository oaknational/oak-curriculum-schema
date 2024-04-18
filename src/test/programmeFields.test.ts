import { describe, expect, it } from "vitest";

import { programmeFieldsFixture } from "@/fixtures/programmeFields.fixture";
import { programmeFieldsSchema } from "@/schema/programmeFields.schema";

describe("programmeFields", () => {
  it("conforms to the schema", () => {
    const l = programmeFieldsFixture();
    expect(() => programmeFieldsSchema.parse(l)).not.toThrow();
  });
});
