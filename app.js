// class User{
//     constructor(mass, height) {
//         mass = 0
//         height = 0
//     }
//     BMI(){
//         return this.mass / this.height ** 2
//     }
// }
// let Mark = new User(78, 1.69)
//
// console.log(Mark.BMI())


const Mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = Math.round(this.mass / this.height ** 2)
        return this.BMI
    }
}
console.log(Mark.calcBMI())


const John = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = Math.round(this.mass / this.height ** 2)
        return this.BMI
    }
}
console.log(John.calcBMI())


let arr = [3, 4, 5];

function avrVal (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i]
    }
    return sum / arr.length
}

console.log(avrVal(arr))
