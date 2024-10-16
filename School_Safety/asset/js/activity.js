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


       const layout = $("#layout"); 
       const postApi = "activity.json";
   
       // Gọi hàm lấy dữ liệu ngay khi trang load
       getActivity();
   
       function getActivity() {    

           fetch(postApi)
           .then(function (res) {
                return res.json();
           })
           .then(function(data) {
                console.log(data);
                showActivity(data.activity);
           });
       }
   
       function showActivity(data) {

           layout.innerHTML = ``;
           data.forEach(cards => {
               const { company_logo, company_name, days, image, title, view_donate } = cards;
               const cardsEl = document.createElement('div');
               cardsEl.classList.add('cards');
               cardsEl.innerHTML = `
        
            <div class="card">
              <div class="bg-title">
                <img src="${image}"/>
                <div class="title">
                  ${title}
                </div>
              </div>
              <div class="company">
                <div class="table-company">
                  <div class="logo-company">
                    <img src="${company_logo}"/>
                    <div class="justiva-law">${company_name}</div>
                  </div>
                  <div class="date">Còn ${days} Ngày</div>
                </div>
              </div>
            </div>

            <div class="card-view-count">
              <div class="slot">
                <div class="view-donate">Lượt quyên góp</div>
                <div class="fw-bold number">${view_donate}</div>
              </div>
              <div class="donate-button">
                Quyên Góp
              </div>
            </div>
               `
               $(layout).append(cardsEl);
           });
       }
});