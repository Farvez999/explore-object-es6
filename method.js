const student = {
    name: 'Kadom Ali',
    selary: 5000,
    study: 'Math',
    subjects: ['Bangla', 'English'],
    exam: function () {
        return this.name + 'is khub valo manus';
    }
}

const output = student.exam();
console.log(output)