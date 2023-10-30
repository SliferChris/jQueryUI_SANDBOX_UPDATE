$(document).ready(function () {
    let score = 0; // set the score

    $(".circle").draggable({
        revert: "invalid",
        helper: "clone",
        containment: "#container",
    });

    $(".zone").droppable({
        hoverClass: "drop-hover",
        over: handleOverEvent,
        out: handleOutEvent,
        drop: handleDropEvent
    });

    function handleDropEvent(event, ui) {
        let elementID = $(ui.draggable).attr('id');
        let dropzoneID = $(this).attr("data-value");

        if (dropzoneID === elementID) {
            ui.draggable.draggable({
                disabled: true
            }).css("opacity", 0.5);

            
            $(this).html('<img src="images/thumb.png">');

            // Increase the score
            score++;
            $('span').text(score);

            checkScore();
        }
    }

    function handleOverEvent(event, ui) {
        $(this).css("opacity", 0.5).text("ACCEPT");
    }

    function handleOutEvent(event, ui) {
        $(this).css("opacity", 1).text("DROPZONE");
    }

    $('span').text(score);
    checkScore();

    function checkScore() {
        if (score === 3) {
            $(".scoremessage").fadeIn();
            $(".scoremessage").text("WELL DONE - LEVEL 1 COMPLETED")
        }
    }

    // Clears the dropZones by using a button with the location.reload on it
    let btn = $("#btn_reload").on("click", function () {
        location.reload(true);
    });
});
