import camelcaseKeys from "camelcase-keys";

import type {
  Actions,
  ActionsCamel,
} from "@/schema/published/components/actions/actions.schema";

export const actionsFixture = ({
  overrides = {},
}: {
  overrides?: Partial<Actions>;
} = {}): Actions => ({
  exclusions: ["lessonDownloadsQuery"],
  opt_out: ["pupilSubjectListingQuery"],
  programme_field_overrides: {},
  display_expiring_banner: true,
  disable_pupil_share: true,
  display_PE_title: true,
  display_vocab_button: true,
  override_pathway: "GSCE CS",
  is_pe_practical: true,
  related_subject_slugs: [],
  ...overrides,
});

export const actionsFixtureCamel = ({
  overrides = {},
}: {
  overrides?: Partial<ActionsCamel>;
} = {}): ActionsCamel => ({
  ...camelcaseKeys(actionsFixture(), { deep: true }),
  ...overrides,
});

export default actionsFixture;
