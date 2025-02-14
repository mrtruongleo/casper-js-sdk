import { Option } from 'ts-results';
import { CLValue, CLValueBytesParsers, CLType, CLErrorCodes, ResultAndRemainder, ToBytesResult } from './index';
import { CLTypeTag } from './constants';
export declare class CLOptionType<T extends CLType> extends CLType {
    tag: CLTypeTag;
    linksTo: typeof CLOption;
    inner: T;
    constructor(inner: T);
    toString(): string;
    toBytes(): Uint8Array;
    toJSON(): any;
}
export declare class CLOptionBytesParser extends CLValueBytesParsers {
    /**
     * Serializes the `Option` into an array of bytes.
     */
    toBytes(value: CLOption<CLValue>): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array, type: CLOptionType<CLType>): ResultAndRemainder<CLOption<CLValue>, CLErrorCodes>;
}
export declare class CLOption<T extends CLValue> extends CLValue {
    data: Option<T>;
    private innerType;
    /**
     * Constructs a new option containing the value of Some or None from ts-result.
     */
    constructor(data: Option<T>, innerType?: CLType);
    /**
     * Checks whether the `Option` contains no value.
     *
     * @returns True if the `Option` has no value.
     */
    isNone(): boolean;
    /**
     * Checks whether the `Option` contains a value.
     *
     * @returns True if the `Option` has some value.
     */
    isSome(): boolean;
    /**
     * Returns Option from ts-result based on stored value
     */
    value(): Option<T>;
    clType(): CLType;
}
