$(document).ready(function () {
    //alert("Hello World!");
});

function moreProjectInfo(projectName, htmlFile) {

    $.get(htmlFile, function(data) {
        Swal.fire({
            title: projectName,
            html: data,
            showCloseButton: true,
            showConfirmButton: false
        });
      });

    
}