import { _logger } from '@real-system/utils-library';

type Format = 'rem' | 'px';
type FormatScaleReturnValue<T extends Format> =
  | `-${string}${T}`
  | `${string}${T}`;

const formatScale = <S extends number = number, F extends Format = 'rem'>(
  size: S,
  format?: F,
  destructive?: boolean
): FormatScaleReturnValue<F> => {
  let prefix = '';
  if (destructive) prefix = '-';
  if (format === 'px') {
    return `${prefix}${size}px` as FormatScaleReturnValue<F>;
  }
  // divide by 10 because real system's html size is sized down to 0.625rem
  return `${prefix}${size / 10}rem` as FormatScaleReturnValue<F>;
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
  if (!Number.isInteger(size) && size % 1 > 0.5) {
    _logger.throw.type(
      `utils/${origin}`,
      `${size} is not an integer or modulus of 0.5. '${origin}' only accepts integers as an argument.`
    );
  }

  return formatScale(size * multiplier, format, destructive);
};

type ScalerOptions = {
  format?: Format;
  destructive?: boolean;
};

const DEFAULT_SCALER_OPTS: ScalerOptions = {
  format: 'rem',
  destructive: false,
};

/**
 * Creates a measurement multipled by 8 in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const majorScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = DEFAULT_SCALER_OPTS
) => makeScaleUtil(size, 8, { origin: 'majorScale', format, destructive });

/**
 * Creates a measurement multipled by 4 in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const minorScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = DEFAULT_SCALER_OPTS
) => makeScaleUtil(size, 4, { origin: 'minorScale', format, destructive });

/**
 * Creates a measurement multipled by 2 in rem (by default) or pixels. Can return non-integers via `destructive`
 */
const patchScale = (
  size: number,
  { format = 'rem', destructive = false }: ScalerOptions = DEFAULT_SCALER_OPTS
) => makeScaleUtil(size, 2, { origin: 'patchScale', format, destructive });

export type { ScalerOptions };
export { majorScale, minorScale, patchScale };
