/**
 * Checks if a value is not null, undefined, or an empty string.
 */
export function required(value: unknown): boolean {
    return value !== null && value !== undefined && value !== '';
  }
  
  /**
   * Validates whether a string is in valid email format.
   */
  export function email(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  
  /**
   * Checks if the string is at least the specified length.
   */
  export function minLength(value: string, length: number): boolean {
    return value.length >= length;
  }
  
  /**
   * Checks if the string is no longer than the specified length.
   */
  export function maxLength(value: string, length: number): boolean {
    return value.length <= length;
  }
  
  /**
   * Validates the string against the provided regular expression.
   */
  export function pattern(value: string, regex: RegExp): boolean {
    return regex.test(value);
  }
  
  /**
   * Checks if the value matches the value it is being compared to.
   */
  export function sameAs(value: any, compareTo: any): boolean {
    return value === compareTo;
  }
  
  // Identity Validators
  
  /**
   * Validates Indian PAN (Permanent Account Number).
   */
  export function pan(value: string): boolean {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
  }
  
  /**
   * Validates Indian Aadhaar number.
   */
  export function aadhaar(value: string): boolean {
    return /^[2-9]{1}[0-9]{11}$/.test(value);
  }
  
  /**
   * Validates an Indian Passport number.
   */
  export function passport(value: string): boolean {
    return /^[A-PR-WY][1-9]\d{6}$/.test(value);
  }
  
  /**
   * Validates an Indian Driving License number.
   */
  export function drivingLicense(value: string): boolean {
    return /^[A-Z]{2}[0-9]{2}[0-9]{11}$/.test(value);
  }
  
  /**
   * Validates a 12-digit National ID number (generic).
   */
  export function nationalId(value: string): boolean {
    return /^[0-9]{12}$/.test(value);
  }