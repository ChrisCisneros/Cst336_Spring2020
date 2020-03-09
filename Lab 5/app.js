let getImages = function () {
    
    $.ajax ({
        url:"https://pixabay.com/api/",
        type: "GET",
        dataType: "json",
        data: {
            "key": "15533843-2c41bd4379d9eedaf9beef9d7",
            "q":  $("#keyword").val(),
            "orientation": $("#orientation").val(),
            "image_type": $("")
        },
        success: function(data) {
         $("#Img1").html("<img src=" + results.id + ">")
            
        }
    })
    
}