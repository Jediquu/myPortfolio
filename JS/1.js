$('.contact').on('click', () => {
    $('.forContact').toggle();
})

$('.forPic').on('click', () => {
    $('.forImg').css({ "animation": 'Scale .2s linear 0s 1' })
    $(location).attr('href', '3.html');
})