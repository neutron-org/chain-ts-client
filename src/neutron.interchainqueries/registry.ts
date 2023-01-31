import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRegisterInterchainQuery } from "./types/interchainqueries/tx";
import { MsgSubmitQueryResult } from "./types/interchainqueries/tx";
import { MsgRemoveInterchainQueryRequest } from "./types/interchainqueries/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/neutron.interchainqueries.MsgRegisterInterchainQuery", MsgRegisterInterchainQuery],
    ["/neutron.interchainqueries.MsgSubmitQueryResult", MsgSubmitQueryResult],
    ["/neutron.interchainqueries.MsgRemoveInterchainQueryRequest", MsgRemoveInterchainQueryRequest],
    
];

export { msgTypes }