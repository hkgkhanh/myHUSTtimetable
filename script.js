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
        "Thứ": "2",
        "Thời gian": "09:20-11:45",
        "Tuần học": "2-9,11-18",
        "Phòng học": "C7-117",
        "Lớp học": "152255"
    },
    {
        "Thứ": "2",
        "Thời gian": "12:30-14:55",
        "Tuần học": "2,4,6,8,12,14,16,18",
        "Phòng học": "D6-407",
        "Lớp học": "155863"
    },
    {
        "Thứ": "2",
        "Thời gian": "15:00-17:30",
        "Tuần học": "7,9,12,14,16",
        "Phòng học": "B1-204",
        "Lớp học": "744483"
    },
    {
        "Thứ": "3",
        "Thời gian": "06:45-10:05",
        "Tuần học": "2-9,11-18",
        "Phòng học": "C7-212",
        "Lớp học": "152259"
    },
    {
        "Thứ": "3",
        "Thời gian": "14:10-17:30",
        "Tuần học": "2-9",
        "Phòng học": "GD-B1",
        "Lớp học": "153313"
    },
    {
        "Thứ": "4",
        "Thời gian": "06:45-09:10",
        "Tuần học": "2-9,11-18",
        "Phòng học": "D9-501",
        "Lớp học": "151964"
    },
    {
        "Thứ": "4",
        "Thời gian": "09:20-11:45",
        "Tuần học": "2-9,11-18",
        "Phòng học": "D9-401",
        "Lớp học": "151961"
    },
    {
        "Thứ": "4",
        "Thời gian": "12:30-15:00",
        "Tuần học": "4,8,12,13,15",
        "Phòng học": "B1-303",
        "Lớp học": "744527"
    },
    {
        "Thứ": "5",
        "Thời gian": "09:20-11:45",
        "Tuần học": "2-9",
        "Phòng học": "C7-117",
        "Lớp học": "152257"
    },
    {
        "Thứ": "5",
        "Thời gian": "14:00-15:00",
        "Tuần học": "2-9,11-18",
        "Phòng học": "SVD",
        "Lớp học": "745060"
    },
    {
        "Thứ": "6",
        "Thời gian": "06:45-10:05",
        "Tuần học": "2-9,11-18",
        "Phòng học": "D9-501",
        "Lớp học": "151959"
    }
];

let lopDangKi_raw = [
    {
        "Mã lớp": "153313",
        "Mã lớp kèm": "153313",
        "Tên lớp": "Pháp luật đại cương",
        "Mã HP": "EM1170",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "155863",
        "Mã lớp kèm": "155863",
        "Tên lớp": "Văn hóa kinh doanh và tinh thần khởi nghiệp",
        "Mã HP": "EM1180",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "152255",
        "Mã lớp kèm": "152255",
        "Tên lớp": "Tiếng Pháp VP 6",
        "Mã HP": "FL1606",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "152257",
        "Mã lớp kèm": "152257",
        "Tên lớp": "Tiếng Pháp VP 7",
        "Mã HP": "FL1607",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "1"
    },
    {
        "Mã lớp": "151959",
        "Mã lớp kèm": "151959",
        "Tên lớp": "Nguyên lý hệ điều hành",
        "Mã HP": "IT3070",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "151961",
        "Mã lớp kèm": "151961",
        "Tên lớp": "Mạng máy tính",
        "Mã HP": "IT3080",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "TN",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "744483",
        "Mã lớp kèm": "744483",
        "Tên lớp": "Mạng máy tính (TN)",
        "Mã HP": "IT3080",
        "Loại lớp": "TN",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    },
    {
        "Mã lớp": "151964",
        "Mã lớp kèm": "151964",
        "Tên lớp": "Lập trình\nhướng đối tượng",
        "Mã HP": "IT3103",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "TN",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "744527",
        "Mã lớp kèm": "744527",
        "Tên lớp": "Lập trình\nhướng đối tượng (TN)",
        "Mã HP": "IT3103",
        "Loại lớp": "TN",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    },
    {
        "Mã lớp": "744277",
        "Mã lớp kèm": "744277",
        "Tên lớp": "Project I",
        "Mã HP": "IT3150",
        "Loại lớp": "ĐA",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "2"
    },
    {
        "Mã lớp": "152259",
        "Mã lớp kèm": "152259",
        "Tên lớp": "Nhập môn công nghệ phần mềm",
        "Mã HP": "IT3180",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "3"
    },
    {
        "Mã lớp": "745060",
        "Mã lớp kèm": "745060",
        "Tên lớp": "Chạy",
        "Mã HP": "PE2601",
        "Loại lớp": "LT+BT",
        "TT lớp": "Điều chỉnh đăng ký",
        "Yêu cầu": "",
        "Trạng thái ĐK": "Thành công",
        "loại ĐK": "Online",
        "TC": "0"
    }
];

