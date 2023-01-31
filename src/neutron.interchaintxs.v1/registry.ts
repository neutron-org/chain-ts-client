import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount } from "./types/interchaintxs/v1/tx";
import { MsgSubmitTx } from "./types/interchaintxs/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchaintxs.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount],
    ["/neutron.interchaintxs.v1.MsgSubmitTx", MsgSubmitTx],
    
];

export { msgTypes }