function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for (let x in beagle){
  if (beagle.hasOwnProperty(x)){
    ownProps.push(x)
  }else{
    prototypeProps.push(x)
  }
}
