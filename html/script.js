$(function() {

    window.addEventListener('message', function(event) {

        if (event.data.isInVehicle) {
            $('body').fadeIn();
            $(".container").fadeIn();
            $(".speed").html(Math.round(event.data.speed) + "");
            $('#gearnum').html(Math.round(event.data.gear) + "");
            $('.fuel-prog').css("width", (event.data.fuel) + "%");
            $('.engine-prog').css("width", (event.data.engine)/10 + "%");
            //$('.rpm').css("width", (event.data.speed/event.data.gear)*2 + "%");
        }
        else {
            $('body').fadeOut();
            
        }
    })
})