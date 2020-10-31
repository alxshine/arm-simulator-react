import Uint32 from "./primitives";

export class ShiftAmount {
  private static assertCorrect(value: number) {
    if (value < 0 || value > 32) {
      throw new Error(`Invalid shift value ${value}`);
    }
  }

  private _value: number;

  constructor(newValue: number) {
    ShiftAmount.assertCorrect(newValue);
    this._value = newValue;
  }

  set value(newValue: number) {
    ShiftAmount.assertCorrect(newValue);
    this._value = newValue;
  }

  get value(): number {
    return this._value;
  }
}

export interface BarrelShifterReturn {
  result: Uint32;
  carry: boolean;
  carry_affected: boolean;
  negative: boolean;
  zero: boolean;
}

export function logical_shift_right(
  input: Uint32,
  shift_amount: ShiftAmount
): BarrelShifterReturn {
  const actual_shift_amount =
    shift_amount.value === 0 ? 32 : shift_amount.value;
  const carry = (input.value & (1 << (actual_shift_amount - 1))) !== 0;
  const carry_affected = actual_shift_amount !== 0;
  const result = input.value >> actual_shift_amount;
  const negative = (result & 0x80000000) !== 0;
  const zero = result !== 0;

  return {
    result: new Uint32(result),
    carry,
    carry_affected,
    negative,
    zero,
  };
}

export function logical_shift_left(
  input: Uint32,
  shift_amount: ShiftAmount
): BarrelShifterReturn {
  const actual_shift_amount =
    shift_amount.value === 0 ? 32 : shift_amount.value;
  const carry = (input.value & (1 << (32 - actual_shift_amount))) !== 0;
  const carry_affected = actual_shift_amount !== 0;
  const result = input.value << actual_shift_amount;
  const negative = (result & 0x80000000) !== 0;
  const zero = result !== 0;

  return {
    result: new Uint32(result),
    carry,
    carry_affected,
    negative,
    zero,
  };
}

export function arithmetic_shift_right(
  input: Uint32,
  shift_amount: ShiftAmount
): BarrelShifterReturn {
  const actual_shift_amount =
    shift_amount.value === 0 ? 32 : shift_amount.value;
  const carry = (input.value & (1 << (actual_shift_amount - 1))) !== 0;
  const carry_affected = actual_shift_amount !== 0;
  let result = input.value >> actual_shift_amount;
  if (input.value & 0x80000000) {
    const mask =
      (0xffffffff >> (32 - actual_shift_amount)) << (32 - actual_shift_amount);
    result |= mask;
  }
  const negative = (result & 0x80000000) !== 0;
  const zero = result === 0;

  return {
    result: new Uint32(result),
    carry,
    carry_affected,
    negative,
    zero,
  };
}

export function rotate_right(
  input: Uint32,
  shift_amount: ShiftAmount
): BarrelShifterReturn {
  const actual_shift_amount =
    shift_amount.value === 0 ? 32 : shift_amount.value;
  const carry = (input.value & (1 << (actual_shift_amount - 1))) !== 0;
  const carry_affected = actual_shift_amount !== 0;
  const result =
    (input.value >> actual_shift_amount) |
    (input.value << (32 - actual_shift_amount));
  const negative = (result & 0x80000000) !== 0;
  const zero = result === 0;

  return {
    result: new Uint32(result),
    carry,
    carry_affected,
    negative,
    zero,
  };
}

export enum ShiftOperation {
  LSL,
  LSR,
  ASR,
  ROR,
  bubu,
}

export interface ShiftConfiguration {
  operation: ShiftOperation;
  shift_amount: ShiftAmount;
}

export function execute_shift_config(
  input: Uint32,
  shift_config: ShiftConfiguration
): BarrelShifterReturn {
  switch (+shift_config) {
    case ShiftOperation.LSL:
      return logical_shift_left(input, shift_config.shift_amount);
    default:
      throw new Error("");
  }
}
