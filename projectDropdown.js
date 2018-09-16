window.onload = function () {
  let projectDropdown = document.getElementById("project-dropdown");

  projectDropdown.onclick = function () {
    let rows = document.getElementsByClassName("hidden-project-row");
    let rowsVisibilityValue = rows[0].style.visibility;

    for (let i = 0; i < rows.length; i++)
      rows[i].classList.toggle("unhidden");

    if (rows[0].className == "row hidden-project-row unhidden") {
      var elementPosition = document.getElementById("row-2").offsetTop - 50;
      window.scrollTo(0, elementPosition);
      projectDropdown.innerHTML = '<span class="fa fa-angle-double-up"/>';
    } else {
      window.location = "#projects"
      projectDropdown.innerHTML = '<span class="fa fa-angle-double-down"/>';
    }
  }
}
