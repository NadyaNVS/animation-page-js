const BALLOON_Y_BOTTOM = 10;
const CLOUD_ONE_Y_BOTTOM = 40;
const CLOUD_ONE_X_LEFT = 75;

const CLOUD_TWO_Y_BOTTOM = 80;
const CLOUD_TWO_X_LEFT = 70;

const CLOUD_THREE_Y_BOTTOM = 60;
const CLOUD_THREE_X_LEFT = 0;

const CLOUD_FOUR_Y_BOTTOM = 70;
const CLOUD_FOUR_X_LEFT = 20;

const CLOUD_FIVE_Y_BOTTOM = 60;
const CLOUD_FIVE_X_LEFT = 60;

const JS_X_LEFT = 20;
const REACT_X_LEFT = 26;
const GQL_X_LEFT = 32;

const balloon = document.getElementById("air-balloon");
const cloudOne = document.getElementById("cloud-one");
const cloudTwo = document.getElementById("cloud-two");
const cloudThree = document.getElementById("cloud-three");
const cloudFour = document.getElementById("cloud-four");
const cloudFive = document.getElementById("cloud-five");
const js = document.getElementById("js");
const react = document.getElementById("react");
const gql = document.getElementById("gql");

balloon.style.bottom = BALLOON_Y_BOTTOM + "%";

cloudOne.style.bottom = CLOUD_ONE_Y_BOTTOM + "%";
cloudOne.style.left = CLOUD_ONE_X_LEFT + "%";

cloudTwo.style.bottom = CLOUD_TWO_Y_BOTTOM + "%";
cloudTwo.style.left = CLOUD_TWO_X_LEFT + "%";

cloudThree.style.bottom = CLOUD_THREE_Y_BOTTOM + "%";
cloudThree.style.left = CLOUD_THREE_X_LEFT + "%";

cloudFour.style.bottom = CLOUD_FOUR_Y_BOTTOM + "%";
cloudFour.style.left = CLOUD_FOUR_X_LEFT + "%";

cloudFive.style.bottom = CLOUD_FIVE_Y_BOTTOM + "%";
cloudFive.style.left = CLOUD_FIVE_X_LEFT + "%";

js.style.left = JS_X_LEFT + "%";
react.style.left = REACT_X_LEFT + "%";
gql.style.left = GQL_X_LEFT + "%";

function move() {
  const incrementer = window.scrollY;
  balloon.style.bottom = BALLOON_Y_BOTTOM + incrementer * 0.1 + "%";
  cloudOne.style.bottom = CLOUD_ONE_Y_BOTTOM + incrementer * 0.12 + "%";
  cloudOne.style.left = CLOUD_ONE_X_LEFT + incrementer * 0.1 + "%";

  cloudTwo.style.bottom = CLOUD_TWO_Y_BOTTOM + incrementer * 0.14 + "%";
  cloudTwo.style.left = CLOUD_TWO_X_LEFT + incrementer * 0.15 + "%";

  cloudThree.style.bottom = CLOUD_THREE_Y_BOTTOM + incrementer * 0.1 + "%";
  cloudThree.style.left = CLOUD_THREE_X_LEFT + incrementer * -0.12 + "%";

  cloudFour.style.bottom = CLOUD_FOUR_Y_BOTTOM + incrementer * 0.16 + "%";
  cloudFour.style.left = CLOUD_FOUR_X_LEFT + incrementer * -0.15 + "%";

  cloudFive.style.bottom = CLOUD_FIVE_Y_BOTTOM + incrementer * 0.16 + "%";
  cloudFive.style.left = CLOUD_FIVE_X_LEFT + incrementer * 0.15 + "%";

  js.style.left = JS_X_LEFT + incrementer * -1.3 + "%";
  react.style.left = REACT_X_LEFT + incrementer * -1 + "%";
  gql.style.left = GQL_X_LEFT + incrementer * -0.8 + "%";
}

window.addEventListener("scroll", move);
