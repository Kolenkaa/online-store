import noUiSlider from "../../lib/noUiSlider";

const sliderPriceElement = document.getElementById("slider-price");

const sliderPrice = noUiSlider.create(sliderPriceElement, {
  start: [0, 310],
  tooltips: true,
  connect: true,

  step: 1,
  range: {
    min: 0,
    max: 310,
  },
  format: {
    to: function (value) {
      return parseInt(value.toString());
    },
    from: function (value) {
      return parseInt(value.toString());
    },
  },
});

function doSomething(values: number[]) {
  console.log("change event works");
  console.log(values, "values");
  // values: Current slider values (array);
  // handle: Handle that caused the event (number);
  // unencoded: Slider values without formatting (array);
  // tap: Event was caused by the user tapping the slider (boolean);
  // positions: Left offset of the handles (array);
  // noUiSlider: slider public Api (noUiSlider);
}

sliderPrice.on("change.one", doSomething);
