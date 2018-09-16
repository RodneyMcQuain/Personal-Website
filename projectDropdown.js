window.onload = function () {
  let projectDropdown = document.getElementById("project-dropdown");

  projectDropdown.onclick = function () {
    let rows = document.getElementsByClassName("hidden-project-row");
    let rowsVisibilityValue = rows[0].style.visibility;

    for (let i = 0; i < rows.length; i++)
      rows[i].classList.toggle("unhidden");

    if (rows[0].className == "row hidden-project-row unhidden") {
      projectDropdown.innerHTML = '<span class="fa fa-angle-double-up"/>';
    } else {
      projectDropdown.innerHTML = '<span class="fa fa-angle-double-down"/>';
    }
  }
}
