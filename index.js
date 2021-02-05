document.getElementById("scroll_arrows").addEventListener('click', collapseLogo)
document.getElementById("logo").addEventListener('click', expandLogo)

var logoCollapsed = false;
var logoWidthExpanded = document.getElementById("logo").style.width;

function collapseLogo() {
    document.getElementById("logo_disapear").style.opacity = "0";
    document.getElementById("logo_disapear").style.transitionDelay = "0s"

    document.getElementById("logo_H").style.transform = "translate(" + -452.5 + "px, " + 0.5 + "px)"

    document.getElementById("logo").style.left = 170 + "px"
    document.getElementById("logo").style.top = 50 + "px"
    document.getElementById("logo").style.width = "300px"

    document.getElementById("scroll_arrows").style.transitionDelay = ("0s")
    document.getElementById("scroll_arrows").style.transform = "translate(-50%, -500px) scale(0)"
    
    document.getElementById("social_media_wrapper").style.bottom = "50%"

    logoCollapsed = true;
}

function expandLogo() {
    document.getElementById("logo_disapear").style.opacity = "1";
    document.getElementById("logo_disapear").style.transitionDelay = "0.5s"

    document.getElementById("logo_H").style.transform = "translate( 0,0)"

    document.getElementById("logo").style.left = "50%"
    document.getElementById("logo").style.top = "50%"
    document.getElementById("logo").style.width = logoWidthExpanded

    document.getElementById("scroll_arrows").style.transitionDelay = ("0.5s")
    document.getElementById("scroll_arrows").style.transform = "translate(-50%, 0) scale(1)"

    document.getElementById("social_media_wrapper").style.bottom = "-50px"

    logoCollapsed = false;
}