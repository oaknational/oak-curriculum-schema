import { LessonMediaClipsSchema } from "@/schema/mediaClips.schema";

export const mediaClipsFixture = ({
  overrides,
}: {
  overrides?: Partial<LessonMediaClipsSchema>;
} = {}): LessonMediaClipsSchema => ({
  media_clips: {
    intro: [
      {
        order: "1",
        media_id: "191188",
        video_id: 29844,
        media_type: "video",
        custom_title: "Intro Video 1",
        media_object: {
          id: "4de4d70775b95bbc722d4d259fb033ad",
          url: "http://example.com/video1.mp3",
          type: "upload",
          bytes: 81127,
          width: 0,
          format: "mp3",
          height: 0,
          version: 1736860290,
          duration: 5.041633,
          metadata: {
            asset_type: "audio_speech",
            source_type: "partner_created",
            asset_source: "partner_created",
            licence_type: "no_licence",
            content_cycle: "cycle_2",
            permissionGranted: "notRequired",
          },
          secure_url: "https://example.com/video1.mp3",
          access_mode: "public",
          asset_folder:
            "Cycle 2 assets/MFL - French - Secondary/Audio/Y7/FR7U15/FR7U15L1",
          display_name: "9_task_C1_3",
          resource_type: "video",
        },
        video_object: {
          id: "hug9i01Tnpf1y83irOm00HRbvAJpttJPU78KNYzPav3mg",
          status: "ready",
          tracks: [
            {
              id: "32v67aMKIr5Z014b3n3AVwNHjAPnWSuhJCm008E026lYOQ",
              type: "audio",
              duration: 5.041633,
            },
            {
              id: "staging-mock-asset",
              asset_id: "hug9i01Tnpf1y83irOm00HRbvAJpttJPU78KNYzPav3mg",
            },
          ],
          duration: 5.055667,

          created_at: 1736864397,
          mp4_support: "standard",
          passthrough: "VIDE-ZHHRL-29844",
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
          encoding_tier: "smart",
          video_quality: "plus",
          mux_playback_id: "BW00NkK9R01jB8PPO7R00YCFl2XBDn13GTkhd0001PNtheF00",
          signed_stream_id: "mVkKUtOfoD1100012GNC1pCO6RvUgyGwqGoq01pYsy7WeA",
          static_renditions: {
            status: "preparing",
          },
          max_resolution_tier: "1080p",
          max_stored_resolution: "Audio only",
          non_standard_input_reasons: {
            audio_codec: "mp3",
          },
        },
      },
      {
        order: "2",
        media_id: "191189",
        video_id: 29845,
        media_type: "video",
        custom_title: "Intro Video 2",
        media_object: {
          id: "e3331a6ee856256933cee73f7a62041b",
          url: "http://example.com/video2.mp3",
          type: "upload",
          bytes: 122087,
          width: 0,
          format: "mp3",
          height: 0,
          version: 1736860289,
          duration: 7.601633,
          metadata: {
            asset_type: "audio_speech",
            source_type: "partner_created",
            asset_source: "partner_created",
            licence_type: "no_licence",
            content_cycle: "cycle_2",
            permissionGranted: "notRequired",
          },
          secure_url: "https://example.com/video2.mp3",
          access_mode: "public",
          asset_folder:
            "Cycle 2 assets/MFL - French - Secondary/Audio/Y7/FR7U15/FR7U15L1",
          display_name: "8_task_C1_2",
          resource_type: "video",
        },
        video_object: {
          id: "gyUmSG2VVqcuw00NzT9f02kZvlLmXsrnuT5P7KhrYhWJg",
          status: "ready",
          tracks: [
            {
              id: "01hRHlW4zKJxPMUCtlSHQLaQjecx9o02gNsy597cLs01500",
              type: "audio",
              duration: 7.601633,
            },
            {
              id: "staging-mock-asset",
              asset_id: "gyUmSG2VVqcuw00NzT9f02kZvlLmXsrnuT5P7KhrYhWJg",
            },
          ],
          duration: 7.603667,

          created_at: 1736864397,
          mp4_support: "standard",
          passthrough: "VIDE-TVKWF-29845",
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
          encoding_tier: "smart",
          video_quality: "plus",
          mux_playback_id: "9a02PY7PivjOBUHyH4N2mAwJH00aJoZeybWyy9hiwXVQY",
          signed_stream_id: "02mDhMdHMs4MOCAMutPLWzylp00NQgDYfiydlLQPDWI3M",
          static_renditions: {
            status: "preparing",
          },
          max_resolution_tier: "1080p",
          max_stored_resolution: "Audio only",
          non_standard_input_reasons: {
            audio_codec: "mp3",
          },
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
          id: "3690e090829ca49c5506d6b90fd1106b",
          url: "http://oaknationalacademy-res.cloudinary.com/video/upload/v1736420414/u5bptym7h8ts8nyyrpwg.mp4",
          type: "upload",
          bytes: 276767,
          width: 1920,
          format: "mp4",
          height: 1080,
          version: 1736420414,
          duration: 5.613111,
          metadata: {
            asset_type: "video_other",
            source_type: "partner_created",
            asset_source: "partner_created",
            licence_type: "no_licence",
            content_cycle: "cycle_2",
            permissionGranted: "notRequired",
          },

          secure_url:
            "https://oaknationalacademy-res.cloudinary.com/video/upload/v1736420414/u5bptym7h8ts8nyyrpwg.mp4",
          access_mode: "public",

          asset_folder: "Test - Internal use only",
          display_name: "australia fact",
          resource_type: "video",
        },
        video_object: {
          id: "4yb74fNKob6M6AT02AFTmsTrJEgXUl00WQWhpt01KttWcI",
          status: "ready",
          tracks: [
            {
              id: "A6wEzIy8eVnOiRczG6027ibMXQQ02vBLWrfsXYfza4kEE",
              type: "audio",
              duration: 5.58,
            },
            {
              id: "8WDoX54TtLy7r02ZACcYYJAWunpvVsayudUrZ8JoGOBA",
              type: "video",
              duration: 5.566667,
            },
            {
              id: "staging-mock-asset",
              asset_id: "4yb74fNKob6M6AT02AFTmsTrJEgXUl00WQWhpt01KttWcI",
            },
          ],
          duration: 5.613111,

          created_at: 1736955070,
          mp4_support: "standard",
          passthrough: "VIDE-NSHCJ-29877",
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
          encoding_tier: "smart",
          video_quality: "plus",
          mux_playback_id: "RUIUNGcGf01kgZU1xC5peDCvGpC2d2YeRcwSMfJ4cvMk",
          signed_stream_id: "NVs5TJ5Lt6POkNwDBNtHZth2a2VtBvsyorgJPQfO6W4",
          static_renditions: {
            status: "preparing",
          },
          max_resolution_tier: "1080p",
          max_stored_resolution: "HD",
        },
      },
    ],
  },
  ...overrides,
});

export default mediaClipsFixture;
