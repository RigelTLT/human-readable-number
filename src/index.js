module.exports = function toReadable (number) {
  let str= String(number);
  let str_array = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
    "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let num_one, num_two, num_three, num_string="";
    if(number >= 100){
        num_one =str.substr(0, 1);
        num_one = str_array[Number(num_one)] + " hundred";
        str= str.substr(1, 3);
    }
    else{
        num_one="";
    }
    if(Number(str) > 19){
        num_two =str.substr(0, 1);
        num_two = str_array[Number("2"+num_two)];
        str= str.substr(1, 2);
        if(Number(str) > 0){
        num_three = str_array[Number(str)];
    }
    else{
        num_three="";
    }
    }
    else if(Number(str) > 0){
        num_two=str_array[Number(str)];
        num_three="";
    }
    else if(number == 0){
        num_two=str_array[Number(str)];
        num_three="";
    }
    else {
        num_two="";
        num_three="";
    }

    if(num_one!="" && (num_two!="" ||  num_three!="")){
        num_string+=num_one+" ";
    }
    else{
        num_string+=num_one;
    }
    if(num_two!="" && num_three!=""){
        num_string+=num_two+" ";
    }
    else{
        num_string+=num_two;
    }
    num_string+=num_three;
    return num_string;
}
