let username = '';
var userQuestion = "Will I get a new job?";
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = '';

username ? console.log("Hello, " + username + "!") : console.log("Hello!");

console.log('');

console.log(username + "You asked: " + userQuestion);

console.log('');

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
     eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Please shake again';
}

console.log(`The eight ball answered: ${eightBall}`);