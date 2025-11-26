import { describe, expect, it } from "vitest";

import { lessonFixture } from "@/schema/public/lesson/lesson.fixture";
import { lessonSchema } from "@/schema/public/lesson/lesson.schema";

describe("lesson", () => {
  it("conforms to the schema", () => {
    const l = lessonFixture();
    expect(() => lessonSchema.parse(l)).not.toThrow();
  });
});
