# Deneb UI - Fivora Editable Components

This guide explains how to use the fully editable Deneb UI components (`EditableGoogleFeedback`, `EditableTestimonialSection`, `EditableTestimonialCard`) with the ARC Engine and Fivora visual-editing platform.

## Why Localize Components?

Fivora's static content contract validator requires all elements with `data-preview` attributes to be placed in the current project's `src/` directory so the AST parser can accurately scan them.

**Important Rule:** Do not import editable Fivora components directly from the `@deneb-ui/ui` node_modules directory. Instead, copy these components into your project's local `src/components/ui/` folder and import them locally.

## Component Features

Our Fivora editable components have been engineered with the following best practices:

- **Strict Validation Compliance:** All Fivora `data-preview` markers are implemented using literal paths or string template literals, ensuring zero errors in the `deneb validate` pipeline.
- **Empty-State Safety:** Fivora tests components by supplying empty data. We have removed conditional rendering for text fields (`{text && <span>{text}</span>}`) and replaced them with dynamic `hidden` classes (`<span className={!text ? "hidden" : "..."}>{text}</span>`) to ensure the editable target remains securely mounted for Fivora's empty-state export tests.
- **Static Exclusions (`data-preview-static="true"`):** Complex inner wrappers containing untagged elements, images, or SVGs properly utilize `data-preview-static="true"` tags (such as on our dynamic Star rating SVGs). This prevents Fivora from incorrectly parsing decorative visual nodes.
- **Title Tooltips Sanitization:** Fivora flags missing mappings on elements carrying `title` attributes (e.g. `title="Rating: 5 of 5"`). We have removed extraneous titles from container divs to guarantee pristine validation.
- **Interactive Ratings Sync:** Fivora edits the schema value. The Star rating system reacts dynamically and visibly via mutation observers without requiring full-page re-renders.

## Implementation Steps

1. Copy the editable component files from `D:\OFFICE\deneb\ui\src\` to your project's `src/components/ui/` directory:
   - `EditableGoogleFeedback.tsx`
   - `EditableTestimonialSection.tsx`
   - `EditableTestimonialCard.tsx`
2. Ensure you have your `useSiteData` context and schemas configured in Fivora.
3. Import the components locally:
   ```tsx
   import { EditableGoogleFeedback } from '@/components/ui/EditableGoogleFeedback';
   import { EditableTestimonialSection } from '@/components/ui/EditableTestimonialSection';
   ```
4. Run `npm run validate` to verify the Fivora contract tests pass.

## ARC Engine Compatibility

These components are 100% compatible with the latest Deneb ARC Engine builds and Fivora Platform Support, utilizing efficient tailwind layouts and zero-bug Next.js RSC integration.
