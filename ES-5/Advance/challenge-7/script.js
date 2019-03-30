(function() {

    function questions (question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }
    
    questions.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answer.length; i++) {
            console.log(`${i} : ${this.answer[i]}`);
        }
    }
    
    questions.prototype.checkAnswer = function (ans, callback) {
        var sc;
        if (ans === this.correct) { 
            console.log('Congratulation, Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer, please try again!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    questions.prototype.displayScore = function (score) {
        console.log(`Your current score is: ${score}`);
        console.log('-------------------------------------');
    }
    
    var q1 = new questions('Is JavaScript is the coolest programming language in the world?', ['yes', 'no'], 0);
    var q2 = new questions('What is the name of this course teacher?', ['ahr', 'john', 'nd'], 1);
    var q3 = new questions('What does best describing coding?', ['hard', 'funny', 'awesome', 'boring'], 2);
    
    var question = [q1, q2, q3];

    function score () {
        var sc = 0;
        return function (correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion () {
        var n = Math.floor(Math.random() * question.length);
        question[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if (answer !== 'exit') {
            question[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();