let w = 1400;
let h = 700;

let weekDays = [null, "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let startDay = 360 + 45;
let endDay = 18*60 - 30;
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

let timetable_raw = [
    {
        "Day": "2",
        "Time": "06:45-10:05",
        "Weeks": "25-32,34-42",
        "Room": "C7-111",
        "Class": "149060"
    },
    {
        "Day": "2",
        "Time": "10:15-11:45",
        "Weeks": "25-32,34-42",
        "Room": "C7-108",
        "Class": "149062"
    },
    {
        "Day": "2",
        "Time": "12:30-14:00",
        "Weeks": "25-32, 34-42",
        "Room": "D9-401",
        "Class": "147774"
    },
    {
        "Day": "2",
        "Time": "15:05-17:30",
        "Weeks": "25,27,29,31,35,37,39,41",
        "Room": "D3-5-401",
        "Class": "151083"
    },
    {
        "Day": "2",
        "Time": "15:05-17:30",
        "Weeks": "26,28,30,32,34,36,38,40,42",
        "Room": "D3-5-401",
        "Class": "151086"
    },
    {
        "Day": "3",
        "Time": "12:30-14:55",
        "Weeks": "25-32, 34-42",
        "Room": "D9-401",
        "Class": "147786"
    },
    {
        "Day": "3",
        "Time": "15:05-17:30",
        "Weeks": "25,27,29,31,34,36,38,40,42",
        "Room": "D7-403",
        "Class": "150821"
    },
    {
        "Day": "4",
        "Time": "06:45-07:45",
        "Weeks": "25-32,34-42",
        "Room": "NTD",
        "Class": "741372"
    },
    {
        "Day": "4",
        "Time": "10:15-11:45",
        "Weeks": "25-32, 34-42",
        "Room": "B1-203",
        "Class": "147790"
    },
    {
        "Day": "4",
        "Time": "12:30-14:00",
        "Weeks": "25-32, 34-42",
        "Room": "B1-203",
        "Class": "147790"
    },
    {
        "Day": "4",
        "Time": "14:10-17:30",
        "Weeks": "25-32, 34-42",
        "Room": "B1-205",
        "Class": "147777"
    },
    {
        "Day": "5",
        "Time": "08:25-11:45",
        "Weeks": "25-32,34-42",
        "Room": "C7-108",
        "Class": "149062"
    },
    {
        "Day": "5",
        "Time": "14:10-17:30",
        "Weeks": "25-32, 34-42",
        "Room": "D9-501",
        "Class": "147770"
    }
];

let lopDangKi_raw = [
    {
        "Mã lớp": "150821",
        "Mã lớp kèm": "150821",
        "Tên lớp": "Tâm lý học ứng dụng",
        "Mã HP": "ED3280",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "149062",
        "Mã lớp kèm": "149062",
        "Tên lớp": "Tiếng Pháp VP 5",
        "Mã HP": "FL1605",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    },
    {
        "Mã lớp": "147790",
        "Mã lớp kèm": "147790",
        "Tên lớp": "Kiến trúc máy tính lab",
        "Mã HP": "IT3280",
        "Loại lớp": "BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "147786",
        "Mã lớp kèm": "147786",
        "Tên lớp": "Kiến trúc máy tính",
        "Mã HP": "IT3283",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "147777",
        "Mã lớp kèm": "147777",
        "Tên lớp": "Cơ sở dữ liệu lab",
        "Mã HP": "IT3290",
        "Loại lớp": "BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "147774",
        "Mã lớp kèm": "147774",
        "Tên lớp": "Cơ sở dữ liệu",
        "Mã HP": "IT3292",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "147770",
        "Mã lớp kèm": "147770",
        "Tên lớp": "Tính toán khoa học",
        "Mã HP": "IT4110",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "149060",
        "Mã lớp kèm": "149060",
        "Tên lớp": "Phương trình vi phân\nvà Chuỗi",
        "Mã HP": "MI1134",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "741372",
        "Mã lớp kèm": "741372",
        "Tên lớp": "Bóng bàn 2",
        "Mã HP": "PE2402",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    },
    {
        "Mã lớp": "151086",
        "Mã lớp kèm": "151083",
        "Tên lớp": "Lịch sử Đảng",
        "Mã HP": "SSH1141",
        "Loại lớp": "BT",
        "TT lớp": "Điều chỉnh đăng ký",
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
  		selectDOM.option("tuần " + (i + 25)); // semester 2
  		//selectDOM.option("tuần " + (i + 1)); // semester 1
  	}
  	selectDOM.selected("tuần 25"); // semester 2
    //selectDOM.selected("tuần 3"); // semester 1

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
    drawClass(parseInt(selectDOM.value().slice(5)));
	drawUI();
}

function drawClass(week) {
	let cellWidth = (w - 50) / 7;
	for (let i = 0; i < timetable_raw.length; i++) {

		if (classIsInThisWeek(timetable_raw[i], week)) {
			let className = getClassName(timetable_raw[i]);
            let classNameWidth = textWidth(className);
			let colorAssigned = getColorAssigned(timetable_raw[i]);
			let timeName = timetable_raw[i]["Time"];
			let roomName = timetable_raw[i]["Room"];
			let classCode = timetable_raw[i]["Class"];
			let startPoint = map(timetable_raw[i]["startTime"], startDay, endDay, 50, h - 20);
			let endPoint = map(timetable_raw[i]["endTime"], startDay, endDay, 50, h - 20);

			push();
			noStroke();
			fill(colorAssigned[0], colorAssigned[1], colorAssigned[2]);
			rect(50 + cellWidth * (timetable_raw[i]["Day"] - 1) + 2, startPoint, cellWidth - 4, endPoint - startPoint, 10);
			pop();

			push();
			textSize(16);
            textWrap(WORD);
            textAlign(CENTER, TOP);
            if (endPoint - startPoint <= 60) {
                text(className + '\n' + timeName + '     ' + roomName, 51 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint + 8, cellWidth);
            } else {
                text(className + '\n' + timeName + '\n' + roomName, 51 + cellWidth * (timetable_raw[i]["Day"] - 1), startPoint + 8, cellWidth);
            }
			pop();
		}
	}

  for (let i = 0; i < timetable_raw.length; i++) {
    if (classIsInThisWeek(timetable_raw[i], week)) {
      let className = getClassName(timetable_raw[i]);
      let colorAssigned = getColorAssigned(timetable_raw[i]);
      let timeName = timetable_raw[i]["Time"];
      let roomName = timetable_raw[i]["Room"];
      let classCode = timetable_raw[i]["Class"];
      let startPoint = map(timetable_raw[i]["startTime"], startDay, endDay, 50, h - 20);
      let endPoint = map(timetable_raw[i]["endTime"], startDay, endDay, 50, h - 20);
      
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

	drawDottedLine(topLeftX + 10, topLeftY, 50, topLeftY);
	drawDottedLine(topLeftX + 10, topLeftY + end_point - start_point, 50, topLeftY + end_point - start_point);

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
	strokeWeight(2);
	noFill();
	rect(topLeftX + 2, topLeftY, cellWidth - 4, end_point - start_point, 10);
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
	line(50, 0, 50, h - 20);
	line(50, h - 20, w, h - 20);
	pop();

	let cellWidth = (w - 50) / 7;

	for (let i = 1; i < 7; i++) {
		push();
        line(50 + cellWidth * i, 0, 50 + cellWidth * i, 50);
        drawingContext.setLineDash([20, 20]);
        line(50 + cellWidth * i, 50 + 15, 50 + cellWidth * i, map(705, startDay, endDay, 50, h - 20));
        line(50 + cellWidth * i, map(750, startDay, endDay, 50, h - 20) + 15, 50 + cellWidth * i, h - 20);
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
	text("06:45", 25, 50);
	line(48, 50, 52, 50);
	text("11:45", 25, map(11*60 + 45, startDay, endDay, 50, h - 20));
	line(48, map(11*60 + 45, startDay, endDay, 50, h - 20), w, map(11*60 + 45, startDay, endDay, 50, h - 20));
    text("12:30", 25, map(12*60 + 30, startDay, endDay, 50, h - 20));
    line(48, map(12*60 + 30, startDay, endDay, 50, h - 20), w, map(12*60 + 30, startDay, endDay, 50, h - 20));
	text("17:30", 25, h - 20);
	line(48, h - 20, 52, h - 20);
	pop();
}
