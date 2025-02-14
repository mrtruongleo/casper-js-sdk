import { CLType, CLValue, CLErrorCodes, ResultAndRemainder, ToBytesResult, CLValueBytesParsers } from './index';
import { CLTypeTag } from './constants';
export interface MapEntryType {
    key: CLType;
    value: CLType;
}
declare type KeyVal = CLValue;
export declare class CLMapType<K extends CLType, V extends CLType> extends CLType {
    tag: CLTypeTag;
    linksTo: typeof CLMap;
    innerKey: K;
    innerValue: V;
    constructor([keyType, valueType]: [K, V]);
    toString(): string;
    toBytes(): Uint8Array;
    toJSON(): any;
}
export declare class CLMapBytesParser extends CLValueBytesParsers {
    toBytes(value: CLMap<CLValue, CLValue>): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array, mapType: CLMapType<CLType, CLType>): ResultAndRemainder<CLMap<KeyVal, KeyVal>, CLErrorCodes>;
}
export declare class CLMap<K extends CLValue, V extends CLValue> extends CLValue {
    data: [K, V][];
    refType: [CLType, CLType];
    /**
     * Constructs a new `MapValue`.
     *
     * @param v array [ key, value ]
     */
    constructor(v: [K, V][] | [CLType, CLType]);
    clType(): CLType;
    value(): [K, V][];
    get(k: K): V | undefined;
    set(k: K, val: V): void;
    delete(k: K): void;
    size(): number;
}
export {};
