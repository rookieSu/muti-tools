function component(){
  this.data = this.data()
}
component.prototype.data = function(){return {a:1}}
let componentA = new component()
let componentB = new component()
componentA.data.a++
console.log(`output->componentA.data.a, componentB.data.a`,componentA.data.a, componentB.data.a)