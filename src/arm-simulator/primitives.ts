export { Uint32 }

class Uint32 {

    private static mask: number = 0xffffffff;

    private _value: number;

    constructor(newValue: number) {
        if (newValue < 0) {
            this._value = Uint32.mask + newValue + 1;
        } else if (newValue > Uint32.mask) {
            this._value = newValue % Uint32.mask;
        }
        else {
            this._value = newValue;
        }
    }

    get value(): number {
        return this._value;
    }

    // set value(newValue: number) {
    //     Uint32.assertValid(newValue);
    //     if (newValue < 0)
    //         this._value = Uint32.mask + newValue;
    //     else
    //         this._value = newValue;
    // }

    add(other: Uint32) {
        return new Uint32(this.value + other.value);
    }

    subtract(other: Uint32) {
        return new Uint32(this.value - other.value);
    }

    multiply(other: Uint32) {
        return new Uint32(this.value * other.value);
    }

    toHex() {
        return this.value.toString(16).padStart(10, "0x00000000");
    }
}