import { Uint32 } from "./primitives";

export interface BarrelShifterReturn {
  result: Uint32;
  carry: boolean;
  carry_affected: boolean;
  negative: boolean;
  zero: boolean;
}
