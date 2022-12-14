let w = 1400;
let h = 700;

let weekDays = [null, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let startDay = 360; // = 6 * 60
let endDay = 18*60; // = 22 * 60
let weekShown = 1;

let colors = [[0, 204, 153], [51, 204, 51], [0, 153, 255], [102, 102, 255], [255, 102, 255], [255, 102, 153], [255, 102, 0], [255, 204, 0], [230, 0, 0]];

let timetable_raw = [
    {
      "Day": 2,
      "Time": "06:45-10:05",
      "Weeks": "1-10,14-15,18-21",
      "Room": "B1-303",
      "Class": 135343
    },
    {
      "Day": 2,
      "Time": "06:45-11:15",
      "Weeks": "12",
      "Room": "KTX-B7",
      "Class": 138993
    },
    {
      "Day": 2,
      "Time": "06:45-11:15",
      "Weeks": "13",
      "Room": "KTX-B7",
      "Class": 138993
    },
    {
      "Day": 2,
      "Time": "12:30-15:50",
      "Weeks": "1-8",
      "Room": "D6-205",
      "Class": 136498
    },
    {
      "Day": 2,
      "Time": "13:15-15:50",
      "Weeks": "9,10,14-15,18-21",
      "Room": "D6-205",
      "Class": 136500
    },
    {
      "Day": 2,
      "Time": "13:15-16:45",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 2,
      "Time": "13:15-16:45",
      "Weeks": "13",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 3,
      "Time": "06:45-11:15",
      "Weeks": "13",
      "Room": "SanB7-2",
      "Class": 138995
    },
    {
      "Day": 3,
      "Time": "06:45-11:15",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 3,
      "Time": "12:30-15:50",
      "Weeks": "1-10,14-15,18-21",
      "Room": "D8-302",
      "Class": 136496
    },
    {
      "Day": 3,
      "Time": "13:15-16:45",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 3,
      "Time": "13:15-16:45",
      "Weeks": "13",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 4,
      "Time": "06:45-07:45",
      "Weeks": "1-10,14-15,18-21",
      "Room": "TC-412",
      "Class": 726017
    },
    {
      "Day": 4,
      "Time": "06:45-11:15",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 4,
      "Time": "06:45-11:15",
      "Weeks": "13",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 4,
      "Time": "12:30-15:50",
      "Weeks": "1-10,14-15,18-21",
      "Room": "D8-302",
      "Class": 136495
    },
    {
      "Day": 4,
      "Time": "13:15-16:45",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 4,
      "Time": "13:15-16:45",
      "Weeks": "13",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 5,
      "Time": "06:45-11:15",
      "Weeks": "12",
      "Room": "B6b-101",
      "Class": 138993
    },
    {
      "Day": 5,
      "Time": "06:45-11:15",
      "Weeks": "13",
      "Room": "B6b-101",
      "Class": 138993
    },
    {
      "Day": 5,
      "Time": "09:20-11:45",
      "Weeks": "1-8",
      "Room": "D6-205",
      "Class": 136498
    },
    {
      "Day": 5,
      "Time": "09:20-11:45",
      "Weeks": "9,10,14-15,18-21",
      "Room": "D6-205",
      "Class": 136500
    },
    {
      "Day": 5,
      "Time": "13:15-16:45",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 5,
      "Time": "13:15-16:45",
      "Weeks": "13",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 6,
      "Time": "06:45-09:10",
      "Weeks": "1-8",
      "Room": "D6-205",
      "Class": 136498
    },
    {
      "Day": 6,
      "Time": "06:45-11:15",
      "Weeks": "12",
      "Room": "SanB7-2",
      "Class": 138995
    },
    {
      "Day": 6,
      "Time": "06:45-11:15",
      "Weeks": "13",
      "Room": "SanB7-2",
      "Class": 138995
    },
    {
      "Day": 6,
      "Time": "12:30-14:00",
      "Weeks": "1-10, 14-15, 18-21",
      "Room": "D5-204",
      "Class": 135437
    },
    {
      "Day": 6,
      "Time": "13:15-16:45",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 6,
      "Time": "13:15-16:45",
      "Weeks": "13",
      "Room": "SanB13-4",
      "Class": 138997
    },
    {
      "Day": 7,
      "Time": "06:45-11:15",
      "Weeks": "12",
      "Room": "SanB13-4",
      "Class": 138997
    }
  ];
let lopDangKi_raw = [
    {
      "M?? l???p": 136498,
      "M?? l???p k??m": 136498,
      "T??n l???p": "Ti???ng Ph??p VP 1",
      "M?? h???c ph???n": "FL1601",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 0
    },
    {
      "M?? l???p": 136500,
      "M?? l???p k??m": 136500,
      "T??n l???p": "Ti???ng Ph??p VP 2",
      "M?? h???c ph???n": "FL1602",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 0
    },
    {
      "M?? l???p": 135437,
      "M?? l???p k??m": 135437,
      "T??n l???p": "Nh???p m??n CNTT v?? TT",
      "M?? h???c ph???n": "IT2110",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 2
    },
    {
      "M?? l???p": 135343,
      "M?? l???p k??m": 135343,
      "T??n l???p": "Ki???n th???c m??y t??nh",
      "M?? h???c ph???n": "IT2120",
      "Lo???i l???p": "BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 2
    },
    {
      "M?? l???p": 136496,
      "M?? l???p k??m": 136496,
      "T??n l???p": "Gi???i t??ch I",
      "M?? h???c ph???n": "MI1114",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 3
    },
    {
      "M?? l???p": 136495,
      "M?? l???p k??m": 136495,
      "T??n l???p": "?????i s??? tuy???n t??nh",
      "M?? h???c ph???n": "MI1144",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 3
    },
    {
      "M?? l???p": 138995,
      "M?? l???p k??m": 138993,
      "T??n l???p": "Qu??n s??? chung",
      "M?? h???c ph???n": "MIL1230",
      "Lo???i l???p": "BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 0
    },
    {
      "M?? l???p": 138997,
      "M?? l???p k??m": 138997,
      "T??n l???p": "K??? thu???t chi???n ?????u b??? binh v?? chi???n thu???t",
      "M?? h???c ph???n": "MIL1240",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 0
    },
    {
      "M?? l???p": 726017,
      "M?? l???p k??m": 726017,
      "T??n l???p": "L?? lu???n TDTT",
      "M?? h???c ph???n": "PE1014",
      "Lo???i l???p": "LT+BT",
      "Tr???ng th??i l???p": "Ho??n th??nh ????ng k??",
      "Y??u c???u": " ",
      "Tr???ng th??i ????ng k??": "Th??nh c??ng",
      "Lo???i ????ng k??": "B???t bu???c",
      "T??n ch???": 0
    }
  ];

let weekNum = 21;
let selectDOM;

function setup() {
	createCanvas(w, h);

	selectDOM = createSelect();
	selectDOM.position(w + 10, 10);
  	for (let i = 0; i < weekNum; i++) {
  		selectDOM.option("tu???n " + (i + 1));
  	}
  	selectDOM.selected("tu???n 1");
  	//selectDOM.changed(onchangeSelEvent);

  	for (let i = 0; i < timetable_raw.length; i++) {
  		rerenderWeek(timetable_raw[i]);
  		rerenderTime(timetable_raw[i]);
  	}

  	assignColor();
}

function onchangeSelEvent() {
	let weekChosen = selectDOM.value();
	weekShown = parseInt(weekChosen[weekChosen.length - 1]);
}

function draw() {
	background(225);
	drawUI();

	drawClass(parseInt(selectDOM.value().slice(5)));





}

function drawClass(week) {
	let cellWidth = (w - 50) / 7;
	for (let i = 0; i < timetable_raw.length; i++) {

		if (classIsInThisWeek(timetable_raw[i], week)) {
			let className = getClassName(timetable_raw[i]);
			let colorAssigned = getColorAssigned(timetable_raw[i]);
			let timeName = timetable_raw[i]["Time"];
			let roomName = timetable_raw[i]["Room"];
			let classCode = timetable_raw[i]["Class"];
			let startPoint = map(timetable_raw[i]["startTime"], startDay, endDay, 50, h - 20);
			let endPoint = map(timetable_raw[i]["endTime"], startDay, endDay, 50, h - 20);

			push();
			noStroke();
			fill(colorAssigned[0], colorAssigned[1], colorAssigned[2]);
			rect(50 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint, cellWidth, endPoint - startPoint);
			pop();

			push();
			textSize(16);
			text(className, 51 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint + 20);
			pop();

			push();
			textSize(14);
			text(timeName, 51 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint + 40);
			text(roomName, 51 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint + 60);
			pop();

			if (mouseOnHover(50 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint, cellWidth, endPoint - startPoint)) {
				hightlight(50 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint, startPoint, endPoint, timeName);
			}
		}
	}
}

function mouseOnHover(topLeftX, topLeftY, wi, he) {
	return ((mouseX >= topLeftX && mouseX <= topLeftX + wi) && (mouseY >= topLeftY && mouseY <= (topLeftY + he)));
}

function hightlight(topLeftX, topLeftY, start_point, end_point, time) {
	let cellWidth = (w - 50) / 7;

	drawDottedLine(topLeftX, topLeftY, 50, topLeftY);
	drawDottedLine(topLeftX, topLeftY + end_point - start_point, 50, topLeftY + end_point - start_point);

	push();
	textAlign(CENTER, CENTER);
	textSize(16);
	text(time.slice(0, 5), 25, start_point);
	text(time.slice(6, 13), 25, end_point);
	line(48, start_point, 52, start_point);
	line(48, end_point, 52, end_point);
	pop();

	push();
	stroke(0);
	strokeWeight(3);
	noFill();
	rect(topLeftX, topLeftY, cellWidth, end_point - start_point);
	pop();
}

function drawDottedLine(x1, y1, x2, y2) {
	let spacing = 2;
	let diameter = 1;

	let unitVect = createVector(x2 - x1, y2 - y1).normalize();
	let dotsArr = [];
	dotsArr.push(createVector(x1, y1));
	while (dist(dotsArr[dotsArr.length - 1].x, dotsArr[dotsArr.length - 1].y, dotsArr[0].x, dotsArr[0].y) < createVector(x1 - x2, y1 - y2).mag()) {
		let newDot = dotsArr[dotsArr.length - 1].copy().add(unitVect.copy().mult(spacing + diameter));
		dotsArr.push(newDot);
	}

	dotsArr.pop();

	for (let i = 0; i < dotsArr.length; i++) {
		push();
		noStroke();
		fill(0);
		circle(dotsArr[i].x, dotsArr[i].y, diameter);
		pop();
	}
}

function getClassName(data) {
	let name;
	for (let i = 0; i < lopDangKi_raw.length; i++) {
		if (data["Class"] === lopDangKi_raw[i]["M?? l???p"] || data["Class"] === lopDangKi_raw[i]["M?? l???p k??m"]) {
			name = lopDangKi_raw[i]["T??n l???p"];
			break;
		}
	}

	return name;
}

function getColorAssigned(data) {
	let name;
	for (let i = 0; i < lopDangKi_raw.length; i++) {
		if (data["Class"] === lopDangKi_raw[i]["M?? l???p"] || data["Class"] === lopDangKi_raw[i]["M?? l???p k??m"]) {
			name = lopDangKi_raw[i]["color"];
			break;
		}
	}

	return name;
}

function classIsInThisWeek(subject, thisWeek) {
	let bool = false;
	for (let k = 0; k < subject["Converted week"].length; k++) {
		if (thisWeek === subject["Converted week"][k]) {
			bool = true;
			break;
		}
	}
	return bool;
}

function rerenderWeek(data) {
	let arr = data["Weeks"].split(",");
	let weeks = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes("-")) {
			let index = arr[i].indexOf("-");
			let firstWeek = parseInt(arr[i].slice(0, index));
			let lastWeek = parseInt(arr[i].slice(index + 1, arr[i].length));
			for (let i = firstWeek; i <= lastWeek; i++) {
				weeks.push(i);
			}
		} else {
			weeks.push(parseInt(arr[i]));
		}
	}
	data["Converted week"] = weeks;
}

