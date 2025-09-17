//for in
    const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObject) {
    //console.log(key); //in this you only get keys
    //console.log(myObject[key]);//in this you get values
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

//can we use for in for array
const prog=["js","rb","py","java"]

for(const key in prog){
    console.log(prog[key]);
    console.log(key);//output:0  1  2  3
}

const map=new Map()
map.set('IND',"INDIA")
map.set('USA',"united state of america")
map.set('FR',"FRANCE")
 for(const key in map){
    console.log(key);//no output
}

