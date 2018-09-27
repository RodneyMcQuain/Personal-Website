document.addEventListener("DOMContentLoaded", function(event) {
  let technologyDropdown = document.getElementById("technology-dropdown");

  technologyDropdown.addEventListener('click', function() {
    let rows = document.getElementsByClassName("hidden-project-row");
    let rowsVisibilityValue = rows[0].style.visibility;

    for (let i = 0; i < rows.length; i++)
      rows[i].classList.toggle("unhidden");

    if (rows[0].className == "row hidden-project-row unhidden") {
      let row2Position = document.getElementById("technology-row-2").offsetTop - 50;
      window.scrollTo(0, row2Position);
      technologyDropdown.innerHTML = '<span class="fa fa-angle-double-up"/>';
    } else {
      window.location = "#technologies";
      technologyDropdown.innerHTML = '<span class="fa fa-angle-double-down"/>';
    }
  });
});