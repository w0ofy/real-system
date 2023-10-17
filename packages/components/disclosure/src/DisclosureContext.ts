import type {
  DisclosureStorePrimitive,
  DisclosureStorePrimitiveProps,
} from '@real-system/disclosure-primitive';
import { constate } from '@real-system/state-library';

type CustomProps = { contained?: boolean };

type DisclosureStore = DisclosureStorePrimitive;
type DisclosureStoreProps = DisclosureStorePrimitiveProps & CustomProps;
type DisclosureContext = {
  store: DisclosureStore;
} & CustomProps;

const [DisclosureContextProvider, useDisclosureStoreContext] = constate(
  (props: DisclosureContext) => props
);

export type { DisclosureContext, DisclosureStore, DisclosureStoreProps };
export { DisclosureContextProvider, useDisclosureStoreContext };
