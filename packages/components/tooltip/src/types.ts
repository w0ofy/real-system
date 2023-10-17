import type { RealSystemElementProps } from '@real-system/styled-library';
import type {
  TooltipPrimitiveProps,
  TooltipStorePrimitiveProps,
} from '@real-system/tooltip-primitive';

type StateProps = Pick<
  TooltipStorePrimitiveProps,
  'open' | 'showTimeout' | 'hideTimeout' | 'skipTimeout'
>;
type TooltipProps = {
  children: string | number | React.ReactElement;
  label: string;
  disabled?: boolean;
  /**
   * Whether to show the tooltip's arrow or not
   * @default false
   */
  hideArrow?: boolean;
  /** @default 'span' */
  wrapperElement?: keyof JSX.IntrinsicElements;
  /**
   * The placement of the tooltip's popover
   * @default 'top'
   **/
  placement?: TooltipStorePrimitiveProps['placement'];
} & Pick<TooltipPrimitiveProps, 'gutter'> &
  Partial<StateProps> &
  RealSystemElementProps<'span'>;

export type { TooltipProps };
