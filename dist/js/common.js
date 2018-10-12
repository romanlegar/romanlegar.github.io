$(function () {
    $(document).on('mousemove', function (e) {
        $('.first').css({
            left: -e.pageX / 10 + 200,
            top: -e.pageY / 10 + 200
        });
    });
});
