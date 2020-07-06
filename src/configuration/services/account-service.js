 export const account = {
    
        login: '/accounts/login',
        registration: '/accounts',
       
};

export  function characterAccountUrl(id){
    return { character: `/accounts/${id}/character`}
};
