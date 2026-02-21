document.addEventListener('DOMContentLoaded', function () 
{
    var myCarousel = document.querySelector('#carouselExampleCaptions');
    var carousel = new bootstrap.Carousel(myCarousel, 
    {
        interval: 1000, // 1 second
        ride: 'carousel'
    });
});