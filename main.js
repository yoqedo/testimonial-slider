
const persons = [
    {
        img: './images/image-tanya.jpg',
        desc: '“ Ive been interested in coding for a while but never taken the jump, until now. I couldnt recommend this course enough. Im now in the job of my dreams and so excited about the future. ”',
        name: 'Tanya Sinclair',
        role: ' UX Engineer',
    },
    {
        img: './images/image-john.jpg',
        desc: '“ If you want to lay the best foundation possible Id recommend taking this course. The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer. ”',
        name: 'John Tarkpor',
        role: 'Junior Front-end Developer',
    },
]

const img = document.querySelector('.pers-img');
const desc = document.querySelector('.statement');
const famName = document.querySelector('.name');
const role = document.querySelector('.role');

let counter = 0;

window.addEventListener('DOMContentLoaded', function () {
    const person = persons[counter];
    img.src = person.img;
    desc.innerText = person.desc;
    famName.innerText = person.name;
    role.innerText = person.role;
})

document.querySelector('.prev-btn').onclick = function () {
    counter--
    if (counter < 0) {
        counter = persons.length - 1;
    }
    const person = persons[counter];
    img.src = person.img;
    desc.innerText = person.desc;
    famName.innerText = person.name;
    role.innerText = person.role;
}

document.querySelector('.next-btn').onclick = function () {
    counter++
    if (counter === persons.length) {
        counter = 0;
    }
    const person = persons[counter];
    img.src = person.img;
    desc.innerText = person.desc;
    famName.innerText = person.name;
    role.innerText = person.role;
}