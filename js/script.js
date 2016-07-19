$.support.transition = false
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});
$('.carousel').carousel({
  interval: 1200
})
