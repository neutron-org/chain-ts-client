import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRemoveInterchainQueryRequest } from "./types/interchainqueries/tx";
import { MsgRegisterInterchainQuery } from "./types/interchainqueries/tx";
import { MsgSubmitQueryResult } from "./types/interchainqueries/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchainqueries.MsgRemoveInterchainQueryRequest", MsgRemoveInterchainQueryRequest],
    ["/neutron.interchainqueries.MsgRegisterInterchainQuery", MsgRegisterInterchainQuery],
    ["/neutron.interchainqueries.MsgSubmitQueryResult", MsgSubmitQueryResult],
    
];

export { msgTypes }