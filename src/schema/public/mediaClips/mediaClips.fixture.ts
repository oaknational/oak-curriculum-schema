import type {
  LessonMediaClips,
  LessonMediaClipsCamel,
  MediaClipObject,
  MediaClipObjectCamel,
  VideoClipObject,
  VideoClipObjectCamel,
  MediaClipCycle,
  MediaClipCycleCamel,
} from "@/schema/public/mediaClips/mediaClips.schema";
import camelcaseKeys from "camelcase-keys";

export const mediaObjectFixture = ({
  overrides,
}: {
  overrides?: Partial<MediaClipObject>;
} = {}): MediaClipObject => ({
  url: "http://example.com/video1.mp3",
  type: "upload",
  bytes: 81127,
  format: "mp3",
  display_name: "9_task_C1_3",
  resource_type: "video",
  ...overrides,
});

export const mediaObjectFixtureCamel = ({
  overrides,
}: {
  overrides?: Partial<MediaClipObjectCamel>;
} = {}): MediaClipObjectCamel => ({
  ...camelcaseKeys(mediaObjectFixture(), { deep: true }),
  ...overrides,
});

export const videoObjectFixture = ({
  overrides,
}: {
  overrides?: Partial<VideoClipObject>;
} = {}): VideoClipObject => ({
  duration: 5.055667,
  mux_asset_id: "hug9i01Tnpf1y83irOm00HRbvAJpttJPU78KNYzPav3mg",
  playback_ids: [
    {
      id: "mVkKUtOfoD1100012GNC1pCO6RvUgyGwqGoq01pYsy7WeA",
      policy: "signed",
    },
    {
      id: "BW00NkK9R01jB8PPO7R00YCFl2XBDn13GTkhd0001PNtheF00",
      policy: "public",
    },
  ],
  mux_playback_id: "BW00NkK9R01jB8PPO7R00YCFl2XBDn13GTkhd0001PNtheF00",
  ...overrides,
});

export const mediaClipCycleFixture = ({
  overrides,
}: {
  overrides?: Partial<MediaClipCycle>;
} = {}): MediaClipCycle => ({
  order: "1",
  media_id: "191188",
  video_id: 29844,
  media_type: "video",
  custom_title: "Intro Video 1",
  media_object: mediaObjectFixture(),
  video_object: videoObjectFixture(),
  ...overrides,
});

export const mediaClipsFixture = ({
  overrides,
}: {
  overrides?: Partial<LessonMediaClips>;
} = {}): LessonMediaClips => ({
  media_clips: {
    intro: [
      {
        order: "1",
        media_id: "191188",
        video_id: 29844,
        media_type: "video",
        custom_title: "Intro Video 1",
        media_object: mediaObjectFixture(),
        video_object: videoObjectFixture(),
      },
      {
        order: "2",
        media_id: "191189",
        video_id: 29845,
        media_type: "video",
        custom_title: "Intro Video 2",
        media_object: {
          url: "http://example.com/video2.mp3",
          type: "upload",
          bytes: 122087,
          format: "mp3",
          display_name: "8_task_C1_2",
          resource_type: "video",
        },
        video_object: {
          duration: 7.603667,
          mux_asset_id: "gyUmSG2VVqcuw00NzT9f02kZvlLmXsrnuT5P7KhrYhWJg",
          playback_ids: [
            {
              id: "9a02PY7PivjOBUHyH4N2mAwJH00aJoZeybWyy9hiwXVQY",
              policy: "public",
            },
            {
              id: "02mDhMdHMs4MOCAMutPLWzylp00NQgDYfiydlLQPDWI3M",
              policy: "signed",
            },
          ],
          mux_playback_id: "9a02PY7PivjOBUHyH4N2mAwJH00aJoZeybWyy9hiwXVQY",
        },
      },
    ],
    cycle2: [
      {
        order: "1",
        media_id: "191117",
        video_id: 29877,
        media_type: "video",
        custom_title: "",
        media_object: {
          url: "http://oaknationalacademy-res.cloudinary.com/video/upload/v1736420414/u5bptym7h8ts8nyyrpwg.mp4",
          type: "upload",
          bytes: 276767,
          format: "mp4",
          display_name: "australia fact",
          resource_type: "video",
        },
        video_object: {
          duration: 5.613111,
          mux_asset_id: "4yb74fNKob6M6AT02AFTmsTrJEgXUl00WQWhpt01KttWcI",
          playback_ids: [
            {
              id: "RUIUNGcGf01kgZU1xC5peDCvGpC2d2YeRcwSMfJ4cvMk",
              policy: "public",
            },
            {
              id: "NVs5TJ5Lt6POkNwDBNtHZth2a2VtBvsyorgJPQfO6W4",
              policy: "signed",
            },
          ],
          mux_playback_id: "RUIUNGcGf01kgZU1xC5peDCvGpC2d2YeRcwSMfJ4cvMk",
        },
      },
    ],
  },
  ...overrides,
});

export const mediaClipsFixtureCamel = ({
  overrides,
}: {
  overrides?: Partial<LessonMediaClipsCamel>;
} = {}): LessonMediaClipsCamel =>
  camelcaseKeys(mediaClipsFixture(overrides as any), {
    deep: true,
  }) as LessonMediaClipsCamel;

export const videoObjectFixtureCamel = ({
  overrides,
}: {
  overrides?: Partial<VideoClipObjectCamel>;
} = {}): VideoClipObjectCamel | null => {
  const result = videoObjectFixture(overrides as any);
  return result
    ? (camelcaseKeys(result, { deep: true }) as VideoClipObjectCamel)
    : result;
};

export const mediaClipCycleFixtureCamel = ({
  overrides,
}: {
  overrides?: Partial<MediaClipCycleCamel>;
} = {}): MediaClipCycleCamel =>
  camelcaseKeys(mediaClipCycleFixture(overrides as any), {
    deep: true,
  }) as MediaClipCycleCamel;

export const additionalCyclesFixture = {
  media_clips: {
    cycle3: [mediaClipCycleFixture()],
    cycle4: [
      mediaClipCycleFixture(),
      mediaClipCycleFixture({
        overrides: {
          order: "2",
          media_id: "1911749",
          video_id: 298345,
        },
      }),
    ],
  },
};

export const additionalCyclesFixtureCamel = camelcaseKeys(
  additionalCyclesFixture,
  { deep: true },
);

export default mediaClipsFixture;
