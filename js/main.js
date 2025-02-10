$(document).ready(function () {
    // Navbar toggle functionality
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // Scroll event for header styling
    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 35) {
            $('.header').css({ 'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        } else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    });

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // Owl Carousel initialization
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: { items: 1 }, 576: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Accordion functionality
    $('.accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp(500);
        $(this).next('.accordion-body').slideDown(500);
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });

    // Read More Button Functionality for About Section
    $(document).ready(function () {
        $('#readMoreBtn').click(function () {
            const moreContent = $('#moreContent');
            const buttonText = $(this).text();
    
            if (buttonText === "Read More") {
                moreContent.slideDown();
                $(this).text("Read Less");
            } else {
                moreContent.slideUp();
                $(this).text("Read More");
            }
        });
    });

    // Read More Button Functionality for Service Items
    $(document).on("click", ".read-more-btn", function () {
        const content = $(this).prev(".content");
        const paragraph = content.find("p");

        if (paragraph.css("-webkit-line-clamp") === "none") {
            // Collapse the text
            paragraph.css("-webkit-line-clamp", "3");
            $(this).text("Read More");
        } else {
            // Expand the text
            paragraph.css("-webkit-line-clamp", "none");
            $(this).text("Read Less");
        }
    });

    // Owl Carousel for Core Business Areas
    $(".core-business-carousel").owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: { items: 1 },    // 1 item on mobile
            600: { items: 2 },  // 2 items on tablets
            1000: { items: 3 }, // 3 items on small desktops
        },
       /* navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ] */
    });
});