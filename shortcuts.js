//time shortcut functions
function currentTime() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    //":" + today.getSeconds()
    return time;
}

function findTime(tiemCountMinutes) {
    var today = new Date(Date.now() + (tiemCountMinutes) * 60 * 1000);
    var time = today.getHours() + ":" + today.getMinutes();
    return time;
}

function findHours(tiemCountHours) {
    var today = new Date();
    var time = (today.getHours() + parseInt(tiemCountHours)) + ":" + today.getMinutes();
    return time;
}

//date picker shortcut functions
function commonDatePickerShortcut(dateCount, weekCount, monthCount, yearCount) {

    var find = new Date(Date.now() + 0 * 24 * 60 * 60 * 1000);
    var day = find.getDate() < 10 ? '0' + find.getDate() : find.getDate();
    var month = find.getMonth() < 10 ? '0' + (find.getMonth() + 1) : find.getMonth() + 1;
    var year = find.getFullYear();
    var monthInText = find.toLocaleString('default',{month:'short'})

    if (dateCount != null) {
        find = new Date(Date.now() + (dateCount) * 24 * 60 * 60 * 1000);
        day = find.getDate() < 10 ? '0' + find.getDate() : find.getDate();
        month = find.getMonth() < 10 ? '0' + (find.getMonth() + 1) : find.getMonth() + 1;
        monthInText = find.toLocaleString('default',{month:'short'})
        year = find.getFullYear();

        var finalDate = day + "-" + monthInText + "-" + year;
        return finalDate;

    } else if (weekCount != null) {
        var newWeekCount = (weekCount) * 7;
        find = new Date(Date.now() + (newWeekCount) * 24 * 60 * 60 * 1000);
        day = find.getDate() < 10 ? '0' + find.getDate() : find.getDate();
        month = find.getMonth() < 10 ? '0' + (find.getMonth() + 1) : find.getMonth() + 1;
        monthInText = find.toLocaleString('default',{month:'short'})
        year = find.getFullYear();

        var weekDate = day + "-" + monthInText + "-" + year;
        return weekDate;

    } else if (monthCount != null) {
        month = find.getMonth() + (monthCount) + 1;
        var monthCounter = (month/12);
        if( monthCounter > 1){
            yearCount = Math.trunc(month/12)
            month = (month - (12 * yearCount));

            if(month==0){
                month = 12;
            }

            var month_list = ["NUll","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            console.log(month_list[month])
            year = find.getFullYear() + yearCount;

            var monthDateText = day + "-" + month_list[month] + "-" + year;
            console.log(monthDateText);

            if(month < 10){
                month = "0"+month; 
            }

            var monthDate = day + "-" + month + "-" + year;
            return monthDate;
        }
        if(month < 10){
            month = '0'+ month;   
        }
    } else if (yearCount != null) {
        year = find.getFullYear() + (yearCount);
    } else {
        alert("Please Provide a valid value with shortcut!")
    }

    var finalDate = day + "-" + monthInText + "-" + year;
    return finalDate;
}

function currentDate() {
    var find = new Date(Date.now() + (0) * 24 * 60 * 60 * 1000);
    var day = find.getDate() < 10 ? '0' + find.getDate() : find.getDate();
    //var month = find.getMonth() < 10 ? '0' + (find.getMonth() + 1) : find.getMonth() + 1;
    var year = find.getFullYear();
    var monthInText = find.toLocaleString('default',{month:'short'})
    var todaysDate = day + "-" + monthInText + "-" + year;
    
    return todaysDate;
}

function addValuesToDateFeilds(valuesToDateFeilds) {
    // checking if the value in the textbox have d, if then print current date
    if (($("#" + valuesToDateFeilds).val()).toLowerCase() == "d") {
        $("#" + valuesToDateFeilds).val(currentDate());
    } else {
        var typedDate = ($("#" + valuesToDateFeilds).val()).toLowerCase();
        var dateFix = typedDate.split("d")
        if (dateFix[1] > 0 || dateFix[1] < 0) {
            $("#" + valuesToDateFeilds).val(commonDatePickerShortcut(dateFix[1], null, null, null))
        }
    }
    // checking if the value in the textbox have w, if then print current date
    if (($("#" + valuesToDateFeilds).val()).toLowerCase() == "w") {
        $("#" + valuesToDateFeilds).val(currentDate());
    } else {
        var typedDate = ($("#" + valuesToDateFeilds).val()).toLowerCase();
        var weekFix = typedDate.split("w")
        if (weekFix[1] > 0 || weekFix[1] < 0) {
            $("#" + valuesToDateFeilds).val(commonDatePickerShortcut(null, parseInt(weekFix[1]), null, null))
        }
    }
    // checking if the value in the textbox have m, if then print current date
    if (($("#" + valuesToDateFeilds).val()).toLowerCase() == "m") {
        $("#" + valuesToDateFeilds).val(currentDate());
    } else {
        var typedDate = ($("#" + valuesToDateFeilds).val()).toLowerCase();
        var monthFix = typedDate.split("m")
        if (monthFix[1] > 0 || monthFix[1] < 0) {
            $("#" + valuesToDateFeilds).val(commonDatePickerShortcut(null, null, parseInt(monthFix[1]), null))
        }
    }
    // checking if the value in the textbox have y, if then print current date
    if (($("#" + valuesToDateFeilds).val()).toLowerCase() == "y") {
        $("#" + valuesToDateFeilds).val(currentDate());
    } else {
        var typedDate = ($("#" + valuesToDateFeilds).val()).toLowerCase();
        var yearFix = typedDate.split("y")
        if (yearFix[1] > 0 || yearFix[1] < 0) {
            $("#" + valuesToDateFeilds).val(commonDatePickerShortcut(null, null, null, parseInt(yearFix[1])))
        }
    }
}

//date shortcut calls "The Main Function!"
$('*[data-dateAutoFill="date"]').on('keydown', function(e) {

    var keyCode = e.keyCode || e.which;
    //after pressing tab im storing some values with relavant to data attribute
    if (keyCode == 9) {
        e.preventDefault();

        var idArr = []; // here im storing the id names of each feild, which uses the common data attribute "date"
        $('*[data-dateAutoFill="date"]').each(function() {
            //pushin each values to array index
            idArr.push($(this).attr("id"));
        });

        if (idArr[0] == $(this).attr('id')) {
            var dateFrom = idArr[0].toString();
            //here im converting the array index to string and passing the values to respective function
            addValuesToDateFeilds(dateFrom);
        }

        if (idArr[1] == $(this).attr('id')) {
            var dateTo = idArr[1].toString();
            //here im converting the array index to string and passing the values to respective function
            addValuesToDateFeilds(dateTo);
        }
    }
});

$('*[data-dateAutoFill="time"]').on('keydown', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 9) {
        e.preventDefault();
        if (($('*[data-dateAutoFill="time"]').val()).toLowerCase() == "t") {
            $('*[data-dateAutoFill="time"]').val(currentTime());
        }
        var typedTime = ($('*[data-dateAutoFill="time"]').val()).toLowerCase();
        var splitedTime = typedTime.split("t");
        if (splitedTime[1] > 0 || splitedTime[1] < 0) {
            var finalTime = findTime(splitedTime[1]);
            $('*[data-dateAutoFill="time"]').val(finalTime);
        }
        if (($('*[data-dateAutoFill="time"]').val()).toLowerCase() == "h") {
            $('*[data-dateAutoFill="time"]').val(currentTime());
        }
        var typedTime = ($('*[data-dateAutoFill="time"]').val()).toLowerCase();
        var splitedTime = typedTime.split("h");
        if (splitedTime[1] > 0 || splitedTime[1] < 0) {
            var finalTime = findHours(splitedTime[1]);
            $('*[data-dateAutoFill="time"]').val(finalTime);
        }
    }
});

////Key Shortcut for saving and updating
// $(window).on('keydown', function (e) {
//     e.preventDefault();

//     if((e.which == 83 && e.altKey)){
//         alert('alt+s Pressed');
//     }
//     if((e.which == 85 && e.altKey)){
//         alert('alt+u Pressed');
//     }else{      
//     }   
// })

//find.toLocaleString('default',{month:'long'})