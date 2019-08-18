// Section Nav Accordion 

$(function(){
$(".nav-slide ul li").each(function(index, value){
    $(value).click(function(){
        let panel = this.nextElementSibling;
        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    })
})

$(".menu-icon").click(function(){
    $(".nav-slide").css("width","350px");
})
$(".nav-times").click(function(){
    $(".nav-slide").css("width","0");
})
})



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

$('.slide3').owlCarousel({
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
// Section Our Staff
$('#our-staff-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items:3,
    transitionStyle : "fade",
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
})

// Section Publications Carousel
$('#publications-owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items:3,
    transitionStyle : "fade",
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:4
        }
    }
})

// Section Colleges Carousel
$('#carousel-colleges').owlCarousel({
    loop: true,
    margin: 80,
    nav: true,
    navSpeed: 700,
    smartSpeed: 1500,
    autoplay: true,
    autoplayTimeout: 5000,
    transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },

        576: {
            items: 2
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        }
    }
})