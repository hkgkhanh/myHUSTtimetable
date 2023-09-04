let w = 1400;
let h = 700;

let weekDays = [null, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let startDay = 360; // = 6 * 60
let endDay = 18*60; // = 22 * 60
let weekShown = 1;

let colors = [
	[255, 192, 203],
	[238, 130, 238],
	[123, 104, 238],
	[250, 128, 114],
	[255, 165, 0],
	[240, 230, 140],
	[173, 255, 47],
	[102, 205, 170],
	[205, 133, 63],
	[119, 136, 153],
	[188, 143, 143],
	[255, 215, 0]
];
/*
// IT, MI, FL, SSH, PE, SUP (the rest)
let MIcolors = [
	[255, 192, 203],
	[255, 105, 180],
	[255, 20, 147],
	[219, 112, 147],
	[199, 21, 133]
];

let ITcolors = [
	[50, 205, 50],
	[152, 251, 152],
	[46, 139, 87],
	[34, 139, 34],
	[154, 205, 50],
];
*/
let timetable_raw = [
    {
        "Day": "2",
        "Time": "09:20-11:45",
        "Weeks": "3-10, 12-19",
        "Room": "D9-501",
        "Class": "143570"
    },
    {
        "Day": "2",
        "Time": "14:10-16:45",
        "Weeks": "3-10,12-19",
        "Room": "D6-205",
        "Class": "143935"
    },
    {
        "Day": "3",
        "Time": "06:45-10:05",
        "Weeks": "3-10, 12-19",
        "Room": "D9-407",
        "Class": "143645"
    },
    {
        "Day": "3",
        "Time": "10:15-11:45",
        "Weeks": "3",
        "Room": "D5-302",
        "Class": "143622"
    },
    {
        "Day": "3",
        "Time": "10:15-11:45",
        "Weeks": "4-10, 12-19",
        "Room": "B1-301",
        "Class": "143622"
    },
    {
        "Day": "3",
        "Time": "12:30-14:00",
        "Weeks": "3",
        "Room": "D5-302",
        "Class": "143622"
    },
    {
        "Day": "3",
        "Time": "12:30-14:00",
        "Weeks": "4-10, 12-19",
        "Room": "B1-301",
        "Class": "143622"
    },
    {
        "Day": "3",
        "Time": "14:10-17:30",
        "Weeks": "3-10, 12-19",
        "Room": "B1-302",
        "Class": "143606"
    },
    {
        "Day": "4",
        "Time": "12:30-14:55",
        "Weeks": "3-10,12-19",
        "Room": "D6-205",
        "Class": "143935"
    },
    {
        "Day": "4",
        "Time": "15:05-17:30",
        "Weeks": "3-10, 12-19",
        "Room": "D9-401",
        "Class": "143616"
    },
    {
        "Day": "5",
        "Time": "08:25-10:05",
        "Weeks": "3-10,12-19",
        "Room": "D5-104",
        "Class": "146411"
    },
    {
        "Day": "5",
        "Time": "14:00-15:00",
        "Weeks": "3-10,12-19",
        "Room": "NTD",
        "Class": "733206"
    },
    {
        "Day": "6",
        "Time": "06:45-09:10",
        "Weeks": "3,5,7,9,13,15,17,19",
        "Room": "D3-5-401",
        "Class": "146780"
    },
    {
        "Day": "6",
        "Time": "06:45-09:10",
        "Weeks": "4,6,8,10,12,14,16,18",
        "Room": "D3-5-401",
        "Class": "146781"
    },
    {
        "Day": "6",
        "Time": "12:30-14:55",
        "Weeks": "3-10, 12-19",
        "Room": "D9-401",
        "Class": "143610"
    },
    {
        "Day": "6",
        "Time": "15:05-17:30",
        "Weeks": "3-10, 12-19",
        "Room": "D9-501",
        "Class": "143613"
    }
];
let lopDangKi_raw = [
    {
        "Mã lớp": "143935",
        "Mã lớp kèm": "143935",
        "Tên lớp": "Tiếng Pháp VP 4",
        "Mã HP": "FL1604",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    },
    {
        "Mã lớp": "143645",
        "Mã lớp kèm": "143645",
        "Tên lớp": "Technical Writing and Presentation",
        "Mã HP": "IT2030",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "143622",
        "Mã lớp kèm": "143622",
        "Tên lớp": "Điện tử cho CNTT lab",
        "Mã HP": "IT2140",
        "Loại lớp": "BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "143610",
        "Mã lớp kèm": "143610",
        "Tên lớp": "Cấu trúc dữ liệu và thuật toán",
        "Mã HP": "IT3011",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "143606",
        "Mã lớp kèm": "143606",
        "Tên lớp": "Lập trình C cơ bản",
        "Mã HP": "IT3230",
        "Loại lớp": "BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "143616",
        "Mã lớp kèm": "143616",
        "Tên lớp": "Điện tử cho CNTT",
        "Mã HP": "IT3420",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "143613",
        "Mã lớp kèm": "143613",
        "Tên lớp": "Xử lý tín hiệu",
        "Mã HP": "IT4172",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "143570",
        "Mã lớp kèm": "143570",
        "Tên lớp": "Nhập môn kỹ thuật truyền thông",
        "Mã HP": "IT4593",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "146411",
        "Mã lớp kèm": "146411",
        "Tên lớp": "Xác suất thống kê",
        "Mã HP": "MI2021",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "733206",
        "Mã lớp kèm": "733206",
        "Tên lớp": "Bóng bàn 1",
        "Mã HP": "PE2401",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    },
    {
        "Mã lớp": "146781",
        "Mã lớp kèm": "146780",
        "Tên lớp": "Kinh tế chính trị Mác - Lênin",
        "Mã HP": "SSH1121",
        "Loại lớp": "BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "": "",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    }
  ];

let weekNum = 19;
let selectDOM;

function setup() {
	createCanvas(w, h);

	selectDOM = createSelect();
	selectDOM.position(w + 10, 10);
  	for (let i = 0; i < weekNum; i++) {
  		//selectDOM.option("tuần " + (i + 25)); // semeter 2
  		selectDOM.option("tuần " + (i + 1)); // semeter 1
  	}
  	//selectDOM.selected("tuần 25"); // semester 2
    selectDOM.selected("tuần 1"); // semester 1
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
		if (data["Class"] === lopDangKi_raw[i]["Mã lớp"] || data["Class"] === lopDangKi_raw[i]["Mã lớp kèm"]) {
			name = lopDangKi_raw[i]["Tên lớp"];
			break;
		}
	}

	return name;
}

function getColorAssigned(data) {
	let name;
	for (let i = 0; i < lopDangKi_raw.length; i++) {
		if (data["Class"] === lopDangKi_raw[i]["Mã lớp"] || data["Class"] === lopDangKi_raw[i]["Mã lớp kèm"]) {
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
