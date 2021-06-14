const customSlider = document.querySelector('.custom-slider')
const customSliderInput = customSlider.querySelector('input')

function updateSliderProgress() {
  const multipler = 100 / customSliderInput.max
  customSlider.style.setProperty('--progress-width', +customSliderInput.value * multipler + '%')
}

document.addEventListener('DOMContentLoaded', updateSliderProgress)
customSliderInput.addEventListener('input', updateSliderProgress)
