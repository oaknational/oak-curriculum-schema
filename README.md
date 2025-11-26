# oak-curriculum-schema

Schemas and fixtures to ensure data integrity between Oak apps and their data.

## Export Conventions

This package exports schemas, types, and fixtures in both snake_case and camelCase formats to support different coding conventions across Oak applications.

Exports are automatically generated on commit

### Schemas

All schemas are exported with consistent naming:

- **Snake case schema**: `[entityName]Schema` (e.g., `lessonDataSchema`)
- **Camel case schema**: `[entityName]SchemaCamel` (e.g., `lessonDataSchemaCamel`)

The camelCase schema variant uses `zod-to-camel-case` to transform the base schema, ensuring data validation for camelCased objects.

Schemas are organised in a hierarchy which mirrors the database organisation:

- **`public/`**
- **`published/`**
- **`internal/`**

The top level inside these folders is reserved for schemas which correspond to tables, views and materialized views. The components subfolder in each is used for schemas which form parts of the schemas in the schemas in the parent folder. The placement of these follows where the data originates and not where they are imported. (Eg. programmeFields belongs in public because the raw data originates in the public schema)

### Types

TypeScript types are inferred from schemas and exported in both formats:

- **Snake case type**: `[EntityName]` (e.g., `LessonData`)
- **Camel case type**: `[EntityName]Camel` (e.g., `LessonDataCamel`)

### Fixtures

Test fixtures are provided in both formats:

- **Snake case fixture**: `[entityName]Fixture()` (e.g., `lessonDataFixture()`)
- **Camel case fixture**: `[entityName]FixtureCamel()` (e.g., `lessonDataFixtureCamel()`)

Camel case fixtures use the `camelcase-keys` package with `{ deep: true }` to recursively transform all keys in the fixture data.

### Published Schemas

For schemas in the `published` namespace (e.g., `syntheticUnitvariantLessons`), the same naming conventions apply. Published schemas may include additional suffixes like `Published` or `New` before the `Camel` suffix:

- `syntheticUnitvariantLessonsSchema`
- `syntheticUnitvariantLessonsSchemaCamel`

### Deprecated Exports

Some exports have been renamed for consistency. Legacy names are maintained with `@deprecated` JSDoc tags:

```typescript
/**
 * @deprecated Use lessonSchema instead.
 */
export const lessonData = lessonSchema;
```

Applications should migrate to the new naming conventions, but deprecated exports will remain available to prevent breaking changes.

### Example Usage

```typescript
import {
  lessonDataSchema,
  lessonDataSchemaCamel,
  type LessonData,
  type LessonDataCamel,
  lessonDataFixture,
  lessonDataFixtureCamel,
} from "@oaknational/oak-curriculum-schema";

// Validate snake_case data
const snakeData: LessonData = lessonDataSchema.parse({
  lesson_id: 1,
  lesson_uid: "abc123",
  // ...
});

// Validate camelCase data
const camelData: LessonDataCamel = lessonDataSchemaCamel.parse({
  lessonId: 1,
  lessonUid: "abc123",
  // ...
});

// Use fixtures in tests
const snakeFixture = lessonDataFixture();
const camelFixture = lessonDataFixtureCamel();
```
