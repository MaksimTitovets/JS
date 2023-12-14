/*
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}

sortStudentsByGroups(students);

*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let a1 = [], a2 = [], a3 = [], a4 = arr.slice(9);
    for (let i = 0; i < 3; i++) {
        a1.push(arr[i]);
        a2.push(arr[i+3]);
        a3.push(arr[i+6]);
    }
    if (!a4[0]) return [a1, a2, a3, 'Оставшиеся студенты: -']
    else return [a1, a2, a3, `Оставшиеся студенты: ${a4.join(', ')}`]
}
