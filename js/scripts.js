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
    });
    $("#scheduleLink").click(function(){
        $("#reserveModal").modal("show");
    });
    $("#rosieTrig").click(function(){
        $("#rosieModal").modal("show");
    });
    $("#basilandcinnTrig").click(function(){
        $("#basilandcinnModal").modal("show");
    });

// Animations/Toggls

    $('#cinnamonPic').click(function() {
        if ($('#cinnamonPic').attr('src', 'img/cinnamonaccord.jpg')) {
            $('#cinnamonPic').attr('src', 'img/IMG_5935.jpeg');
        }   else {
            $('#cinnamonPic').attr('src', 'img/cinnamonaccord.jpg');
        }
    });
});

