document.getElementById('location').onchange = function() {
  const locationTag = this;
  const children = this;
  const n = this.selectedIndex;

  const selectedOption = children[n];

  const selectedLocation = selectedOption.innerHTML;

  console.log(this.selectedIndex);
  console.log(selectedLocation);

  document.getElementById("locationForm").submit(); 
}
