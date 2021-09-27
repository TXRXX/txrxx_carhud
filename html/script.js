$(function() {

    window.addEventListener('message', function(event) {
        let data = event.data;

        if (data.isInVihicle) {
            $('.container').addClass('isInVehicle');
            $('.speed').html(Math.round(data.speed) + "");
            $('#gearnum').html(Math.round(data.gear) + "");
            $('.fuel-prog').css("width", (data.fuel) + "%");
            $('.engine-prog').css("width", (data.engine) + "%");
        }
        else {
            $('.container').removeClass('isInVehicle');
        }
    });
});