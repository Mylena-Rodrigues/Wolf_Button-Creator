const controls = document.getElementById('controls');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
const values = {};

controls.addEventListener('change', handleChange);

const handleStyle = {
  element: btn,
  //   Text
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'rem';
  },
  // Size
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  //   Border
  borderColor(value) {
    this.element.style.borderColor = value;
  },
  borderStyle(value) {
    this.element.style.borderStyle = value;
  },
  borderWidth(value) {
    this.element.style.borderWidth = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  //   Background
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  values[name] = value;
  localStorage.setItem('@borderCreator/values', JSON.stringify(values));
}

function setValues() {
  const local = JSON.parse(localStorage.getItem('@borderCreator/values'));
  const keys = Object.keys(local);
  const values = Object.values(local);

  keys.forEach((key, index) => {
    handleStyle[key](values[index]);
    controls.elements[key].value = values[index];
  });
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML =
    '<p class="line-code">' +
    btn.style.cssText.split('; ').join(';</p><p class="line-code">');
}