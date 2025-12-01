# Changelog - feat/hackday Branch

This document outlines the changes introduced in the `feat/hackday` branch compared to `main`.

## 🔴 Breaking Changes

### Renamed Fixture Exports

The following fixtures have been **renamed** (though fixtures are still available with their new names):

| Old Fixture Name        | New Fixture Name    |
| ----------------------- | ------------------- |
| `lessonDataFixture()`   | `lessonFixture()`   |
| `unitDataFixture()`     | `unitFixture()`     |
| `quizQuestionFixture()` | `questionFixture()` |
| `assetsFixture()`       | `assetFixture()`    |

**Note:** The following fixtures retain their names but are now exported from restructured paths (still accessible from the package root):

- `programmeFieldsFixture()`
- `unitvariantFixture()`
- `lessonContentFixture()`
- `syntheticUnitvariantLessonsFixture()`
- `quizAnswersFixture()`
- `syntheticUnitvariantsWithLessonIdsFixture()` (now from `syntheticUnitvariantsWithLessonIdsBase`)
- `syntheticProgrammesByYearFixture()`
- `syntheticUnitvariantLessonsByKsFixture()`
- `syntheticUnitvariantsWithLessonIdsByKsFixture()`
- `threadFixture()`
- `additionalFilesFixture()`
- `mediaClipsFixture()`
- `imageTextItemsFixture()`
- `actionsFixture()` (now under published)

**All fixtures are still exported from the package root**, but their internal file locations have changed as part of the reorganization.

#### Renamed Schema Exports

The following schemas have been renamed:

| Old Name              | New Name          | Migration Path                                         |
| --------------------- | ----------------- | ------------------------------------------------------ |
| `lessonDataSchema`    | `lessonSchema`    | Import from `@/schema/public/lesson/lesson.schema`     |
| `LessonData` (type)   | `Lesson` (type)   | Import from `@/schema/public/lesson/lesson.schema`     |
| `unitDataSchema`      | `unitSchema`      | Import from `@/schema/public/unit/unit.schema`         |
| `UnitData` (type)     | `Unit` (type)     | Import from `@/schema/public/unit/unit.schema`         |
| `quizQuestionSchema`  | `questionSchema`  | Import from `@/schema/public/question/question.schema` |
| `QuizQuestion` (type) | `Question` (type) | Import from `@/schema/public/question/question.schema` |
| `assetsSchema`        | `assetSchema`     | Import from `@/schema/public/asset/asset.schema`       |
| `Assets` (type)       | `Asset` (type)    | Import from `@/schema/public/asset/asset.schema`       |

#### Removed Legacy Schemas

The following schema file has been completely removed:

- `threadsByUnit.schema.ts` - no direct replacement

**Note:** `internal.schema.ts` has been **moved** to `src/schema/internal/components/internal/internal.schema.ts` and is still exported. The schemas (`baseIngestStates`, `assetIngestStates`, `videoIngestStates`) are now available with deprecated exports for backward compatibility.

### Dependency Updates

**Zod Peer Dependency Updated:**

- **Old:** `zod: ^3.22.4`
- **New:** `zod: ^4.1.13`

