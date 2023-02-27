const slot = document.getElementsByClassName("slot");
const form = document.getElementsByTagName("form")[0];
const startBtn = document.getElementById("startTimer");

startBtn.addEventListener("click", start);
form.children[0].addEventListener("click", stopper0);
form.children[1].addEventListener("click", stopper1);
form.children[2].addEventListener("click", stopper2);

// スロットの停止管理
let timerId;
let stop0 = false;
let stop1 = false;
let stop2 = false;

// スロットの初期値設定
let gameSpeed = 100;
let int0 = 0, int1 = 0, int2 = 0;
slot[0].children[0].textContent = carryCheck(int0 - 1);
slot[0].children[1].textContent = carryCheck(int1 - 1);
slot[0].children[2].textContent = carryCheck(int2 - 1);
slot[1].children[0].textContent = carryCheck(int0);
slot[1].children[1].textContent = carryCheck(int1);
slot[1].children[2].textContent = carryCheck(int2);
slot[2].children[0].textContent = carryCheck(int0 + 1);
slot[2].children[1].textContent = carryCheck(int1 + 1);
slot[2].children[2].textContent = carryCheck(int2 + 1);

function carryCheck(int) {
	if (int === 10) int = 0;
	if (int < 0) int = 9;
	return int;
}

function start() {
	startBtn.disabled = true;
	form.children[0].disabled = false;
	form.children[1].disabled = false;
	form.children[2].disabled = false;
	stop0 = false, stop1 = false, stop2 = false;
	timerId = setInterval(roll, gameSpeed);
}
function roll() {
	if (!stop0) {
		int0 = carryCheck(int0 + 1);
		slot[0].children[0].textContent = carryCheck(int0 + 1);
		slot[1].children[0].textContent = int0;
		slot[2].children[0].textContent = carryCheck(int0 - 1);
	}
	if (!stop1) {
		int1 = carryCheck(int1 + 1);
		slot[0].children[1].textContent = carryCheck(int1 + 1);
		slot[1].children[1].textContent = int1;
		slot[2].children[1].textContent = carryCheck(int1 - 1);
	}
	if (!stop2) {
		int2 = carryCheck(int2 + 1);
		slot[0].children[2].textContent = carryCheck(int2 + 1);
		slot[1].children[2].textContent = int2;
		slot[2].children[2].textContent = carryCheck(int2 - 1);
	}
}
function stopper0() {
	form.children[0].disabled = true;
	stop0 = true;
	check();
}
function stopper1() {
	form.children[1].disabled = true;
	stop1 = true;
	check();
}
function stopper2() {
	form.children[2].disabled = true;
	stop2 = true;
	check();
}
function check() {
	if (stop0 && stop1 && stop2) {
		clearInterval(timerId);
		startBtn.disabled = false;
		if (int0 == int1 && int1 == int2) {
			alert("おめでとうございます！");
		} else {
			alert("残念でした");
		}
	}
}
