
function simulateKeyPress(character, type) {
  jQuery.event.trigger({ type : type, which : character.charCodeAt(0) });
}

function Simulate() {
    $('.simulate').css('color', 'white');
    $('.simulate').prop('disabled', true);
    $(".simulate").html('Playing !');
    $("#inp").val("");
    $("#inp").prop('disabled', true);
    setTimeout(function(){
        var value = "hello world";
        var pressDelay = 200;
        var waitDelay = 2;
        value.split("").forEach(function(elem, index){
            setTimeout(function(){
                $("#inp").val($("#inp").val()+elem);
                onKeyReleased();
            }, index * pressDelay);
            setTimeout(function(){
                setTimeout(function(){
                    $("#inp").val($("#inp").val().slice(0, -1));
                    onKeyReleased();
                }, (index * pressDelay));
            }, (value.length * pressDelay) + waitDelay * 1000);
            setTimeout(function(){
                setTimeout(function(){
                    $("#inp").blur();
                    $("#inp").prop('disabled', false);
                    $(".simulate").html('Play help ?');
                    $('.simulate').css('color', '#996515');
                    $('.simulate').prop('disabled', false);
                }, pressDelay);
            }, (value.length * 2 * pressDelay) + waitDelay * 1000);
            $("#inp").focus();
        });
    }, 50);
}
