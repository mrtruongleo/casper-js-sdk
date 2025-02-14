import { CasperServiceByJsonRPC, GetDeployResult } from '../services';
import { DeployUtil, CLPublicKey } from './index';
import { Deploy, DeployParams, ExecutableDeployItem } from './DeployUtil';
import { AsymmetricKey, SignatureAlgorithm } from './Keys';
import { BigNumber } from '@ethersproject/bignumber';
export declare class CasperClient {
    nodeClient: CasperServiceByJsonRPC;
    constructor(nodeUrl: string);
    /**
     * Generate new key pair.
     * @param algo Currently we support Ed25519 and Secp256K1.
     */
    newKeyPair(algo: SignatureAlgorithm): AsymmetricKey;
    /**
     * Load private key from file
     *
     * @param path the path to the publicKey file
     * @param algo the signature algorithm of the file
     */
    loadPublicKeyFromFile(path: string, algo: SignatureAlgorithm): Uint8Array;
    /**
     * Load private key
     * @param path the path to the private key file
     */
    loadPrivateKeyFromFile(path: string, algo: SignatureAlgorithm): Uint8Array;
    /**
     * Load private key file to restore keyPair
     *
     * @param path The path to the private key
     * @param algo
     */
    loadKeyPairFromPrivateFile(path: string, algo: SignatureAlgorithm): AsymmetricKey;
    /**
     * Compute public key from private Key.
     * @param privateKey
     */
    privateToPublicKey(privateKey: Uint8Array, algo: SignatureAlgorithm): Uint8Array;
    /**
     * Construct a unsigned Deploy object
     *
     * @param deployParams Parameters for deploy
     * @param session
     * @param payment
     */
    makeDeploy(deployParams: DeployParams, session: ExecutableDeployItem, payment: ExecutableDeployItem): Deploy;
    /**
     * Sign the deploy with the specified signKeyPair
     * @param deploy unsigned Deploy object
     * @param signKeyPair the keypair to sign the Deploy object
     */
    signDeploy(deploy: Deploy, signKeyPair: AsymmetricKey): Deploy;
    /**
     * Send deploy to network
     * @param signedDeploy Signed deploy object
     */
    putDeploy(signedDeploy: Deploy): Promise<string>;
    /**
     * convert the deploy object to json
     * @param deploy
     */
    deployToJson(deploy: Deploy): {
        deploy: import("typedjson").JsonTypes;
    };
    /**
     * Convert the json to deploy object
     *
     * @param json
     */
    deployFromJson(json: any): import("ts-results").Result<DeployUtil.Deploy, Error>;
    /**
     * Construct the deploy for transfer purpose
     *
     * @param deployParams
     * @param session
     * @param payment
     */
    makeTransferDeploy(deployParams: DeployParams, session: ExecutableDeployItem, payment: ExecutableDeployItem): Deploy;
    /**
     * Get the balance of public key
     */
    balanceOfByPublicKey(publicKey: CLPublicKey): Promise<BigNumber>;
    /**
     * Get the balance by account hash
     */
    balanceOfByAccountHash(accountHashStr: string): Promise<BigNumber>;
    /**
     * Get deploy by hash from RPC.
     * @param deployHash
     * @returns Tuple of Deploy and raw RPC response.
     */
    getDeploy(deployHash: string): Promise<[Deploy, GetDeployResult]>;
    /**
     * Get the main purse uref for the specified publicKey
     * @param publicKey
     */
    getAccountMainPurseUref(publicKey: CLPublicKey): Promise<string | null>;
}
