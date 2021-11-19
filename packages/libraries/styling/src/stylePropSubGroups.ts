/**
 * This file is for narrowly-defined style props that are useful
 * for component consumption and reuse. This way, components
 * don't need to import StyleProps and `Omit` or `Pick` many props
 * simply to define a strict set of prop types.
 * * !!! IMPORTANT NOTES !!!
 * * Add more types to export from styled-system as needed
 * * Never export ColorProps (see ColorProps in ./styleProps to understand why)
 */
import { MarginProps } from 'styled-system';

/** styled-system prop typings */
export type { MarginProps };
