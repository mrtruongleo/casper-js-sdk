import { CLValue, CLType, ToBytes, CLErrorCodes, ResultAndRemainder, ToBytesResult, CLValueBytesParsers } from './index';
import { CLTypeTag } from './constants';
export declare class CLListType<T extends CLType> extends CLType {
    inner: T;
    linksTo: typeof CLList;
    tag: CLTypeTag;
    constructor(inner: T);
    toString(): string;
    toBytes(): Uint8Array;
    toJSON(): any;
}
export declare class CLListBytesParser extends CLValueBytesParsers {
    toBytes(value: CLList<CLValue & ToBytes>): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array, listType: CLListType<CLType>): ResultAndRemainder<CLList<CLValue>, CLErrorCodes>;
}
export declare class CLList<T extends CLValue> extends CLValue {
    data: Array<T>;
    vectorType: CLType;
    constructor(v: Array<T> | CLType);
    value(): Array<T>;
    clType(): CLType;
    get(index: number): T;
    set(index: number, item: T): void;
    push(item: T): void;
    remove(index: number): void;
    pop(): T | undefined;
    size(): number;
}
