export default account = {
    account: {
        login: '/accounts/login',
        registration: '/accounts',
        
    }
}

export default function characterAccount(id){
    return { character: `/accounts/${id}/character`}
}