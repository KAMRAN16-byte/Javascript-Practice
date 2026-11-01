function createResult(data,err){
    if(data)
        return createSuccess(data);
    else
        return createFailure(err);

}

function createSuccess(data){
    return {'status':'success', 'data':data};
}

function createFailure(err){
    return {'status':'failure', 'error':err};
}

module.exports = createResult