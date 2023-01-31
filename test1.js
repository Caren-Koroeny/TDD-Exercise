function stringLength(string){
   let count = 0;
   if(string.length >= 1 && string.length <= 10){
    string.split('').forEach(() => count++)
    return count;
   }else{
    return;
   }
};

module.exports = stringLength;