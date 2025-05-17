export function BuildResponse(message,status,data){
    if(!message) return {message:'A palavra chave: message está faltando nos parametros',status:false}
    return data?
    {message:message,status:status,data:data}:
    {message:message,status:status};
}