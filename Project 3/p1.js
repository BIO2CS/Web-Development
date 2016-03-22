'use strict'

window.onload = function() {
    var date = new Date();
    //console.log("on document load");
    var datePicker = new DatePicker("datepicker", date);
    datePicker.render();
    datePicker.addEventListener();
}

function DatePicker(id, date) {
    this.element = document.getElementById(id);
    this.monthElement = document.getElementById("title");
    this.preButton = document.getElementById("pre_button");
    this.nextButton = document.getElementById("next_button");
    
    this.monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    this.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.dateObject = date;
    this.year = this.dateObject.getFullYear();
    this.month = this.dateObject.getMonth();
    this.date = this.dateObject.getDate();
    this.currYear = this.year;
    this.currMonth = this.month;
    this.currDate = this.date;
    this.isCurrentDate = true;	
    
    this.calculateNumDays = function(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    this.calculateStartDay = function(year, month) {
        return new Date(year, month, 1).getDay();
    }	
    this.render = function() {
        document.getElementById("title").textContent = this.monthNames[this.month] + " " + this.year;
        this.numberOfDaysThisMonth = this.calculateNumDays(this.year, this.month);
        this.startDayOfWeek = this.calculateStartDay(this.year, this.month);
        
        var node = document.getElementById("body");
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        
        var insertTableData = "\t<tr id='row1'>\n";
        var weekday = 0;
        for (; weekday < this.startDayOfWeek; weekday++) {
            insertTableData += "\t\t<td class='blankCell'>&nbsp</td>\n";
        }
        var d, rowCount = 1;
        for (d = 1; d <= this.numberOfDaysThisMonth; d++) {
            if (d == this.currDate && this.isCurrentDate) {
                insertTableData += "\t\t<td id='day" + d + "' class='today' headers='row" + 
                        rowCount + " " + this.dayNames[weekday] + "' >" + d + "</td>";
            }
            else {
                insertTableData += "\t\t<td id='day" + d + "' class='otherDays' headers='row" + 
                        rowCount + " " + this.dayNames[weekday] + "' >" + d + "</td>";
            }
            if (weekday == 6 && d < this.numberOfDaysThisMonth) {
                insertTableData += "\t</tr>\n<tr id='row" + rowCount + "'>\n";
                rowCount++;
                weekday = 0;
            }
            else {
                weekday++;
            }
        }
        for (; weekday < 7; weekday++) {
            insertTableData += "\t\t<td class='blankCell'>&nbsp</td>\n";
        }
        insertTableData += "\t</tr>";
        node.insertAdjacentHTML("afterbegin", insertTableData);
    }
    this.addEventListener = function() {
        var preButton = document.getElementById("pre_button");
        var nextButton = document.getElementById("next_button");
        //https://www.toptal.com/javascript/10-most-common-javascript-mistakes
        preButton.addEventListener("click", this.showPrevMonth.bind(this), false);
        nextButton.addEventListener("click", this.showNextMonth.bind(this), false);	
        this.addMouseEventListener();
    }
    this.showPrevMonth = function() {
        //console.log("previsou button is clicked");
        if (this.month-- == 0) {
            this.month = 11;
            this.year--;
        }
        console.log("this year and month: " + this.year + "; " + this.month);
        this.isCurrentDate = (this.month == this.currMonth && this.year == this.currYear);
        this.render();
        this.addMouseEventListener();
    }
    this.showNextMonth = function() {
        //console.log("next button is clicked");
        if (this.month++ == 11) {
            this.month = 0;
            this.year++;
        }
        this.isCurrentDate = (this.month == this.currMonth && this.year == this.currYear);
        console.log("this year and month: " + this.year + "; " + this.month);
        this.render();
        this.addMouseEventListener();
    }
    this.addMouseEventListener = function() {
        var cellElements = document.getElementsByClassName("otherDays");
        var i;
        for (i = 0; i < cellElements.length; i++) {
            cellElements[i].addEventListener("mouseover", this.handleMouseHoverOnCell.bind(this), false);
            cellElements[i].addEventListener("mouseout", this.handleMouseOutOnCell.bind(this), false);
        }
    }
    this.handleMouseHoverOnCell = function(e) {
        //console.log(e.target.id);
        var targetCell = document.getElementById(e.target.id);
        targetCell.className = "current";
    }
    this.handleMouseOutOnCell = function(e) {
        //console.log(e.target.id);
        var targetCell = document.getElementById(e.target.id);
        targetCell.className = "otherDays";
    }
}

