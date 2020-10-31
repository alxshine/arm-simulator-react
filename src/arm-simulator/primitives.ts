export default class Uint32 {
  private static mask = 0xffffffff;

  private internalValue: number;

  constructor(newValue: number) {
    if (newValue < 0) {
      this.internalValue = Uint32.mask + newValue + 1;
    } else if (newValue > Uint32.mask) {
      this.internalValue = newValue % Uint32.mask;
    } else {
      this.internalValue = newValue;
    }
  }

  get value(): number {
    return this.internalValue;
  }

  // set value(newValue: number) {
  //     Uint32.assertValid(newValue);
  //     if (newValue < 0)
  //         this._value = Uint32.mask + newValue;
  //     else
  //         this._value = newValue;
  // }

  add(other: Uint32): Uint32 {
    return new Uint32(this.value + other.value);
  }

  subtract(other: Uint32): Uint32 {
    return new Uint32(this.value - other.value);
  }

  multiply(other: Uint32): Uint32 {
    return new Uint32(this.value * other.value);
  }

  toHex(): string {
    return this.value.toString(16).padStart(10, '0x00000000');
  }
}
