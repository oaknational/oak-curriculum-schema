import { describe, expect, it } from "vitest";

import { lessonContentFixture } from "@/schema/published/lessonContent/lessonContent.fixture";
import { lessonContentSchema } from "@/schema/published/lessonContent/lessonContent.schema";

describe("lessonContent", () => {
  it("conforms to the schema", () => {
    const l = lessonContentFixture();
    expect(() => lessonContentSchema.parse(l)).not.toThrow();
  });
});
