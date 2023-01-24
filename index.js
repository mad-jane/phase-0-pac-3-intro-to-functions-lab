function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    logShout = string.toUpperCase();
    string = logShout;
    console.log(logShout)
}

function logWhisper(string) {
    logWhisper = string.toLowerCase();
    string = logWhisper;
    console.log(logWhisper);
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can\'t hear you!";
    } if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}