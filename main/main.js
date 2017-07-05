module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log('o) 最小值 = '+sequence.minimum()+
		'\no)最大值 = '+sequence.maxmu()+
		'\no) 元素个数 = '+sequence.len+
		'\no) 平均值 = '+sequence.average());
};

class Sequence {
  constructor(input) {
      this.len = input.length;
      this.input = input;
  }

  minimum() {
    var min=0;
    for(var i=1;i<this.len-1;i++) {
        if(this.input[i-1]<this.input[i])
        min=this.input[i-1];
	else min=this.input[i];		    
    }
    return min;
  }

  maxmu(){
    var max=0;
    for(var i=0;i<this.len-1;i++) {
        if(this.input[i-1]>this.input[i])
        max=this.input[i-1];
	else max=this.input[i];
    }
    return max;
  }
  average(){
    var sum=0,aver=0;
    for(var i=0;i<this.len;i++) {
        sum=sum+this.input[i];
    }
    aver = sum/this.len;
    return aver.toFixed(2);
  }
}
