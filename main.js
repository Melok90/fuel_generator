const inputDivPairs = [
  {
    input: document.getElementById("empty-87-reg"),
    div: document.querySelector(".amount-empty-87-reg"),
  },
  {
    input: document.getElementById("empty-87-unl"),
    div: document.querySelector(".amount-empty-87-unl"),
  },
  {
    input: document.getElementById("empty-89-mid"),
    div: document.querySelector(".amount-empty-89-mid"),
  },
  {
    input: document.getElementById("empty-89-reg"),
    div: document.querySelector(".amount-empty-89-reg"),
  },
  {
    input: document.getElementById("empty-89-plus"),
    div: document.querySelector(".amount-empty-89-plus"),
  },
  {
    input: document.getElementById("empty-91-prem"),
    div: document.querySelector(".amount-empty-91-prem"),
  },
  {
    input: document.getElementById("empty-91-supr"),
    div: document.querySelector(".amount-empty-91-supr"),
  },
  {
    input: document.getElementById("empty-gas"),
    div: document.querySelector(".amount-empty-gas"),
  },
];

const element = document.querySelector(".button_zero");
const full = document.querySelector(".button_full");
const input = document.querySelectorAll("input");
const hi_sw = document.querySelector(".button_hi-sh");
const eye_vision = document.querySelectorAll(".fa fa-eye");
const inputBox = document.querySelector(".input-wrapper");
const inputArrs = document.querySelectorAll(".input-number");
const slashOpen = Array.from(document.querySelectorAll('[id^="slash_"]'));
const eyeClose = document.querySelectorAll('[id^="eye_"]');

let savedHeights = [];
let savedValues = [];
let isHiSwOn = false;

for (let i = 0; i < inputDivPairs.length; i++) {
  const pair = inputDivPairs[i];
  pair.input.addEventListener("input", function () {
    let value = Number(this.value);
    if (isNaN(value) || value < 0 || value > 100) {
      this.value = "";
      pair.div.style.height = "";
      return;
    }

    pair.div.style.height = value + "%";
  });

  /////button all blood zero----------------------
  element.addEventListener("click", () => {
    pair.div.style.height = "";
    input.forEach((input) => (input.value = ""));
  });

  ///all blood to full------------------------------
  full.addEventListener("click", () => {
    inputDivPairs.forEach((pair) => {
      pair.div.style.height = "100%";
      pair.input.value = "100";
    });
  });

  //Hi sw///// -----------------------------------------------------------

  inputArrs.forEach(function (inputArr, index) {
    savedValues[index] = inputArr.value;
  });

  hi_sw.onclick = function () {
    isHiSwOn = !isHiSwOn;

    if (isHiSwOn) {
      savedHeights = inputDivPairs.map((pair) => pair.div.style.height);
      inputDivPairs.forEach((pair) => (pair.div.style.height = ""));
      inputArrs.forEach(function (inputArr, index) {
        savedValues[index] = inputArr.value;
        inputArr.value = 0;
      });

      inputBox.classList.toggle("none");
      eyeClose.forEach((eye) => (eye.style.display = "none"));
      slashOpen.forEach((slash) => (slash.style.display = "block"));
    } else {
      inputDivPairs.forEach(
        (pair, index) => (pair.div.style.height = savedHeights[index])
      );
      inputArrs.forEach(function (inputArr, index) {
        inputArr.value = savedValues[index];
      });
      inputBox.classList.toggle("none");
      eyeClose.forEach((eye) => (eye.style.display = "block"));
      slashOpen.forEach((slash) => (slash.style.display = "none"));
    }
  };
}

///////eye_none_input---------------------------------

const inputFields = [
  {
    eye: document.getElementById("eye_1"),
    inputArea: document.querySelector(".area_1"),
    slash: document.getElementById("slash_1"),
  },
  {
    eye: document.getElementById("eye_2"),
    inputArea: document.querySelector(".area_2"),
    slash: document.getElementById("slash_2"),
  },
  {
    eye: document.getElementById("eye_3"),
    inputArea: document.querySelector(".area_3"),
    slash: document.getElementById("slash_3"),
  },
  {
    eye: document.getElementById("eye_4"),
    inputArea: document.querySelector(".area_4"),
    slash: document.getElementById("slash_4"),
  },
  {
    eye: document.getElementById("eye_5"),
    inputArea: document.querySelector(".area_5"),
    slash: document.getElementById("slash_5"),
  },
  {
    eye: document.getElementById("eye_6"),
    inputArea: document.querySelector(".area_6"),
    slash: document.getElementById("slash_6"),
  },
  {
    eye: document.getElementById("eye_7"),
    inputArea: document.querySelector(".area_7"),
    slash: document.getElementById("slash_7"),
  },
  {
    eye: document.getElementById("eye_8"),
    inputArea: document.querySelector(".area_8"),
    slash: document.getElementById("slash_8"),
  },
];

inputFields.forEach((field) => {
  const { eye, inputArea, slash } = field;
  slash.style.display = "none";

  eye.onclick = function () {
    for (var i = 0; i < input.length; i++) {
      inputArea[i].value = "";
      let value = Number(this.value);
    }
  };

  eye.onclick = function () {
    inputDivPairs.forEach((pair) => {
      pair.div.style.height = "";
      pair.input.value = "";
    });

    inputArea.classList.add("none");
    slash.classList.remove("slash");
    eye.style.display = "none";
    slash.style.display = "block";
    slash.style.opacity = "0.5";
  };

  slash.onclick = function () {
    inputArea.classList.remove("none");
    eye.style.display = "block";
    slash.style.display = "none";
  };
});

//////////////theme////////
const paragraph_btn = document.querySelector('.page-title__button_theme');
const body = document.querySelector("body");


theme.onclick = function () {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  
  if (body.classList.contains("dark-theme")) {
    paragraph_btn.textContent = 'Light theme';
  } else {
    paragraph_btn.textContent = 'Dark theme';
  }
  
  
};
