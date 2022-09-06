
let button=document.querySelector('button');
let outAll=document.querySelector(".outall");
let outSort=document.querySelector(".outsort");
let outSum=document.querySelector(".outsum");
let input=document.querySelector("input");

let arr =[1, 3, 8];
let sortedArray=[];
addNumbers ();
button.addEventListener("click", sumArray);



function addInput (){
    let number = Number(input.value);
    if (Number.isNaN(number)) {
        input.value="";
        sumArray();
        return;
    }
    arr.push(number);
    input.value="";
    addNumbers();
    sumArray();
}

function sumArray(){
    let sum = 0;
    for (let item of arr){
        sum += item;
    }
    outSum.textContent=sum;

sortedArray=[...arr];
sortedArray.sort(function(a,b) {
    return a-b;
});
outSort.textContent= sortedArray;
}
input.addEventListener("change", addInput);

function addNumbers (){
    outAll.textContent="";
    for (let i=0; i<arr.length; i++) {
        let items=arr[i];
        if (i<arr.length-1){
            outAll.textContent+=items+" +";
        }
        else{
            outAll.textContent+=items+" .";
        }
        
    }
}