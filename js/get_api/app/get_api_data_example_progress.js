//Get Data with Ajax and Json file 
function listItems() {
    var progress = $(".loading-progress").progressTimer({
        timeLimit: 10,
        onFinish: function () {
            //alert('completed!');
        }
    });
    $ = jQuery.noConflict();
    $('.list-item-table tbody').html('');
    $.ajax({
        url: getBaseUrl(),
        type: 'GET',
        dataType: 'json',
        beforeSend: function() {
            // setting a timeout
            $('#detail').html("กำลังบันทึกข้อมูล ...");  
        },
        success: function(response) {
            //progress.progressTimer('complete');
            $.ajax({              
                url: "system_post_api.php",
                type: 'POST',
                data: {response:response},
                success: function(data) {
                    progress.progressTimer('complete');
                    $('#detail').html(data);  
                    //$('#detail').html(data);  
                    console.log("connect to post sql.php");
                     console.log(response);                
                },
                error: function(jqXHR, status, error) {
                    progress.progressTimer('error', {
                        errorText:'ERROR!',
                        onFinish:function(){
                        }
                    });
                }
            });
           
            //delete render_html;
          
        },
        error: function(jqXHR, status, error) {
            $('#detail').html("Error");  
            progress.progressTimer('error', {
                errorText:'ERROR! กำลังติดต่อฐานข้อมูลใหม่',
                onFinish:function(){
                }
            });
            //setInterval(listItems, 2000);
        }    
    });
    
}// listItems
setInterval(listItems, 4000);

jQuery(function($) {
    listItems();
});


