import { CLType, CLValue, CLValueBytesParsers, CLErrorCodes, ResultAndRemainder, ToBytesResult } from './index';
import { CLTypeTag } from './constants';
import { SignatureAlgorithm } from '../Keys';
export declare enum CLPublicKeyTag {
    ED25519 = 1,
    SECP256K1 = 2
}
export declare class CLPublicKeyType extends CLType {
    linksTo: typeof CLPublicKey;
    tag: CLTypeTag;
    toString(): string;
    toJSON(): string;
}
export declare class CLPublicKeyBytesParser extends CLValueBytesParsers {
    toBytes(value: CLPublicKey): ToBytesResult;
    fromBytesWithRemainder(rawBytes: Uint8Array): ResultAndRemainder<CLPublicKey, CLErrorCodes>;
}
export declare class CLPublicKey extends CLValue {
    data: Uint8Array;
    tag: CLPublicKeyTag;
    constructor(rawPublicKey: Uint8Array, tag: CLPublicKeyTag | SignatureAlgorithm);
    clType(): CLType;
    isEd25519(): boolean;
    isSecp256K1(): boolean;
    toHex(): string;
    toAccountHash(): Uint8Array;
    toAccountHashStr(): string;
    value(): Uint8Array;
    static fromEd25519(publicKey: Uint8Array): CLPublicKey;
    static fromSecp256K1(publicKey: Uint8Array): CLPublicKey;
    /**
     * Tries to decode PublicKey from its hex-representation.
     * The hex format should be as produced by PublicKey.toAccountHex
     * @param publicKeyHex
     */
    static fromHex(publicKeyHex: string): CLPublicKey;
}
