export function required(value: unknown): boolean {
    return value !== null && value !== undefined && value !== '';
  }
  
  export function email(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  
  export function minLength(value: string, length: number): boolean {
    return value.length >= length;
  }
  
  export function maxLength(value: string, length: number): boolean {
    return value.length <= length;
  }
  
  export function pattern(value: string, regex: RegExp): boolean {
    return regex.test(value);
  }
  
  export function sameAs(value: any, compareTo: any): boolean {
    return value === compareTo;
  }
  
  // Identity Validators
  export function pan(value: string): boolean {
    return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
  }
  
  export function aadhaar(value: string): boolean {
    return /^[2-9]{1}[0-9]{11}$/.test(value);
  }
  
  export function passport(value: string): boolean {
    return /^[A-PR-WY][1-9]\d{6}$/.test(value);
  }
  
  export function drivingLicense(value: string): boolean {
    return /^[A-Z]{2}[0-9]{2}[0-9]{11}$/.test(value);
  }
  
  export function nationalId(value: string): boolean {
    return /^[0-9]{12}$/.test(value); // Placeholder for generic national ID
  }
  