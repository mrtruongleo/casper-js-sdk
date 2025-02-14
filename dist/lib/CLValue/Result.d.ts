import { Result } from 'ts-results';
import { CLValue, CLType, CLErrorCodes, ResultAndRemainder, ToBytesResult, CLValueBytesParsers } from './index';
import { CLTypeTag } from './constants';
export declare class CLResultType<T extends CLType, E extends CLType> extends CLType {
    linksTo: typeof CLResult;
    tag: CLTypeTag;
    innerOk: T;
    innerErr: E;
    constructor({ ok, err }: {
        ok: T;
        err: E;
    });
    toString(): string;
    toBytes(): Uint8Array;
    toJSON(): any;
}
export declare class CLResultBytesParser extends CLValueBytesParsers {
    toBytes(value: CLResult<CLType, CLType>): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array, type: CLResultType<CLType, CLType>): ResultAndRemainder<CLResult<CLType, CLType>, CLErrorCodes>;
}
/**
 * Class representing a result of an operation that might have failed. Can contain either a value
 * resulting from a successful completion of a calculation, or an error. Similar to `Result` in Rust
 * or `Either` in Haskell.
 */
export declare class CLResult<T extends CLType, E extends CLType> extends CLValue {
    data: Result<CLValue, CLValue>;
    innerOk: T;
    innerErr: E;
    constructor(data: Result<CLValue, CLValue>, { ok, err }: {
        ok: T;
        err: E;
    });
    /**
     * Returns Result from ts-result based on stored value
     */
    value(): Result<CLValue, CLValue>;
    /**
     * Checks if stored value is error
     */
    isError(): boolean;
    /**
     * Checks if stored value is valid
     */
    isOk(): boolean;
    clType(): CLType;
}
