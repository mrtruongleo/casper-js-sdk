/// <reference types="node" />
import { SignKeyPair } from 'tweetnacl-ts';
import { CLPublicKey } from './CLValue';
/**
 * Supported types of Asymmetric Key algorithm
 */
export declare enum SignatureAlgorithm {
    Ed25519 = "ed25519",
    Secp256K1 = "secp256k1"
}
/**
 * Get rid of PEM frames, skips header `-----BEGIN PUBLIC KEY-----`
 * and footer `-----END PUBLIC KEY-----`
 *
 * Example PEM:
 *
 * ```
 * -----BEGIN PUBLIC KEY-----\r\n
 * MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEj1fgdbpNbt06EY/8C+wbBXq6VvG+vCVD\r\n
 * Nl74LvVAmXfpdzCWFKbdrnIlX3EFDxkd9qpk35F/kLcqV3rDn/u3dg==\r\n
 * -----END PUBLIC KEY-----\r\n
 * ```
 *
 */
export declare function readBase64WithPEM(content: string): Uint8Array;
export declare abstract class AsymmetricKey {
    readonly publicKey: CLPublicKey;
    readonly privateKey: Uint8Array;
    readonly signatureAlgorithm: SignatureAlgorithm;
    constructor(publicKey: Uint8Array, privateKey: Uint8Array, signatureAlgorithm: SignatureAlgorithm);
    /**
     * Compute a unique hash from the algorithm name(Ed25519 here) and a public key, used for accounts.
     */
    accountHash(): Uint8Array;
    /**
     * Get the account hex
     */
    accountHex(): string;
    protected toPem(tag: string, content: string): string;
    /**
     * Export the public key encoded in pem
     */
    abstract exportPublicKeyInPem(): string;
    /**
     * Expect the private key encoded in pem
     */
    abstract exportPrivateKeyInPem(): string;
    /**
     * Sign the message by using the keyPair
     * @param msg
     */
    abstract sign(msg: Uint8Array): Uint8Array;
    /**
     * Verify the signature along with the raw message
     * @param signature
     * @param msg
     */
    abstract verify(signature: Uint8Array, msg: Uint8Array): boolean;
}
export declare class Ed25519 extends AsymmetricKey {
    constructor(keyPair: SignKeyPair);
    /**
     * Generating a new Ed25519 key pair
     */
    static new(): Ed25519;
    /**
     * Generate the accountHex for the Ed25519 public key
     * @param publicKey
     */
    static accountHex(publicKey: Uint8Array): string;
    /**
     * Parse the key pair from publicKey file and privateKey file
     * @param publicKeyPath path of public key file
     * @param privateKeyPath path of private key file
     */
    static parseKeyFiles(publicKeyPath: string, privateKeyPath: string): AsymmetricKey;
    /**
     * Generate the accountHash for the Ed25519 public key
     * @param publicKey
     */
    static accountHash(publicKey: Uint8Array): Uint8Array;
    /**
     * Construct keyPair from a public key and private key
     * @param publicKey
     * @param privateKey
     */
    static parseKeyPair(publicKey: Uint8Array, privateKey: Uint8Array): AsymmetricKey;
    static parsePrivateKeyFile(path: string): Uint8Array;
    static parsePublicKeyFile(path: string): Uint8Array;
    static parsePrivateKey(bytes: Uint8Array): Uint8Array | Buffer;
    static parsePublicKey(bytes: Uint8Array): Uint8Array | Buffer;
    static readBase64WithPEM(content: string): Uint8Array;
    /**
     * Read the Base64 content of a file, get rid of PEM frames.
     *
     * @param path the path of file to read from
     */
    private static readBase64File;
    private static parseKey;
    /**
     * Export the private key encoded in pem
     */
    exportPrivateKeyInPem(): string;
    /**
     * Expect the public key encoded in pem
     */
    exportPublicKeyInPem(): string;
    /**
     * Sign the message by using the keyPair
     * @param msg
     */
    sign(msg: Uint8Array): Uint8Array;
    /**
     * Verify the signature along with the raw message
     * @param signature
     * @param msg
     */
    verify(signature: Uint8Array, msg: Uint8Array): boolean;
    /**
     * Derive public key from private key
     * @param privateKey
     */
    static privateToPublicKey(privateKey: Uint8Array): Uint8Array;
    /**
     * Restore Ed25519 keyPair from private key file
     * @param privateKeyPath
     */
    static loadKeyPairFromPrivateFile(privateKeyPath: string): AsymmetricKey;
}
export declare class Secp256K1 extends AsymmetricKey {
    constructor(publicKey: Uint8Array, privateKey: Uint8Array);
    /**
     * Generating a new Secp256K1 key pair
     */
    static new(): Secp256K1;
    /**
     * Parse the key pair from publicKey file and privateKey file
     * @param publicKeyPath path of public key file
     * @param privateKeyPath path of private key file
     */
    static parseKeyFiles(publicKeyPath: string, privateKeyPath: string): AsymmetricKey;
    /**
     * Generate the accountHash for the Secp256K1 public key
     * @param publicKey
     */
    static accountHash(publicKey: Uint8Array): Uint8Array;
    /**
     * Generate the accountHex for the Secp256K1 public key
     * @param publicKey
     */
    static accountHex(publicKey: Uint8Array): string;
    /**
     * Construct keyPair from public key and private key
     * @param publicKey
     * @param privateKey
     * @param originalFormat the format of the public/private key
     */
    static parseKeyPair(publicKey: Uint8Array, privateKey: Uint8Array, originalFormat: 'raw' | 'der'): AsymmetricKey;
    static parsePrivateKeyFile(path: string): Uint8Array;
    static parsePublicKeyFile(path: string): Uint8Array;
    static parsePrivateKey(bytes: Uint8Array, originalFormat?: 'der' | 'raw'): Buffer;
    static parsePublicKey(bytes: Uint8Array, originalFormat?: 'der' | 'raw'): Uint8Array;
    static readBase64WithPEM(content: string): Uint8Array;
    /**
     * Read the Base64 content of a file, get rid of PEM frames.
     *
     * @param path the path of file to read from
     */
    private static readBase64File;
    /**
     * Export the private key encoded in pem
     */
    exportPrivateKeyInPem(): string;
    /**
     * Expect the public key encoded in pem
     */
    exportPublicKeyInPem(): string;
    /**
     * Sign the message by using the keyPair
     * @param msg
     */
    sign(msg: Uint8Array): Uint8Array;
    /**
     * Verify the signature along with the raw message
     * @param signature
     * @param msg
     */
    verify(signature: Uint8Array, msg: Uint8Array): boolean;
    /**
     * Derive public key from private key
     * @param privateKey
     */
    static privateToPublicKey(privateKey: Uint8Array): Uint8Array;
    /**
     * Restore Secp256K1 keyPair from private key file
     * @param privateKeyPath a path to file of the private key
     */
    static loadKeyPairFromPrivateFile(privateKeyPath: string): AsymmetricKey;
}
