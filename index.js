function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase("hello"));
}

function logWhisper(string) {
  console.log(string.toLowerCase("HELLO"));
}

function sayHiToHeadphonedRoommate(string) {
  var noAns = "I can't hear you!";
  var yesAns = "YES INDEED!";
  var dinnerAns = "I would love to!";

  if (string.toLowerCase("Hello") === string) return noAns;
  else if (string.toUpperCase("Hello") === string) return yesAns;
  else if ("Let's have dinner together!" === string) return dinnerAns;
}

sayHiToHeadphonedRoommate();
