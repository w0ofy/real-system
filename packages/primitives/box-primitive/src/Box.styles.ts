import styled from '@real-system/styling-library';
/**
 * `Box` primitive component. Used to create all elements in Real System. Use `Box` to create custom components on top of Real System components.
 *
 * @todo Design a way to merge pseudo styles when passing them as props
 */
const StyledBox = styled('div')<any>({ boxSizing: 'border-box' });

export { StyledBox };
