    <script>
        /**
         * Interval Demonstration
         **/

        // Set our number counter to 60.
        var number = 60;
		var	correctAnswers = 0;
		var wrongAnswers = 0;
		var unanswered = 0;


        $('#stop').click(function(){
        	stop();
        	submitClick();
        });

        function run(){
            counter = setInterval(decrement, 1000);
        }




        // The decremeent function.
        function decrement(){
            // Decrease number by one.
            number--;
            // Show the number in the #show-number tag.
            $('#show-number').html('<h2>' + number + '</h2>');

            // Once number hits zero...
            if (number === 0){
                // ...run the stop function.
                stop();
                // Alert the user that time is up.
                alert('Times Up!');
                submitClick();
            }
        }



        // The stop function
        function stop(){
            // Clears our "counter" interval.
            // We just pass the name of the interval
            // to the clearInterval function.
            clearInterval(counter);
        }

		function submitClick(){

			correctAnswers = 0;
			wrongAnswers = 0;
			for (var i=1; i<11; i++){
				var radios = document.getElementsByName('group'+i);
				for (var j = 0; j<radios.length; j++){
					var radio = radios[j];
					if (radio.value == "correct" && radio.checked){
						correctAnswers++
					}else if (radio.value == "wrong" && radio.checked){
						wrongAnswers++
					
					}

					}
				}

			$('.correct').html("Correct Answers: " + correctAnswers);
			$('.wrong').html("Wrong Answers: " + wrongAnswers);
			$('.unanswered').html("Not Answered: " + unanswered);

			}


        // Execute the run function.
        run();


    </script>