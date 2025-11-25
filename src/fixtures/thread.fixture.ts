import { Thread } from "@/schema/public/thread.schema";

export const threadFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Thread>;
} = {}): Thread => ({
  thread_id: 1,
  thread_title: "A thread",
  thread_slug: "a-thread",
  ...overrides,
});
