let getBook = function() {
    $.ajax({
        url: "https://openlibrary.org/api/books",
        type: "GET",
        dataType: "json",
        data: 
        {
            "&bibkeys=ISBN:" : ($(".input"))
        },
        success: function(data)
        {
            $("#title").html(result.title);
        }
    })
}