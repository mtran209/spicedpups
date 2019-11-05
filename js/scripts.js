function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

$(function() {
 // Modal Triggering   
    
    $("#reserveButton").click(function(){
        $("#reserveModal").modal("show");
        animateCSS('#reserveModal', 'bounceInDown');
    });
    $("#scheduleLink").click(function(){
        $("#reserveModal").modal("show");
        animateCSS('#reserveModal', 'bounceInDown');
    });
    $("#rosieTrig").click(function(){
        $("#rosieModal").modal("show");
        animateCSS('#rosieModal', 'bounceInLeft');
    });
    $("#basilandcinnTrig").click(function(){
        $("#basilandcinnModal").modal("show");
        animateCSS('#basilandcinnModal', 'bounceInRight');
    });
    $("#babygirl").click(function(){
        animateCSS('body', 'hinge');
    });
    $("#littleone").click(function(){
        animateCSS('body', 'flip');
    });
    $("#missthang").click(function(){
        animateCSS('body', 'jackInTheBox');
    });
    $("#welcomeText").click(function(){
        animateCSS('#welcomeText', 'hinge');
    });
    $("#implode").click(function(){
        animateCSS('#implode', 'hinge');
        animateCSS('#welcomeText', 'flip');
        animateCSS('#rosieTrig', 'hinge');
        animateCSS('#basilandcinnTrig', 'hinge');
        animateCSS('#welcomeHeader', 'flip');
        animateCSS('#reserveButton', 'hinge');
    });

// Animations/Toggles

    $('#cinnamonPic').click(function() {
        if ($('#cinnamonPic').attr('src') === 'img/cinnamonaccord.jpg') {
            $('#cinnamonPic').attr('src', 'img/IMG_5935.jpeg');
        }   else {
            $('#cinnamonPic').attr('src', 'img/cinnamonaccord.jpg');
        }
    });
    $('#meetText').click(function() {
        animateCSS('#meetText','shake');
    });
    $('#cinnamonText').click(function() {
        animateCSS('#cinnamonText','shake');
    });
    $('#basilText').click(function() {
        animateCSS('#basilText','shake');
    });
    $('#rosemaryText').click(function() {
        animateCSS('#rosemaryText','shake');
    });
    $('#cinnamonPic').click(function() {
        animateCSS('#cinnamonPic','shake');
    });
    $('#basilPic').click(function() {
        animateCSS('#basilPic','shake');
    });
    $('#rosemaryPic').click(function() {
        animateCSS('#rosemaryPic','shake');
    });
});

