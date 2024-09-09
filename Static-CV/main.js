// Function to toggle a specific section and hide others
function toggleSection(sectionClass) {
    var sections = document.getElementsByClassName("content-section");
    // Hide all sections
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    // Show the selected section
    var selectedSection = document.querySelector(".".concat(sectionClass));
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}
// Function to show all sections
function showAllSections() {
    var sections = document.getElementsByClassName("content-section");
    // Show all sections
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";
    }
}
