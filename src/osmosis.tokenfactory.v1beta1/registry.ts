import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgChangeAdmin } from "./types/osmosis/tokenfactory/v1beta1/tx";
import { MsgMint } from "./types/osmosis/tokenfactory/v1beta1/tx";
import { MsgBurn } from "./types/osmosis/tokenfactory/v1beta1/tx";
import { MsgCreateDenom } from "./types/osmosis/tokenfactory/v1beta1/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin],
    ["/osmosis.tokenfactory.v1beta1.MsgMint", MsgMint],
    ["/osmosis.tokenfactory.v1beta1.MsgBurn", MsgBurn],
    ["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom],
    
];

export { msgTypes }