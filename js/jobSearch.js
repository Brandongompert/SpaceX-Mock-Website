$(function () {
  $("#jobSearchSubmit").click(function () {
    let jobTitleValue = $("#jobTitleSearch").val().toLowerCase();
    let positionTypeValue = $("#jobType").val();
    let locationValue = $("#jobLocation").val();

    $("#page-1 #job-row").filter(function () {
      $(this).show();
    });

    //filter by search value
    if (jobTitleValue !== "") {
      $("#page-1 #job-row").filter(function () {
        $(this).toggle(
          $(this).text().toLowerCase().indexOf(jobTitleValue) > -1
        );
      });
    }
    //filter by position type
    if (positionTypeValue && positionTypeValue !== "placeholder") {
      $("#page-1 #job-row").filter(function () {
        $(this).toggle(
          $(this)
            .text()
            .toLowerCase()
            .indexOf(positionTypeValue.toLowerCase()) > -1
        );
      });
    }
    //filter by location
    if (locationValue && locationValue !== "placeholder") {
      $("#page-1 #job-row").filter(function () {
        $(this).toggle(
          $(this).text().toLowerCase().indexOf(locationValue.toLowerCase()) > -1
        );
      });
    }
  });
});
