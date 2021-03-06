# Simple countdown clock



This is a simple countdown clock that will slowly tick away until it hits 0.

It does this by comparing current time with a target every second and then displaying the difference. I chose this method because it is very simple and straight forward. Also because having a "true" time as a target helps the clock self correct itself if it gets tripped up on an interval. (Timeouts and intervals can flucuate, but the target time is set in stone and so when the clock checks itself against the target it will always get the actual time left between now and the time the user set as the target.)

The next steps for improvement would be to potentially store the target time so that it doesn't reset when the page is changed or navigated away from. Also optimizing the countdown to only be active when there is a count.

I have hosted it at bpatalano-countdown.herokuapp.com, but if you want to run it locally the instructions are:

- clone the repo
- run `npm install` in the cloned file in the terminal
- then run `node server.js`
- navigate to localhost:1337
- and there it is
