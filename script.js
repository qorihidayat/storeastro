$(window).scroll(function() {
  const wScroll = $(this).scrollTop();
  $('.imgSlider').css({
    'transform' : `translate(${wScroll/10}%, 0px)`
  })

  if (wScroll > 5) {
    $('nav').addClass('change');
  }else {
    $('nav').removeClass('change');
  }

  if (wScroll > 300) {
    $('#favoritePoke .col-md-4').removeClass('d-none');

  }
})

$('.page-scroll').on('click', function(e) {
  const tujuan = $(this).attr('href');
  const elementTujuan = $(tujuan);
  $('html').animate({
    scrollTop : elementTujuan.offset().top - 70
  }, 1250)

  e.preventDefault();
})













// -----------------------------AJAX---------------

// $.ajax({
//   url : `https://acnhapi.com/v1/villagers`,
//   dataType : 'json',
//   type : 'GET',
//   success : function(ac) {
//     let isiSlider = '';
//     isiSlider += jumboSlide(ac);
//     $('.isiSlider').html(isiSlider);
//   }
// })


function jumboSlide(ac) {
  return `<div class="carousel-item active">
      <div class="row mt-5">
        <div class="col-md-1"></div>
        <div class="col-md-5 isiSlider">
        <img src="${ac.cat20.icon_uri}" class="d-block imgSlider" alt="..." width="350">
        </div>
        <div class="col-md-6 text-white mt-5">
          <h4>#1 TOP SCARIEST GHOST</h4>
          <h1>UOOO</h1>
          <h1>TRICK OR</h1>
          <h1>TREAT</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem optio tempore possimus, debitis laudantium ad expedita culpa odio voluptas eligendi distinctio amet eveniet, corrupti sunt ab aliquid maiores quasi non.</p>
          <div class="row">
            <div class="col-md-6">
              <a href="#" class="btn btn-success">Book Now</a>
            </div>
            <div class="col-md-6">
              <a href="#" class="btn text-white">Track Record -></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row mt-5">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <img src="${ac.cat19.icon_uri}" class="d-block" alt="..." width="350">
        </div>
        <div class="col-md-6 mt-5 text-white">
          <h4>#2 TOP BEST POKECROT</h4>
          <h1>BRING BACK</h1>
          <h1>MY COTTON</h1>
          <h1>CANDY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maiores amet ratione necessitatibus, eum illo culpa tempora quis vero repellat odit inventore qui hic blanditiis rerum reiciendis explicabo, eos deleniti.</p>
          <div class="row">
            <div class="col-md-6">
              <a href="#" class="btn btn-success">Book Now</a>
            </div>
            <div class="col-md-6">
              <a href="#" class="btn text-white">Track Record -></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row mt-5">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <img src="${ac.cat21.icon_uri}" class="d-block" alt="..." width="350">
        </div>
        <div class="col-md-6 mt-5 text-white">
          <h4>#3 TOP SCARIEST GHOST</h4>
          <h1>RESPOWN</h1>
          <h1>THE SPOOKY</h1>
          <h1>SKULL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia maiores amet ratione necessitatibus, eum illo culpa tempora quis vero repellat odit inventore qui hic blanditiis rerum reiciendis explicabo, eos deleniti.</p>
          <div class="row">
            <div class="col-md-6">
              <a href="#" class="btn btn-success">Book Now</a>
            </div>
            <div class="col-md-6">
              <a href="#" class="btn text-white">Track Record -></a>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}
