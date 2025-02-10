import type { Actions } from "@/schema/actions.schema";

export const actionsFixture = (): Actions => ({
  exclusions: ["lessonDownloadsQuery"],
  opt_out: ["pupilSubjectListingQuery"],
  programme_field_overrides: {},
  display_expiring_banner: true,
  disable_pupil_share: true,
  display_PE_title: true,
  display_vocab_button: true,
  override_pathway: "GSCE CS",
});

export default actionsFixture;
