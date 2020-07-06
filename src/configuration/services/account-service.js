 const account = {
    characterAccountUrl,
    url: {
        login: '/accounts/login',
        registration: '/accounts',
        
    }
}

function characterAccountUrl(id){
    return { character: `/accounts/${id}/character`}
}

export const accountService = {
    account
}