const inputDivPairs = [
  {
    input: document.getElementById("input-a-plus"),
    div: document.querySelector(".blood-amount-a-plus"),
  },
  {
    input: document.getElementById("input-a-minus"),
    div: document.querySelector(".blood-amount-a-minus"),
  },
  {
    input: document.getElementById("input-b-plus"),
    div: document.querySelector(".blood-amount-b-plus"),
  },
  {
    input: document.getElementById("input-b-minus"),
    div: document.querySelector(".blood-amount-b-minus"),
  },
  {
    input: document.getElementById("input-ab-plus"),
    div: document.querySelector(".blood-amount-ab-plus"),
  },
  {
    input: document.getElementById("input-ab-minus"),
    div: document.querySelector(".blood-amount-ab-minus"),
  },
  {
    input: document.getElementById("input-0-plus"),
    div: document.querySelector(".blood-amount-0-plus"),
  },
  {
    input: document.getElementById("input-0-minus"),
    div: document.querySelector(".blood-amount-0-minus"),
  },
];

const element = document.querySelector(".zero");
const full = document.querySelector(".full");
const input = document.querySelectorAll("input");
const hi_sw = document.querySelector(".hi_sw");
const eye_vision = document.querySelectorAll(".fa fa-eye");
const inputBox = document.querySelector(".input-box");
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
    inputArea: document.querySelector(".field-1-1"),
    slash: document.getElementById("slash_1"),
  },
  {
    eye: document.getElementById("eye_2"),
    inputArea: document.querySelector(".field-1-2"),
    slash: document.getElementById("slash_2"),
  },
  {
    eye: document.getElementById("eye_3"),
    inputArea: document.querySelector(".field-2-1"),
    slash: document.getElementById("slash_3"),
  },
  {
    eye: document.getElementById("eye_4"),
    inputArea: document.querySelector(".field-2-2"),
    slash: document.getElementById("slash_4"),
  },
  {
    eye: document.getElementById("eye_5"),
    inputArea: document.querySelector(".field-3-1"),
    slash: document.getElementById("slash_5"),
  },
  {
    eye: document.getElementById("eye_6"),
    inputArea: document.querySelector(".field-3-2"),
    slash: document.getElementById("slash_6"),
  },
  {
    eye: document.getElementById("eye_7"),
    inputArea: document.querySelector(".field-4-1"),
    slash: document.getElementById("slash_7"),
  },
  {
    eye: document.getElementById("eye_8"),
    inputArea: document.querySelector(".field-4-2"),
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
const paragraph = document.querySelector('.theme');
const body = document.querySelector("body");


theme.onclick = function () {
  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");
  
  if (body.classList.contains("dark-theme")) {
    paragraph.textContent = 'Light theme';
  } else {
    paragraph.textContent = 'Dark theme';
  }
  
  
};
