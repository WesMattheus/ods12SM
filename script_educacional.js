$(function() {
    $('#show').on('click', function() {
        $(this).closest('.card').find('.card-reveal').slideToggle('slow');
    });

    $('.card-reveal .close').on('click', function() {
        $(this).closest('.card-reveal').slideToggle('slow');
    });
});
