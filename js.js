$(document).ready(function(){
    $("#my-tabs li").click(function(){
        var myId = $(this).attr("id");
        $(this).removeClass("inactive").siblings().addClass("inactive");
        $(".test-tabs div").hide();
        $("#" + myId + "-content").fadeIn("1000");
    });

    $("#date").datepicker({
        numberOfMonths:1,
        ChangeYear:true,
        showWeek:true,
        showOtherMonths:true,
        dateFormat: 'dd-mm-yy'
    });

});
$(function() {
    $( "#dialog-1" ).dialog({
        autoOpen: false,
        closeText: "hide",
        title: "My birthday is !",
        show: { effect: "blind", duration: 80 },
        buttons: {
            OK: function() {
                $(this).dialog("close");
                $("#date").val('');
            }
        }
    });
    $( "#opener" ).click(function() {
        $( "#dialog-1" ).dialog( "open" );
        
    });
});


