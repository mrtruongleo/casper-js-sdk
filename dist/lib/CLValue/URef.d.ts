import { CLType, CLValue, CLValueBytesParsers, CLErrorCodes, ResultAndRemainder, ToBytesResult } from './index';
import { CLTypeTag } from './constants';
export declare enum AccessRights {
    None = 0,
    READ = 1,
    WRITE = 2,
    ADD = 4,
    READ_WRITE = 3,
    READ_ADD = 5,
    ADD_WRITE = 6,
    READ_ADD_WRITE = 7
}
export declare class CLURefType extends CLType {
    linksTo: typeof CLURef;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLURefBytesParser extends CLValueBytesParsers {
    toBytes(val: CLURef): ToBytesResult;
    fromBytesWithRemainder(bytes: Uint8Array): ResultAndRemainder<CLURef, CLErrorCodes>;
}
export declare class CLURef extends CLValue {
    data: Uint8Array;
    accessRights: AccessRights;
    /**
     * Constructs new instance of URef.
     * @param uRefAddr Bytes representing address of the URef.
     * @param accessRights Access rights flag. Use [[AccessRights.NONE]] to indicate no permissions.
     */
    constructor(v: Uint8Array, accessRights: AccessRights);
    /**
     * Parses a casper-client supported string formatted argument into a `URef`.
     */
    static fromFormattedStr(input: string): CLURef;
    toFormattedStr(): string;
    clType(): CLType;
    value(): {
        data: Uint8Array;
        accessRights: AccessRights;
    };
}