let weekNum = 19;
let selectDOM;

let currSemester = 1; // change this when update new semester
let startDate1 = new Date("September 2, 2024");
let startDate2 = new Date("February 10, 2025");
let currDate;

function setup() {
	createCanvas(w, h);

    currDate = Date.now();

    let weeksPassed;

    if (currSemester == 1) {
        weeksPassed = Math.ceil((currDate - startDate1) / (1000 * 60 * 60 * 24 * 7));
    } else {
        weeksPassed = Math.ceil((currDate - startDate2) / (1000 * 60 * 60 * 24 * 7));
    }
    //console.log(weeksPassed);

    let weekString = "tuần " + weeksPassed;

	selectDOM = createSelect();
	selectDOM.position(w + 10, 10);
  	for (let i = 0; i < weekNum; i++) {
  		//selectDOM.option("tuần " + (i + 25)); // semester 2
  		selectDOM.option("tuần " + (i + 1)); // semester 1
  	}
  	//selectDOM.selected("tuần 25"); // semester 2
    //selectDOM.selected("tuần 3"); // semester 1
    selectDOM.selected(weekString);

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
			let timeName = timetable_raw[i]["Thời gian"];
			let roomName = timetable_raw[i]["Phòng học"];
			let classCode = timetable_raw[i]["Lớp học"];
			let startPoint = map(timetable_raw[i]["startTime"], startDay, endDay, 50, h - 20);
			let endPoint = map(timetable_raw[i]["endTime"], startDay, endDay, 50, h - 20);

			push();
			noStroke();
            //console.log(colorAssigned);
			fill(colorAssigned[0], colorAssigned[1], colorAssigned[2]);
			rect(50 + cellWidth * (timetable_raw[i]["Thứ"] - 1) + 2, startPoint, cellWidth - 4, endPoint - startPoint, 10);
			pop();

			push();
			textSize(16);
            textWrap(WORD);
            textAlign(CENTER, TOP);
            if (endPoint - startPoint <= 60) {
                text(className + '\n' + timeName + '     ' + roomName, 51 + cellWidth * (timetable_raw[i]["Thứ"] - 1), startPoint + 8, cellWidth);
            } else {
                text(className + '\n' + timeName + '\n' + roomName, 51 + cellWidth * (timetable_raw[i]["Thứ"] - 1), startPoint + 8, cellWidth);
            }
			pop();
		}
	}

  for (let i = 0; i < timetable_raw.length; i++) {
    if (classIsInThisWeek(timetable_raw[i], week)) {
      let className = getClassName(timetable_raw[i]);
      let colorAssigned = getColorAssigned(timetable_raw[i]);
      let timeName = timetable_raw[i]["Thời gian"];
      let roomName = timetable_raw[i]["Phòng học"];
      let classCode = timetable_raw[i]["Lớp học"];
      let startPoint = map(timetable_raw[i]["startTime"], startDay, endDay, 50, h - 20);
      let endPoint = map(timetable_raw[i]["endTime"], startDay, endDay, 50, h - 20);
      
      if (mouseOnHover(50 + cellWidth * (timetable_raw[i]["Thứ"] - 1), startPoint, cellWidth, endPoint - startPoint)) {
        hightlight(50 + cellWidth * (timetable_raw[i]["Thứ"] - 1), startPoint, startPoint, endPoint, timeName);
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
		if (data["Lớp học"] === lopDangKi_raw[i]["Mã lớp"] || data["Lớp học"] === lopDangKi_raw[i]["Mã lớp kèm"]) {
			name = lopDangKi_raw[i]["Tên lớp"];
			break;
		}
	}

	return name;
}

function getColorAssigned(data) {
	let name;
	for (let i = 0; i < lopDangKi_raw.length; i++) {
		if (data["Lớp học"] === lopDangKi_raw[i]["Mã lớp"] || data["Lớp học"] === lopDangKi_raw[i]["Mã lớp kèm"]) {
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
	let arr = data["Tuần học"].split(",");
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
	let startTimeText = data["Thời gian"].slice(0, 5);
	let startHour = parseInt(startTimeText.slice(0, 2));
	let startMinute = parseInt(startTimeText.slice(3, 5));
	let startTime = startHour * 60 + startMinute;

	let endTimeText = data["Thời gian"].slice(6, 11);
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
