$('.nav-link').click(
    function (e) {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    }
);

$('#tab-instrction').click (
    function (e) {
        $("#body-placeholder").load("instructions.html");
    }
)

$('#tab-home').click (
    function (e) {
        $("#body-placeholder").load("home.html");
    }
)