function rerenderTime(data) {
	let startTimeText = data["Time"].slice(0, 5);
	let startHour = parseInt(startTimeText.slice(0, 2));
	let startMinute = parseInt(startTimeText.slice(3, 5));
	let startTime = startHour * 60 + startMinute;

	let endTimeText = data["Time"].slice(6, 11);
	let endHour = parseInt(endTimeText.slice(0, 2));
	let endMinute = parseInt(endTimeText.slice(3, 5));
	let endTime = endHour * 60 + endMinute;

	data["startTime"] = startTime;
	data["endTime"] = endTime;
}

function assignColor() {
	for (let i = 0; i < lopDangKi_raw.length; i++) {
		lopDangKi_raw[i]["color"] = colors[i];
	}
}

function drawUI() {
	push();
	line(50, 50, w, 50);
	line(50, 50, 50, h - 20);
	line(50, h - 20, w, h - 20);
	pop();

	let cellWidth = (w - 50) / 7;

	for (let i = 0; i < 7; i++) {
		push();
		line(50 + cellWidth * i, 0, 50 + cellWidth * i, h - 20);
		pop();
	}

	for (let i = 1; i < 8; i++) {
		push();
		textAlign(CENTER, CENTER);
		textSize(24);
		text(weekDays[i], 50 + cellWidth / 2 + cellWidth * (i-1), 25);
		pop();
	}

	push();
	textAlign(CENTER, CENTER);
	textSize(16);
	text("06:00", 25, 50);
	line(48, 50, 52, 50);
	text("11:00", 25, map(11*60, startDay, endDay, 50, h - 20));
	line(48, map(11*60, startDay, endDay, 50, h - 20), 52, map(11*60, startDay, endDay, 50, h - 20));
	text("18:00", 25, h - 20);
	line(48, h - 20, 52, h - 20);
	pop();
}
