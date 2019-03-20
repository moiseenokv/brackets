module.exports = function check(str, bracketsConfig) {
    beginLength=str.length;
  for(k=0; k<=bracketsConfig.length-1; k++){   
      var suchen =String(bracketsConfig[k][0]+bracketsConfig[k][1]);
      str = str.replace(suchen,'');
      if(beginLength > str.length && str.length!==0){
          check(str, bracketsConfig);
      }else if(beginLength==str.length && str.length!==0){
          value=false;
      }else{
          value=true;
      }
  }
  return value
}
