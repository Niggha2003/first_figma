function handleMuteAndUnmute() {
    $(document).ready(function(){
        $("[muted]").hide();
        $("[unmuted]").click(() => {
            $("[muted]").show();
            $("[unmuted]").hide();
        });
        $("[muted]").click(() => {
            $("[muted]").hide();
            $("[unmuted]").show();
        });
        
    });
}

function handleArrowMoveClick() {
    $(document).ready(function(){
        $("[move--up]").click(() => {
            $("[move--up]").toggleClass("active")
        });
        $("[move--down]").click(() => {
            $("[move--down]").toggleClass("active")
        });
    });
}

function handleHideCoverBanner() {
    $(document).ready(function(){
        $("[skip]").click(() => {
            const coverBanner = document.querySelector(".width__620--slider .Content__banner");
            coverBanner.style.animation = ".3s ease-out disappear";
            setTimeout(() => {
                coverBanner.style.display = "none";
            },300)
        });
    });
}

handleHideCoverBanner();
handleMuteAndUnmute();
handleArrowMoveClick();