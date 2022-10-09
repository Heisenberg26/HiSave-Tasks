$(".checkbox").change(function()
{
    if ($('.checkbox:checked').length == $('.checkbox').length) {
        window.location.reload();
    }
});
