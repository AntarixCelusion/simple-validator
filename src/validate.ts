/**
 * Type for individual validation functions.
 */
type ValidatorFn = (value: any, ...args: any[]) => boolean;

/**
 * Applies multiple validators to a given value.
 *
 * @param value - The value to validate.
 * @param validators - An array of validators with optional arguments.
 * @returns `true` if all validators pass.
 */
export function validate(
  value: any,
  validators: [ValidatorFn, ...any[]][]
): boolean {
  return validators.every(([fn, ...args]) => fn(value, ...args));
}