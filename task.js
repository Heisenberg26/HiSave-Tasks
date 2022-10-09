
$('document').onClick(function() {
    if ($('input:checkbox', this).length == $('input:checked', this).length ) {

        window.location.reload();
    }
});