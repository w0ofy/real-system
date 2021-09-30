/**
 * THIS FILE SHOULD MATCH `./emotion.d.ts` <-- that file is the source of truth
 *
 * The content here is duplicating the emotion.d.ts file content,
 * so we can export this module augmentation from index.ts so when this package is bundled,
 * npm-dts will generate the typings from the index.ts file and output to index.d.ts
 */
import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends Record<string, any> {}
}
