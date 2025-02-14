import { CLType, CLValue, CLByteArray, CLURef, CLAccountHash, CLErrorCodes, ResultAndRemainder, ToBytesResult, CLValueBytesParsers, CLPublicKey } from './index';
import { CLTypeTag } from './constants';
export declare class CLKeyType extends CLType {
    linksTo: typeof CLKey;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLKeyBytesParser extends CLValueBytesParsers {
    toBytes(value: CLKey): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLKey, CLErrorCodes>;
}
export declare type CLKeyParameters = CLByteArray | CLURef | CLAccountHash | CLPublicKey;
export declare class CLKey extends CLValue {
    data: CLKeyParameters;
    constructor(v: CLKeyParameters);
    clType(): CLType;
    value(): CLKeyParameters;
    isHash(): boolean;
    isURef(): boolean;
    isAccount(): boolean;
}
