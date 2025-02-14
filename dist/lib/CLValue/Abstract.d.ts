import { Result } from 'ts-results';
import { CLErrorCodes, CLTypeTag } from './constants';
export interface ResultAndRemainder<T, E> {
    result: Result<T, E>;
    remainder?: Uint8Array;
}
export interface CLJSONFormat {
    bytes: string;
    cl_type: any;
}
export declare type ToBytesResult = Result<Uint8Array, CLErrorCodes>;
export declare const resultHelper: <T, E>(arg1: Result<T, E>, arg2?: Uint8Array | undefined) => ResultAndRemainder<T, E>;
export declare abstract class CLType {
    abstract toString(): string;
    abstract toJSON(): any;
    abstract linksTo: any;
    abstract tag: CLTypeTag;
    toBytes(): Uint8Array;
}
export declare abstract class ToBytes {
    abstract toBytes(): ToBytesResult;
}
export declare abstract class CLValue {
    isCLValue: boolean;
    abstract clType(): CLType;
    abstract value(): any;
    abstract data: any;
}
export declare class CLValueParsers {
    static fromJSON(json: any): Result<CLValue, string>;
    static fromBytes(bytes: Uint8Array, type: CLType): Result<CLValue, CLErrorCodes>;
    static toJSON(value: CLValue): Result<CLJSONFormat, CLErrorCodes>;
    static toBytes(value: CLValue): ToBytesResult;
    static toBytesWithType(value: CLValue): Result<Uint8Array, CLErrorCodes>;
    static fromBytesWithType(rawBytes: Uint8Array): Result<CLValue, CLErrorCodes>;
}
export declare abstract class CLValueBytesParsers {
    fromBytes(bytes: Uint8Array, innerType: CLType): Result<CLValue, CLErrorCodes>;
    abstract fromBytesWithRemainder(bytes: Uint8Array, innerType?: CLType): ResultAndRemainder<CLValue, CLErrorCodes>;
    abstract toBytes(val: CLValue): ToBytesResult;
}
