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
    //  Screen size check variable
  const isMobile = window.innerWidth < 768;
  const $browseItems = $(`${isMobile ? ".browseIt img.mobile" : ".browseIt img.desktop"}`);
  const $dots = $("#section-browse .dots .dot");

  let currentIndex = 0;
  const totalItems = $browseItems.length;

  // Activate next image and dots
  function showNextItem() {
    $browseItems.eq(currentIndex).removeClass("active");
    $dots.eq(currentIndex).removeClass("active");

    currentIndex = (currentIndex + 1) % totalItems;

    $browseItems.eq(currentIndex).addClass("active");
    $dots.eq(currentIndex).addClass("active");
  }

  let intervalId = setInterval(showNextItem, 3000);

  // Toggle dots on click
  $dots.on("click", function () {
    $browseItems.eq(currentIndex).removeClass("active");
    $dots.eq(currentIndex).removeClass("active");

    currentIndex = $(this).index(); 

    $browseItems.eq(currentIndex).addClass("active");
    $dots.eq(currentIndex).addClass("active");

    // Reset interval when user clicks
    clearInterval (intervalId);
    intervalId = setInterval(showNextItem, 3000);
  });
});