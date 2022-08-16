const rand = [
    'younes sheiklar',
    'tirdad jam',
    'mohsen sheikhlar',
    'hosein sheikhlar',
    'maryam sheikhlar',
    'tina basiri'
]

const para = document.querySelector('#paragraph');
const randBtn = document.querySelector('#randbtn');

randBtn.addEventListener('click',function(){
    let randNum = Math.floor(Math.random() * 6);
    para.innerHTML = rand[randNum]
})


let i = 0;

while (i < 20){
    i++
    
    if (i % 2 == 0 && i !== 10){
        console.log(i)
    }
  
}




for(let i = 0 ; i < 20 ; i++ , i % 2 == 0 ){
    console.log(i)
}