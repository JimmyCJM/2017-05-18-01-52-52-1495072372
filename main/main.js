module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum());
    console.log(`o) 最大值 = ${sequence.maxmum());
    console.log(`o) 最小值 = ${sequence.average());
};

class Sequence {
  constructor(input) {
    this.len = input.length;
    this.input = input;
  }

  minimum() {
      var min=this.input[0];
      for(var i=1;i<this.len;i++) {
          if(this.input[i]<min)
              min=this.input[i];
  }
      
  maxmu(){
    var max=this.input[0];
    for(var i=1;i<this.len;i++) {
        if(this.input[i]>max)
        max=this.input[i];
    }
    return max;
  }
      
  average(){
	  var av=0;
	  for(var i=0;i<this.len;i++) {
        av=av+this.input[i];
    }
    return (av/this.len).toFixed(2);
  }
}
