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

       const $carouselItems = $("#carousel-event .carousel-images .list-image img");
       const $dots = $("#carousel-event .dots .dot");
     
       let currentIndex = 0;
       const totalItems = $carouselItems.length;
     
       // Activate next image and dots
       function showNextItem() {
         $carouselItems.eq(currentIndex).removeClass("active");
         $dots.eq(currentIndex).removeClass("active");
     
         currentIndex = (currentIndex + 1) % totalItems;
     
         $carouselItems.eq(currentIndex).addClass("active");
         $dots.eq(currentIndex).addClass("active");
     
         // Update main image
         const activeImageUrl = $carouselItems.eq(currentIndex).attr("src");
         const $mainImage = $("#carousel-event .carousel-images .main-image");
         // Change "background-image" from the src attribute of the corresponding thumbnail
         $mainImage.css("background-image", `url(${activeImageUrl})`);
       }
     
       let intervalId = setInterval(showNextItem, 3000);
     
       // Forward when clicking on image
       $carouselItems.on("click", function () {
         $carouselItems.eq(currentIndex).removeClass("active");
         $dots.eq(currentIndex).removeClass("active");
     
         currentIndex = $(this).index();
     
         $carouselItems.eq(currentIndex).addClass("active");
         $dots.eq(currentIndex).addClass("active");
     
         // Update main image
         const activeImageUrl = $carouselItems.eq(currentIndex).attr("src");
         const $mainImage = $("#carousel-event .carousel-images .main-image");
         // Change "background-image" from the src attribute of the corresponding thumbnail
         $mainImage.css("background-image", `url(${activeImageUrl})`);

         // Reset interval when user clicks
        clearInterval (intervalId);
        intervalId = setInterval(showNextItem, 3000);
       });
});