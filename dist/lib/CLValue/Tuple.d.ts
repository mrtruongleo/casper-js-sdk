import { CLType, CLValue, CLValueBytesParsers, ResultAndRemainder, ToBytesResult, CLErrorCodes } from './index';
import { CLTypeTag } from './constants';
declare type TupleTypes = typeof CLTuple1 | typeof CLTuple2 | typeof CLTuple3;
export declare abstract class CLTupleType extends CLType {
    tag: CLTypeTag;
    linksTo: TupleTypes;
    inner: Array<CLType>;
    constructor(inner: Array<CLType>, linksTo: TupleTypes, tag: CLTypeTag);
    toString(): string;
    toJSON(): any;
    toBytes(): any;
}
export declare class CLTupleBytesParser extends CLValueBytesParsers {
    toBytes(value: CLTuple): ToBytesResult;
    fromBytesWithRemainder(rawBytes: Uint8Array, type: CLTuple1Type | CLTuple2Type | CLTuple3Type): ResultAndRemainder<CLTuple, CLErrorCodes>;
}
declare abstract class CLTuple extends CLValue {
    data: Array<CLValue>;
    tupleSize: number;
    constructor(size: number, v: Array<CLValue>);
    get(index: number): CLValue;
    set(index: number, item: CLValue): void;
    push(item: CLValue): void;
    value(): Array<CLValue>;
}
export declare class CLTuple1Type extends CLTupleType {
    constructor(inner: Array<CLType>);
}
export declare class CLTuple1 extends CLTuple {
    constructor(value: Array<CLValue>);
    clType(): CLType;
}
export declare class CLTuple2Type extends CLTupleType {
    constructor(inner: Array<CLType>);
}
export declare class CLTuple2 extends CLTuple {
    constructor(value: Array<CLValue>);
    clType(): CLType;
}
export declare class CLTuple3Type extends CLTupleType {
    constructor(inner: Array<CLType>);
}
export declare class CLTuple3 extends CLTuple {
    constructor(value: Array<CLValue>);
    clType(): CLType;
}
export {};
