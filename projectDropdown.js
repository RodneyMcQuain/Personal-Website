window.onload = function () {
  let projectDropdown = document.getElementById("project-dropdown");

  projectDropdown.onclick = function () {
    let row2 = document.getElementById("row-2");
    let row2DisplayValue = row2.style.display;

    if (row2DisplayValue == "none") {
      projectDropdown.innerHTML = '<span class="fa fa-angle-double-up"/>';
      row2.style.display = "block";
    } else {
      projectDropdown.innerHTML = '<span class="fa fa-angle-double-down"/>';
      row2.style.display = "none";
    }
  }
}
