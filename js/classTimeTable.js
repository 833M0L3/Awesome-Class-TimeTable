function countdown(){

  // Time Table
  var week = {
    Mon: {
      9: "Microsoft Office Package Workshop (AM)",
      11: "Mathematics I (MCK)",
      12: "C Programming (RT)"
    },
    Tue: {
      9: "Microsoft Office Package Workshop (AM)",
      11: "Mathematics I (MCK)",
      12: "C Programming (RT)"
    },
    Wed: {
      9: "Microsoft Office Package Workshop (AM)",
      10: "Digital Logics (RG)",
      12: "Introduction to IT (JP)",
      13: "Physics (SA)"
    },
    Thu: {
      9: "Microsoft Office Package Workshop (AM)",
      10: "Digital Logics (RG)",
      12: "Introduction to IT (JP)",
      13: "Physics (SA)"
    },
    Fri: {
      9: "Microsoft Office Package Workshop (AM)",
      10: "Digital Logics (RG)",
      12: "Introduction to IT (JP)",
      13: "Physics (SA)"
    },
    Sat: {
    },
    Sun: {
      9: "Microsoft Office Package Workshop (AM)",
      11: "Mathematics I (MCK)",
      12: "C Programming (RT)"
    }
  }

  var now = new Date();
  var today = new Date().toString().slice(0, 16);
  var day = new Date().toString().slice(0,3);
  var time = new Date().toString().slice(16,18);

  // Display next day time table if it'd more than 5 PM
  if(time > 17) {
    var day = new Date(now.getTime() + (24 * 60 * 60 * 1000)).toDateString().slice(0,3);
    document.getElementById("today").textContent = "Tomorrow";
  }

  var eventDate = Object.keys(week[day]);

  // iterate to latest time
  for (var i in eventDate) {
    if(parseInt(time) < parseInt(eventDate[i])) {
      time = eventDate[i];
      break;
    }
  }

  // Convert class time strings to actual dates (doesn't work past midnight yet)
  for(var i=0, l=eventDate.length; i<l; i++){
    for (var x in eventDate) {
      // convert 9  to 09
      if(parseInt(eventDate[i])==9) {
        eventDate[i] = "0" + eventDate[i];
      }
    }
    eventDate[i] = new Date(today+" "+eventDate[i]+":00");
  }


  var currentTime = now.getTime();
  var eventTime = 0;
  for(var i=0, l=eventDate.length; i<l; i++){
    eventTime = eventDate[i].getTime();
    if(eventTime>currentTime) {
      var remTime = eventTime - currentTime;
      break;
    }
  }

  var s = Math.floor(remTime/1000);
  var m = Math.floor(s/60);
  var h = Math.floor(m/60);
  var d = Math.floor(h/24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;


  if(week[day][time] != undefined) {
    document.getElementById("hours").textContent = h + " h";
    document.getElementById("minutes").textContent = m + " m";
    document.getElementById("seconds").textContent = s + " s";
    document.getElementById("nextClass").textContent = week[day][time];
  }


  classId = ["nine", "ten", "eleven", "twelve", "two"];
  var key = 9;
  for (var x in classId) {
    if(week[day][key] != undefined) {
      document.getElementById(classId[x]).textContent = week[day][String(key)];
    } else {
      document.getElementById(classId[x]).innerHTML = `<a href="https://www.youtube.com/watch?v=0wHYHMpHmSg" target="_blank">No Classes, Yay !</a> <img src="https://c.tenor.com/b46GRzAmGeYAAAAj/chika-dance.gif"  width="30" height="30">`;
    }
    if(key !=12) {
      key += 1;
    } else {
      key +=2;
    }
  }

  // Display today classes
//        document.getElementById("nine").textContent = week[day]["9"];
//        document.getElementById("ten").textContent = week[day]["10"];
//        document.getElementById("eleven").textContent = week[day]["11"];
//        document.getElementById("twelve").textContent = week[day]["12"];
//        document.getElementById("two").textContent = week[day]["14"];

  setTimeout(countdown, 1000);
}

countdown();
