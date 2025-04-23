type ValidatorFn = (value: any, ...args: any[]) => boolean;

export function validate(
  value: any,
  validators: [ValidatorFn, ...any[]][]
): boolean {
  return validators.every(([fn, ...args]) => fn(value, ...args));
}