This is a **major version bump** and may introduce breaking changes if you're using Zod v3-specific features. Review [Zod's migration guide](https://github.com/colinhacks/zod/releases) when upgrading.

### Export Path Changes

The module structure has been completely reorganized. All exports now follow a new hierarchy which mirrors the database organisation. The top level inside these folders is reserved for schemas which correspond to tables, views and materialized views. The components subfolder in each is used for schemas which form parts of the schemas in the schemas in the parent folder. The placement of these follows where the data originates and not where they are imported.

- **`public/`**
- **`published/`**
- **`internal/`**

**Direct imports from the root `schema` directory will no longer work.** You must import from the new structured paths.

---

## 🟡 Internal Changes (Non-Breaking)

### New Module Organization

The schema structure has been reorganized into three main categories:

1. **Public Schemas** (`src/schema/public/`)
   - Asset, Lesson, Question, Thread, Unit, UnitVariant
   - Each schema now includes fixtures and tests in the same directory
2. **Published Schemas** (`src/schema/published/`)
   - Actions, LessonContent, ProgrammeListing
   - Synthetic views (by year, by KS, etc.)
3. **Internal Schemas** (`src/schema/internal/`)
   - Internal-only components and utilities

### Component Extraction

Many shared components have been extracted into dedicated modules under `components/`:

**New Component Modules:**

- `additionalFiles/` - Additional file schemas
- `base/` - Base schemas (\_state, \_cohort, timestamps, etc.)
- `contentGuidance/` - Content guidance schemas
- `equipmentAndResources/` - Equipment and resources schemas
- `features/` - Feature schemas
- `imageTextItems/` - Image and text item schemas
- `keyLearningPoints/` - Key learning points schemas
- `keywords/` - Keywords schemas
- `lessonOutline/` - Lesson outline schemas
- `mediaClips/` - Media clips schemas
- `misconceptionsAndCommonMistakes/` - Misconceptions schemas
- `programmeFields/` - Programme field schemas
- `quizAnswers/` - Quiz answer schemas
- `staticLessonList/` - Static lesson list schemas
- `teacherTips/` - Teacher tips schemas

Each component directory now includes:

- `*.schema.ts` - The Zod schema definition
- `*.fixture.ts` - Test fixtures (snake_case and camelCase variants)
- `*.test.ts` - Unit tests
- `index.ts` - Barrel exports

### New CamelCase Support

All schemas and fixtures now export both snake_case and camelCase variants:

**Schemas:**

- `[name]Schema` - snake_case version
- `[name]SchemaCamel` - camelCase version (using `zod-to-camel-case`)

**Types:**

- `[Name]` - snake_case type
- `[Name]Camel` - camelCase type

**Fixtures:**

- `[name]Fixture()` - snake_case fixture
- `[name]FixtureCamel()` - camelCase fixture (using `camelcase-keys` with `{deep: true}`)

### New Schema Variants

Several schemas now include additional variants for different states:

- `lessonNewSchema` / `lessonPublishedSchema` - State-specific lesson schemas
- `unitNewSchema` / `unitPublishedSchema` - State-specific unit schemas
- `questionNewSchema` / `questionPublishedSchema` - State-specific question schemas
- `assetNewSchema` / `assetPublishedSchema` - State-specific asset schemas

### New Dependencies

Two new runtime dependencies have been added:

- `camelcase-keys: ^10.0.1` - For converting fixture keys to camelCase
- `zod-to-camel-case: ^0.4.2` - For converting Zod schemas to camelCase

### Developer Experience Improvements

**New Scripts:**

- `npm run create-schema-indexes` - Auto-generates index files for schema directories
- `npm run lint:fix` - Separate command for fixing lint issues

**Improved Tooling:**

- Updated to ESLint v9 with flat config
- Added `lint-staged` for pre-commit hooks
- Improved TypeScript path resolution with `@/` alias
- Stricter type checking configuration

**File Organization:**

- All related files (schema, fixture, test) are now co-located
- Consistent naming conventions across all schemas
- Automatic index file generation via script

### Test Coverage

All schemas now have dedicated test files that validate:

- Schema parsing succeeds with valid fixture data
- Both snake_case and camelCase variants work correctly

---

## Migration Guide

### For Breaking Changes

1. **Update Zod dependency** to v4:

   ```bash
   npm install zod@^4.1.13
   ```

2. **Update renamed imports:**

   ```typescript
   // Before
   import { lessonDataSchema, LessonData } from "oak-curriculum-schema";

   // After
   import { lessonSchema, Lesson } from "oak-curriculum-schema";
   ```

3. **Update fixture imports:**

   ```typescript
   // Before
   import { lessonDataFixture } from "oak-curriculum-schema";

   // After
   import { lessonFixture } from "oak-curriculum-schema";
   ```

4. **Use new structured paths for direct imports** (if needed):

   ```typescript
   // Preferred: Import from package root (barrel exports)
   import { lessonSchema } from "oak-curriculum-schema";

   // Alternative: Import from specific module
   import { lessonSchema } from "oak-curriculum-schema/schema/public/lesson/lesson.schema";
   ```

### Taking Advantage of New Features

1. **Use camelCase variants** for frontend applications:

   ```typescript
   import {
     lessonSchemaCamel,
     LessonCamel,
     lessonFixtureCamel,
   } from "oak-curriculum-schema";

   const camelData: LessonCamel = lessonFixtureCamel();
   ```

2. **Use state-specific schemas** for validation:

   ```typescript
   import {
     lessonNewSchema,
     lessonPublishedSchema,
   } from "oak-curriculum-schema";

   // Validate new lessons (strict _state check)
   lessonNewSchema.parse(newLessonData);

   // Validate published lessons
   lessonPublishedSchema.parse(publishedLessonData);
   ```

---

## Summary Statistics

- **167 files changed**
- **5,936 insertions**
- **2,936 deletions**
- **20+ commits** in feature branch
- **Major refactor** improving code organization and maintainability
