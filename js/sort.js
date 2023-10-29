// NOTE: values are coded into each HTML card element

// grab from document
const filterForm = document.getElementById("filterForm");
const minPriceInput = document.getElementById("minPrice");
const maxPriceInput = document.getElementById("maxPrice");
const modelYearInput = document.getElementById("yearFilter");
const manufacturerInput = document.getElementById("manufacturerFilter");
const colorInput = document.getElementById("colorFilter");

// wait for user to click filter button
document.getElementById("filterBtn").addEventListener("click", filter);
// wait for user to click reset button
document.getElementById("resetBtn").addEventListener("click", reset);

// resets filters to default values and calls filter() to show all results
function reset() {
  minPriceInput.value = "0";
  maxPriceInput.value = "1000000";
  modelYearInput.value = "allYears";
  manufacturerInput.value = "allManufacturers";
  colorInput.value = "allColors";
  filter();
}

function filter() {
  //grab input of float values (min and max prices and model years)
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);
  const modelYear = modelYearInput.value;
  const manufacturer = manufacturerInput.value;
  const color = colorInput.value;

  // select 'card' objects
  const cards = document.querySelectorAll(".card");

  // grab prices entered within the filter
  cards.forEach((card) => {
    const cardPrice = parseFloat(card.getAttribute("carPrice"));
    const cardManufacturer = card.getAttribute("carManufacturer");
    const cardColor = card.getAttribute("carColor");
    const cardYear = card.getAttribute("carYear");

    if (
      // selects cars within price range
      cardPrice >= minPrice &&
      cardPrice <= maxPrice &&
      // select specified manufacturer (or any manufacturer)
      (manufacturer === "allManufacturers" ||
        cardManufacturer === manufacturer) &&
      // select specified color (or any color)
      (color === "allColors" || cardColor === color) &&
      // select specified model year (or any year)
      (modelYear === "allYears" || cardYear === modelYear)
    ) {
      //display cards as flex
      card.style.display = "flex";
    } else {
      // omit card not matching criteria
      card.style.display = "none";
    }
  });
}
