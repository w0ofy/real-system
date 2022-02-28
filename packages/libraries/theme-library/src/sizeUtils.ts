import { _logger } from '@real-system/utils-library';

type Format = 'rem' | 'px';
type FormatScaleReturnValue = `-${string}${Format}` | `${string}${Format}`;

const formatScale = (
  size: number,
  format: Format = 'rem',
  destructive?: boolean
): FormatScaleReturnValue => {
  let prefix = '';
  if (destructive) prefix = '-';
  if (format === 'rem') {
    // divide by 10 because real system's html size is sized down to 0.625rem
    return `${prefix}${size / 10}rem`;
  }
  return `${prefix}${size}px`;
};

type MakeScaleUtilOptions = {
  origin: string;
  format: Format;
  destructive?: boolean;
};

const makeScaleUtil = (
  size: number,
  multiplier: number,
  { origin, format = 'rem', destructive }: MakeScaleUtilOptions
) => {
  if (!Number.isInteger(size)) {
    _logger.throw.type(
      `utils/${origin}`,
      `${size} is not an integer. 'majorScale' only accepts integers as an argument.`
    );
  }

  return formatScale(size * multiplier, format, destructive);
};

type ScalerOptions = {
  format?: Format;
  destructive?: boolean;
};

const defaultScalerOptions: ScalerOptions = {
  format: 'rem',
  destructive: false,
};

/**
 * Creates a multiple-of-8 measurement in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const majorScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) => makeScaleUtil(size, 8, { origin: 'majorScale', format, destructive });
/**
 * Creates a multiple-of-4 measurement in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const minorScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) => makeScaleUtil(size, 4, { origin: 'minorScale', format, destructive });
/**
 * Creates a multiple-of-2 measurement in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const organScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) => makeScaleUtil(size, 2, { origin: 'organScale', format, destructive });
/**
 * Creates a multiple-of-1 measurement in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const molecularScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) =>
  makeScaleUtil(size, 1, {
    origin: 'molecularScale',
    format,
    destructive,
  });
/**
 * Creates a multiple-of-0.5 measurement in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const atomicScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) =>
  makeScaleUtil(size, 0.5, {
    origin: 'atomicScale',
    format,
    destructive,
  });

/**
 * Creates a multiple-of-0.25 measurement in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const traceScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) =>
  makeScaleUtil(size, 0.25, {
    origin: 'traceScale',
    format,
    destructive,
  });

export type { ScalerOptions };
export {
  atomicScale,
  majorScale,
  minorScale,
  molecularScale,
  organScale,
  traceScale,
};
