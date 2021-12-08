// Soal 1
console.log('-------Soal 1-------')
console.log('\n---Release 0---')
class Animal {
    // Code class di sini
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name;
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
sheep.legs = 3
console.log(sheep.legs)

console.log('\n---Release 1---')
// Code class Ape dan class Frog di sini

class Ape extends Animal{
    constructor(name){
        super()
        this.name = name;
        this.sound = "Auoo"
    }
    yell(){
        return console.log(this.sound)
    }
}

class Frog extends Animal{
    constructor(name){
        super();
        this.name = name;
        this.sound = "hop hop"
    }
    jump(){
        return console.log(this.sound)
    }
}


var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
sungokong.legs = 2
console.log(sungokong.name)
console.log(sungokong.legs)
console.log(sungokong.cold_blooded)


var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.name)
console.log(kodok.legs)
console.log(kodok.cold_blooded)

// Soal 2
console.log('\n-------Soal 2-------')

class Clock {
    constructor({ template }){
        this.template = template;
    }
    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);
    
        console.log(output);
      }
    
      stop() {
        clearInterval(this.timer);
      }
    
      start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
      }
    }
    var clock = new Clock({template: "h:m:s"});
    clock.start()