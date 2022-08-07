import type {
  DisclosureStatePrimitive,
  DisclosureStatePrimitiveProps,
} from '@real-system/disclosure-primitive';
import { constate } from '@real-system/state-library';

type CustomProps = { contained?: boolean };

type DisclosureState = DisclosureStatePrimitive;
type DisclosureStateProps = DisclosureStatePrimitiveProps & CustomProps;
type DisclosureContext = {
  state: DisclosureState;
} & CustomProps;

const [DisclosureContextProvider, useDisclosureStateContext] = constate(
  (props: DisclosureContext) => props
);

export type { DisclosureContext, DisclosureState, DisclosureStateProps };
export { DisclosureContextProvider, useDisclosureStateContext };
