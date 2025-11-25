import type {
  Actions,
  ActionsCamel,
} from "@/schema/published/actions/actions.schema";
import camelcaseKeys from "camelcase-keys";

const baseActionsFixture: Actions = {
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
};

const baseActionsFixtureCamel: ActionsCamel = camelcaseKeys(
  baseActionsFixture,
  { deep: true },
);

export const actionsFixture = (): Actions => ({ ...baseActionsFixture });

export const actionsFixtureCamel = (): ActionsCamel => ({
  ...baseActionsFixtureCamel,
});

export default actionsFixture;
