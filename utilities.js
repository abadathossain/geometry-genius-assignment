// get innnput data function with validation 

function getInputValue(id) {
  const valueString = document.getElementById(id).value
  const value = parseFloat(valueString)
  if (value < 1 || isNaN(value)) {
    return alert('Please enter a number or a valid value')
  } else {
    return value
  }

}
function getTextInputValue(id) {
  const value = document.getElementById(id).innerText

  return value
}

// display data in area calculation

function displayData(element, area) {
  const container = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${element}</td>
    <td>${area} cm<sup>2</sup></td> 
    <td><button tye="button">Covert to m<sup>2</sup></button></td>
  `;
  container.appendChild(tr);
}

// shifting blog site section
document.getElementById('blog').addEventListener('click', function () {
  window.location.href = 'blog.html'
})
/* ------------------------------------------------------------------
randomly changes by onmousemove but i am unable to this so apply hover by vanila css 
-------------------------------------------------------------------- */

/* function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

document.getElementById('first-card').addEventListener('mouseover', event => {
      event.target.style.fill = randomColor();
}); */