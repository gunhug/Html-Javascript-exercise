$(document).ready(function () {
    $("#toggle-burger").on("click", function() {
        if($("header").hasClass("active")){
            $("header").removeClass("active");
            $("#toggle-burger .ic-burger").removeClass("d-none");
            $("#toggle-burger .ic-close").toggleClass("d-none");
            return;
        }
        $("header").toggleClass("active");
        $("#toggle-burger .ic-burger").toggleClass("d-none");
        $("#toggle-burger .ic-close").removeClass("d-none");
    });

    $(".main-menu a").on("click", function() {
        if($("header").hasClass("active")){
        $("header").removeClass("active");
        }
        $("#toggle-burger .ic-burger").removeClass("d-none");
        $("#toggle-burger .ic-close").toggleClass("d-none");
        
       $(".main-menu a").removeClass("active");
       $(this).addClass("active");
       });
});