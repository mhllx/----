const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }

    }
}
const {name} = stu;
const {hobby:[h1,h2,h3]} = stu;
const {address:{home:HOME}} =stu;
const {title:[,{year}]} = stu;
const {skills:{speak}} = stu; 
const {log} = console;
log(name)  // MING
log(h1,h2,h3)  // play run sing
log(HOME)  // HENAN，这里的HOME就是大写哈
log(year)  // 2022