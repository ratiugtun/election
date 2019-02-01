

// function ajaxBulkAction(thisobj) {
//     $ = jQuery.noConflict();

//     if ($('#action').val() == '') {
//         return false;
//     }

//     formData = thisobj.serialize();

//     $.ajax({
//         url: getBaseUrl()+'/php-api-test/deleteItems',
//         type: 'DELETE',
//         data: formData,
//         dataType: 'json',
//         success: function(response) {
//             // form result --------------------------------------
//             if (typeof(response) != 'undefined' && typeof(response.form_result) != 'undefined' && typeof(response.form_result_text) != 'undefined') {
//                 if (response.form_result == 'error') {
//                     alert_status = 'alert-danger';
//                 } else if (response.form_result == 'success') {
//                     alert_status = 'alert-success';
//                 } else {
//                     alert_status = 'alert-warning';
//                 }
//                 form_result_html = '<div class="alert ' + alert_status + ' alert-dismissable fade in">';
//                 form_result_html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
//                 form_result_html += '<span aria-hidden="true">&times;</span>';
//                 form_result_html += '</button>';
//                 form_result_html += response.form_result_text;
//                 form_result_html += '</div>';
//                 $('.form-result-placeholder').html(form_result_html);
//             }
//             // form result --------------------------------------

//             if (typeof(response) != 'undefined') {
//                 if (typeof(response.result) != 'undefined' && response.result === true) {
//                     // reset select box
//                     $('#action').val('');
//                     // reload items
//                     listItems();
//                 }
//             }
//         },
//         error: function(jqXHR, status, error) {
//             response = jqXHR.responseJSON;
//             // form result --------------------------------------
//             if (typeof(response) != 'undefined' && typeof(response.form_result) != 'undefined' && typeof(response.form_result_text) != 'undefined') {
//                 if (response.form_result == 'error') {
//                     alert_status = 'alert-danger';
//                 } else if (response.form_result == 'success') {
//                     alert_status = 'alert-success';
//                 } else {
//                     alert_status = 'alert-warning';
//                 }
//                 form_result_html = '<div class="alert ' + alert_status + ' alert-dismissable fade in">';
//                 form_result_html += '<button type="button" class="close" data-dismiss="alert" aria-label="Close">';
//                 form_result_html += '<span aria-hidden="true">&times;</span>';
//                 form_result_html += '</button>';
//                 form_result_html += response.form_result_text;
//                 form_result_html += '</div>';
//                 $('.form-result-placeholder').html(form_result_html);
//             }
//             // form result --------------------------------------
//         }
//     });

//     delete alert_status;
//     delete form_result_html;
//     delete formData;
//     return false;
// }// ajaxBulkAction

//Get Data with Ajax and Json file 
function listItems2() {
    var progress = $(".loading-progress2").progressTimer({
        timeLimit: 10,
        onFinish: function () {
            //alert('completed!');
        }
    });
    $ = jQuery.noConflict();

    $('.list-item-table tbody').html('');
    $.ajax({
      // url: getBaseUrl()+'data?list=englishmonarchs&format=json',
      url: 'https://jsonplaceholder.typicode.com/photos',
       /*url:'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json',*/
       
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            progress.progressTimer('complete');
            render_html = '';
            console.log(response);
            if (typeof(response) != 'undefined' && typeof(response.result) != 'undefined') {
                $.each(response, function(index, item) {
                    render_html += '<tr>';
                    //render_html += '<td><input type="checkbox" name="id[]" value="'+item.nm+'"></td>';
                    render_html += '<td>'+item.nm+'</td>';
                    //render_html += '<td><a href="edit.php?id='+item.id+'">'+item.name+'</a></td>';
                    //render_html += '<td>'+(item.file != null ? '<a href="'+getBaseUrl()+'/php-api-test/'+item.file+'" target="file">'+item.file+'</a>' : '')+'</td>';
                   // render_html += '<td>'+item.create+'</td>';
                  //  render_html += '<td>'+item.update+'</td>';
                    render_html += '</tr>';
                });
            } else { 
                // ทำการเพิ่ม Code ตรงนี้ใหม่ ซึ่ง ข้อมูลที่ดึงมาไม่มี Type
                $.each(response, function(index, item) {
                    render_html += '<tr>';
                    render_html += '<td id="positd['+item.postId+']" name="">'+item.postId+'</td>';
                    render_html += '<td id="id['+item.id+']" name="">'+item.id+'</td>';
                    render_html += '<td>'+item.name+'</td>';
                    render_html += '<td>'+item.email+'</td>';
                    render_html += '<td>'+item.body+'</td>';
                    render_html += '</tr>';
                });
               
                
                //delete render_html;
                //render_html += '<p>Error</p>'
            }

            if (typeof(render_html) != 'undefined') {
                $('.list-item-table tbody').html(render_html);
            }
            delete render_html;
        },
        error: function(jqXHR, status, error) {
            progress.progressTimer('error', {
                errorText:'ERROR!',
                onFinish:function(){
                    //alert('There was an error processing your information!');
                }
            });
            // render_html = '<tr><td colspan="6">No data.</td></tr>';
            // console.log(getBaseUrl());
            // if (typeof(render_html) != 'undefined') {
            //     $('.list-item-table tbody').html(render_html);
            // }
            // delete render_html;
        }
    });
}// listItems
 setInterval(listItems2, 3000);

jQuery(function($) {
    listItems2();
});


