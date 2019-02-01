

/**
 * Get base URL.
 * For example: I have app installed in /myapp and URL is http://localhost/myapp/page/subpage/action when I get base URL it should return http://localhost/myapp .
 * 
 * @link http://stackoverflow.com/questions/25203124/how-to-get-base-url-with-jquery-or-javascript original source from here.
 * @returns {string}
 */
function getBaseUrl() {
    //return 'http://mysafeinfo.com/api/' //ทำการเรียก Url ไปยัง Server ร้องขอไฟล์ Json
    return 'https://jsonplaceholder.typicode.com/photos' //ทำการเรียก Url ไปยัง Server ร้องขอไฟล์ Json
 }
 /**
  * Get querystring
  * Example: http://localhost?foo=lorem&bar=&baz
  * getQueryString('foo'); value will be 'lorem'.
  * getQueryString('bar'); value will be empty.
  * getQueryString('baz'); value will be empty.
  * getQueryString('xaz'); value will be null.
  * 
  * @param {string} name The name of querystring (get parameter name).
  * @param {string} url  The URL. If not specified it will detect automatically.
  * @returns {String|Null|Empty} Return querystring value.
  */
 
 function getQueryString(name, url) {
     if (!url) {
         url = window.location.href;
     }
 
     name = name.replace(/[\[\]]/g, "\\$&");
     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
             results = regex.exec(url);
     if (!results) {
         return null;
     }
     if (!results[2]) {
         return '';
     }
     return decodeURIComponent(results[2].replace(/\+/g, " "));
 }// getQueryString