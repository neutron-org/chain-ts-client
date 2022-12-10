import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainAccount } from "./types/interchaintxs/v1/tx";
import { MsgSubmitTx } from "./types/interchaintxs/v1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchainadapter.interchaintxs.v1.MsgRegisterInterchainAccount", MsgRegisterInterchainAccount],
    ["/neutron.interchainadapter.interchaintxs.v1.MsgSubmitTx", MsgSubmitTx],
    
];

export { msgTypes }