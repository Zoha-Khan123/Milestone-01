// Function to toggle a specific section and hide others
function toggleSection(sectionClass: string): void {
  const sections = document.getElementsByClassName(
    "content-section"
  ) as HTMLCollectionOf<HTMLElement>;

  // Hide all sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  // Show the selected section
  const selectedSection = document.querySelector(
    `.${sectionClass}`
  ) as HTMLElement;
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}

// Function to show all sections
function showAllSections(): void {
  const sections = document.getElementsByClassName(
    "content-section"
  ) as HTMLCollectionOf<HTMLElement>;

  // Show all sections
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "block";
  }
}
