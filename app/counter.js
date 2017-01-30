let $day = $('#day');
let $hour = $('#hour');
let $minute = $('#minute');
let $second = $('#second');
let $times = $('.count-box > input');
let targetTime
let editing = false;
$times.on('blur', () => {
  editing = false;
  setTargetTime($day.val(), $hour.val(), $minute.val(), $second.val());
});
$times.on('focus', () => {
  editing = true;
});

let setTargetTime = (day, hour, minute, second) => {
  day = day * 86400000;
  hour = hour * 3600000;
  minute = minute * 60000;
  second = second * 1000;
  let now = Date.now();
  timeToAdd = day + hour + minute + second;
  targetTime = new Date(now + timeToAdd);
}

let changeTime = () => {
  if (!editing) {
    let newTime = targetTime - Date.now();
    let day = Math.floor(newTime/86400000);
    newTime = newTime % 86400000;
    let hour = Math.floor(newTime/3600000);
    newTime = newTime % 3600000;
    let minute = Math.floor(newTime/60000);
    newTime = newTime % 60000;
    let second = Math.floor(newTime/1000);
    if (newTime <= 0) {
      return;
    }
    else if (!isNaN(newTime)) {
      updateClock(day, hour, minute, second);
    }
  }
}

let updateClock = (day = 0, hour = 0, minute = 0, second = 0) => {
  $day.val(day);
  $hour.val(hour);
  $minute.val(minute);
  $second.val(second);
}

setInterval(changeTime, 1000);
