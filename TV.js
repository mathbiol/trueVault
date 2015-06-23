console.log('loaded TV.js')

TV=function(){
    var apiKey = localStorage.getItem('trueVaultApiKey')
    if(!apiKey){
        console.log("if you have it: localStorage.setItem('trueVaultApiKey','XXXXXXXXXX')")
    }else{
        TV.apiKey=apiKey
        console.log('found an apiKey ...')
        TV.listAllUsers().then(function(x){        
            var un = x.users.map(function(ui){
                return ui.username
            })
            console.log('... you are connected with users '+'"'+un.join('", "')+'"')
        })
        
    }
} // ini

TV.url="https://api.truevault.com"

TV.call=function(url,type){
    if(!type){type="GET"}
    return $.ajax({
        type: type,
        url: url,
        dataType: 'json',
        headers:{"Authorization": 'Basic '+btoa(TV.apiKey+':')},// + btoa(TV.conn.apiKey)},
        error:function(err){new Error(err)}
    });
}

TV.listAllUsers=function(fun){
   return TV.call(TV.url+'/v1/users','GET',fun)
}

TV()