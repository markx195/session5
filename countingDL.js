const s = 'Aloha my friend';
// Thuật toán in
const countData={};
for ( let i = 0; i<s.length;i++){
    const c = s[i].toLowerCase();
    console.log(c);
    if(countData[c]){
        countData[c] ++;
    }else{
        countData[c]=1
    }
    
}
console.log(countData);

