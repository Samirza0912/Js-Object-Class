/*1) Bir class yaradirsiz 
ve o classin icerisinde plus, minus, multiply, divide functionlari olur.
var result = new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)
resultin neticesi bu yazilisa gore 50+6-30*3/2 mentiqi ile (riyazi prinsibi unudun,vurma bolme onceliyine ehtiyac yoxdu) 39 olmalidi */

class Calculator {
    constructor(CustomMatch){
        this.CustomMatch=CustomMatch;
    }
    Plus(n){
        this.CustomMatch+=n;
        return this;
    }
    Minus(n){
        this.CustomMatch-=n;
        return this;
    }
    Divide(n){
        this.CustomMatch/=n;
        return this;
    }
    Multiply(n){
        this.CustomMatch*=n;
        return this;
    }

}
var result = new Calculator(51).Plus(6).Minus(30).Multiply(3).Divide(2)
console.log(result);

/*2) Custom bir array classi yaradin. Hemin arrayin find ve push metodu olsun. Taski ishleyib turn in edin. */

class Array{
    constructor (arr, items){
        this.arr=arr;
        this.items=items;
    }
    Find(id){
        let result
        for (let i = 0; i < this.arr.length; i++) {
            if(this.arr[i] == id)
            {
                result=[i];
                return result;
            }
            }
        return result;
    }
    // i=0;
    Push(num){
        // this.items[index]=item;
        // return this.items;
        
        

        //     this.arr[this.i] = num

        //     this.i++
        //  return this.arr
        // this.arr[length]=num
        // this.arr[length++]
        // return this.arr
    }
}
let arr=new Array([10,2,3,4,5,6,7,78])
arr.Find(78);
arr.Push(77);
console.log(arr);