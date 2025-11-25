import type {
  AdditionalFiles,
  AdditionalFilesCamel,
} from "@/schema/public/additionalFiles/additionalFiles.schema";
import camelcaseKeys from "camelcase-keys";

const baseAdditionalFilesFixture: AdditionalFiles = {
  downloadable_files: [
    {
      asset_id: 456,
      media_id: 3456,
      media_object: {
        url: "https://example.com/file1.pdf",
        bytes: 1000,
        display_name: "File 1",
      },
    },
    {
      asset_id: 932,
      media_id: 2435,
      media_object: {
        url: "https://example.com/file2.pdf",
        bytes: 2000,
        display_name: "File 2",
      },
    },
  ],
};

const baseAdditionalFilesFixtureCamel: AdditionalFilesCamel = camelcaseKeys(
  baseAdditionalFilesFixture,
  { deep: true },
);

export const additionalFilesFixture = ({
  overrides,
}: {
  overrides?: Partial<AdditionalFiles>;
} = {}): AdditionalFiles => ({
  ...baseAdditionalFilesFixture,
  ...overrides,
});

export const additionalFilesFixtureCamel = ({
  overrides,
}: {
  overrides?: Partial<AdditionalFilesCamel>;
} = {}): AdditionalFilesCamel => ({
  ...baseAdditionalFilesFixtureCamel,
  ...overrides,
});

export default additionalFilesFixture;
