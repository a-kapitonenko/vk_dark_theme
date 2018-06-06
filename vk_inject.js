window.onload = function() {
    var oldURL = "";
    var currentURL = window.location.href;
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('dark');
    function checkURLchange(currentURL){
        if(currentURL != oldURL){
            body.classList.add('dark');
            oldURL = currentURL;
        }

        oldURL = window.location.href;
        setInterval(function() {
            checkURLchange(window.location.href);
        }, 1000);
    }
    checkURLchange(currentURL);
}