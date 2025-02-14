import { CLType, CLValue, CLValueBytesParsers, ResultAndRemainder, ToBytesResult } from './Abstract';
import { CLErrorCodes } from './constants';
import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { CLTypeTag } from './constants';
declare abstract class NumericBytesParser extends CLValueBytesParsers {
    toBytes(value: Numeric): ToBytesResult;
}
declare abstract class Numeric extends CLValue {
    data: BigNumber;
    originalBytes?: Uint8Array;
    bitSize: number;
    signed: boolean;
    constructor(bitSize: number, isSigned: boolean, value: BigNumberish, originalBytes?: Uint8Array);
    value(): BigNumber;
}
export declare class CLI32Type extends CLType {
    linksTo: typeof CLI32;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLI32BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLI32, CLErrorCodes>;
}
export declare class CLI32 extends Numeric {
    constructor(num: BigNumberish);
    clType(): CLType;
}
export declare class CLI64Type extends CLType {
    linksTo: typeof CLI64;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLI64BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLI64, CLErrorCodes>;
}
export declare class CLI64 extends Numeric {
    constructor(num: BigNumberish);
    clType(): CLType;
}
export declare class CLU8Type extends CLType {
    linksTo: typeof CLU8;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLU8BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLU8, CLErrorCodes>;
}
export declare class CLU8 extends Numeric {
    constructor(num: BigNumberish);
    clType(): CLType;
}
export declare class CLU32Type extends CLType {
    linksTo: typeof CLU32;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLU32BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLU32, CLErrorCodes>;
}
export declare class CLU32 extends Numeric {
    constructor(num: BigNumberish);
    clType(): CLType;
}
export declare class CLU64Type extends CLType {
    linksTo: typeof CLU64;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLU64BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLU64, CLErrorCodes>;
}
export declare class CLU64 extends Numeric {
    constructor(num: BigNumberish);
    clType(): CLType;
}
export declare class CLU128Type extends CLType {
    linksTo: typeof CLU128;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLU128BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLU128, CLErrorCodes>;
}
export declare class CLU128 extends Numeric {
    constructor(num: BigNumberish, originalBytes?: Uint8Array);
    clType(): CLType;
}
export declare class CLU256Type extends CLType {
    linksTo: typeof CLU256;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLU256BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLU256, CLErrorCodes>;
}
export declare class CLU256 extends Numeric {
    constructor(num: BigNumberish, originalBytes?: Uint8Array);
    clType(): CLType;
}
export declare class CLU512Type extends CLType {
    linksTo: typeof CLU512;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLU512BytesParser extends NumericBytesParser {
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLU512, CLErrorCodes>;
}
export declare class CLU512 extends Numeric {
    constructor(num: BigNumberish, originalBytes?: Uint8Array);
    clType(): CLType;
}
export {};
