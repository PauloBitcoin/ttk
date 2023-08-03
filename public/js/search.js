$('#LangInput').keyup(function () {
    var value = $(this).val().toLowerCase();
    $('#SearchLang li').each(function () {
        var lcval = $(this).text().toLowerCase();
        if (lcval.indexOf(value) > -1) {
            $(this).show();

        } else {
            $(this).hide();
        }
    });
});


