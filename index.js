const executeAjax = async function(url, data, method){
    return new Promise((resolve, reject) => {
        $.ajax({
            method: method,
            dataType: 'json',
            data: data,
            url: url,
            success: function(response){
                resolve(response);
            },
            error: function(response){
                reject(new Error(response.responseJSON.message));
            }
        });
    });
}

$(document).ready(function(){
    // Get events every 5 seconds
    setInterval(async function(){
        try{
            let url = window.location.origin+'/events.php';
            let response = await executeAjax(url, null, 'get');

            if(response.data.length > 0){
                response.data.forEach(function(event){
                    toastr.info('<pre>'+JSON.stringify(event, undefined, 4)+'</pre>', '', {
                        "timeOut": "3000",
                    });
                })
            }
        } catch(error){
            console.log(error.message);
        }
    }, 5000);
});