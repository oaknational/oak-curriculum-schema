import { describe, expect, it } from "vitest";

import { programmeFieldsFixture } from "@/schema/public/components/programmeFields/programmeFields.fixture";
import { programmeFieldsSchema } from "@/schema/public/components/programmeFields/programmeFields.schema";

describe("programmeFields", () => {
  it("conforms to the schema", () => {
    const l = programmeFieldsFixture();
    expect(() => programmeFieldsSchema.parse(l)).not.toThrow();
  });
});
