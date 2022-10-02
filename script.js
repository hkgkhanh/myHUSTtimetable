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
      "Mã lớp": 136498,
      "Mã lớp kèm": 136498,
      "Tên lớp": "Tiếng Pháp VP 1",
      "Mã học phần": "FL1601",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 0
    },
    {
      "Mã lớp": 136500,
      "Mã lớp kèm": 136500,
      "Tên lớp": "Tiếng Pháp VP 2",
      "Mã học phần": "FL1602",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 0
    },
    {
      "Mã lớp": 135437,
      "Mã lớp kèm": 135437,
      "Tên lớp": "Nhập môn CNTT và TT",
      "Mã học phần": "IT2110",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 2
    },
    {
      "Mã lớp": 135343,
      "Mã lớp kèm": 135343,
      "Tên lớp": "Kiến thức máy tính",
      "Mã học phần": "IT2120",
      "Loại lớp": "BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 2
    },
    {
      "Mã lớp": 136496,
      "Mã lớp kèm": 136496,
      "Tên lớp": "Giải tích I",
      "Mã học phần": "MI1114",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 3
    },
    {
      "Mã lớp": 136495,
      "Mã lớp kèm": 136495,
      "Tên lớp": "Đại số tuyến tính",
      "Mã học phần": "MI1144",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 3
    },
    {
      "Mã lớp": 138995,
      "Mã lớp kèm": 138993,
      "Tên lớp": "Quân sự chung",
      "Mã học phần": "MIL1230",
      "Loại lớp": "BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 0
    },
    {
      "Mã lớp": 138997,
      "Mã lớp kèm": 138997,
      "Tên lớp": "Kỹ thuật chiến đấu bộ binh và chiến thuật",
      "Mã học phần": "MIL1240",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 0
    },
    {
      "Mã lớp": 726017,
      "Mã lớp kèm": 726017,
      "Tên lớp": "Lý luận TDTT",
      "Mã học phần": "PE1014",
      "Loại lớp": "LT+BT",
      "Trạng thái lớp": "Hoàn thành đăng ký",
      "Yêu cầu": " ",
      "Trạng thái đăng kí": "Thành công",
      "Loại đăng kí": "Bắt buộc",
      "Tín chỉ": 0
    }
  ];

let weekNum = 21;
let selectDOM;

function setup() {
	createCanvas(w, h);

	selectDOM = createSelect();
	selectDOM.position(w + 10, 10);
  	for (let i = 0; i < weekNum; i++) {
  		selectDOM.option("tuần " + (i + 1));
  	}
  	selectDOM.selected("tuần 1");
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
		}
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
	text("6:00", 25, 50);
	text("18:00", 25, h - 20);
	pop();
}