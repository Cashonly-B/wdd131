document.addEventListener("DOMContentLoaded", () => {

    function getLastModifiedDateTime() {
        var lastModified = new Date(document.lastModified);
        var formattedDate = ('0'+ (lastModified.getMonth() + 1)).slice(-2) + '/' + ('0' + lastModified.getDate()).slice(-2) + '/' + lastModified.getFullYear();
        var formattedTime = ('0'+ lastModified.getHours()).slice(-2) + ':' + ('0' + lastModified.getMinutes()).slice(-2) + ':' + ('0' + lastModified.getSeconds()).slice(-2); 
        return formattedDate + ' ' + formattedTime;
        }
        
    document.getElementById('lastmodified').textContent = getLastModifiedDateTime();
    })
    