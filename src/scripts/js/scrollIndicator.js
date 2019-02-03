document.addEventListener("DOMContentLoaded", function(event) {
    const scrollIndicator = document.getElementById("scroll-indicator");
    
    window.addEventListener("scroll", function() { 
        let scroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollPercent = (scroll / height) * 100;
        scrollIndicator.style.width = scrollPercent + "%";
    });
});