$('.slide').owlCarousel({
    loop: true,
    dots: false,
    // margin: 10,
    nav: false,
    navSpeed: 800,
    autoplay: true,
     transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }

})

$('.slide2').owlCarousel({
    loop: true,
    dots: false,
    margin: 10,
    nav: false,
    navSpeed: 800,
    autoplay: true,
     transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 3
        }
    }

}) 
let acc = document.getElementsByClassName("btn-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    $(this).siblings('.color-change').removeClass('color-change');
    this.classList.toggle("color-change");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
        $(".btn-accordion").each(function (ind, val) {
            val.nextElementSibling.style.display = "none";
        })  
      panel.style.display = "block";
    }
  });
}
