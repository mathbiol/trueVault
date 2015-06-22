console.log('loaded TV.js')

TV=function(){
    var conn = localStorage.getItem('trueVaultConnect')
    if(!conn){
        console.log("localStorage.setItem('trueVaultConnect','{\"user\":\"XXX\",\"apiKey\":\"XXXXXX\"}')")
    }else{
        this.conn=JSON.parse(conn)
        console.log(this.conn)
    }
} // ini



TV()