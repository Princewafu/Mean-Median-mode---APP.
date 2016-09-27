Framework7.prototype.plugins.math = function (app, params) {
    if (!params) return;

    var stat = function(){
    	'use strict';
    	return {
            mean:function(num){
            	var y = 0;
            	$.each(num,function(a,b){
            		y = y + b;
            	})
            	return y/num.length;
            },
           median: function(numbers) {
                var median = 0,
                numsLen = numbers.length;
                numbers.sort();
                if (numsLen % 2 === 0)
                    {
                        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
                } else 
                    { median = numbers[(numsLen - 1) / 2];
            }
                return median;
       },   
               mode: function(numbers){
                var modes = [],
                count = [],
                jemz,
                number,
                maxLength = 0;
                for (jemz = 0; jemz < numbers.length; jemz += 1) {
                    number = numbers[jemz];
                    count[number] = (count[number] || 0) + 1;
                    if (count[number] > maxLength) {
                        maxLength = count[number];
                    }
                }
                for (jemz in count) if (count.hasOwnProperty(jemz)) {
                    if (count[jemz] === maxLength) {
                        modes.push(Number(jemz));
                    }
                }
                return modes;
        }

    }
}();

    return {
        hooks: {
            appInit: function () {
                $$("#btn_calc").click(function(){
                    var input = $$("#input_ages").val().split(',');
                    $$.each(input,function(a,b){
                        input[a] = parseInt(input[a]);
                    });
                    
                    $$("#statSolutions").html("Mean: "+stat.mean(input)+"<br/>Median: "+stat.median(input)+"<br/>Mode: "+stat.mode(input)+"");
                });
            }
        }
    };
};

var $$ = Dom7;

var app = new Framework7({
	material:true,
	math:true
});



// 2 classifications of functions
// 1. named function

// 2. anonymous function

// 	appInit: function () {
// 	    console.log ('appInit');
// 	}
