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
const patchScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = defaultScalerOptions
) => makeScaleUtil(size, 2, { origin: 'patchScale', format, destructive });

export type { ScalerOptions };
export { majorScale, minorScale, patchScale };
