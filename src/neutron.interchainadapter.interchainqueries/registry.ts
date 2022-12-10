import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSubmitQueryResult } from "./types/interchainqueries/tx";
import { MsgRemoveInterchainQueryRequest } from "./types/interchainqueries/tx";
import { MsgRegisterInterchainQuery } from "./types/interchainqueries/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchainadapter.interchainqueries.MsgSubmitQueryResult", MsgSubmitQueryResult],
    ["/neutron.interchainadapter.interchainqueries.MsgRemoveInterchainQueryRequest", MsgRemoveInterchainQueryRequest],
    ["/neutron.interchainadapter.interchainqueries.MsgRegisterInterchainQuery", MsgRegisterInterchainQuery],
    
];

export { msgTypes }