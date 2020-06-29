/* An old script I wrote back in 2012 - I'll 'improve' it later. */

function myYearAndDate() {

    var d = new Date();
    var year = d.getFullYear();
        
    /* Write everything out */
    document.write("<div style='footertxt'>");
    document.write("Write a &copy;" + year + " statement that never goes out of date.<br>");
    document.write("</div>");
    
    }