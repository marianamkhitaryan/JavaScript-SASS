// HOME

var  home = {
    street: "Baghramyan",
    number: 21,
    area: "35 square meters",
    builder: {
        name: "Poghos Poghosyan",
        year: 1970,
        day: 27,
        month: "September",
    }
}

console.log(home);
console.log(home.builder);
console.log(home.builder.name);


// LAPTOP

var laptop = {
    model: "HP",
    year: 2019,
    color: "gray",
    owner: {
        girl: false,
    }
}

console.log(laptop);
console.log(laptop.model);
console.log(laptop.color);
console.log(laptop.owner);


// SCHOOL

var school = {
    gardes: "from 1 to 12",
    marks: "from 1 to 10",
    students: {
        number: 1000,
        girls: 500,
        boys: 500, 
    },
    lastgrade: {
        birthyear: 2004,
    },
    teachers: {
        ages: "from 25 to 50",
        education: "high",
    }
}

console.log(school)
console.log(school.students)
console.log(school.students.number)
console.log(school.lastgrade)
console.log(school.teachers)
console.log(school.teachers.education)


// BOOK

var book = {
    genre: "historical fiction",
    author: "Muratsan",
    title: "Gevorg Marzpetuni",
    type: "novel",
    appeared: {
        year: 1896,
        journal: {
            name: "Ardzagank",
            type: "Tiflis-based Armenian",
        }
    },
    published: {
        year: 1912,
    }
}

console.log(book)
console.log(book.author)
console.log(book.title)
console.log(book.type)
console.log(book.appeared)
console.log(book.appeared.year)
console.log(book.appeared.journal)
console.log(book.published)


// BOX

var box = {
    outside: {
        height: "30cm",
        width: "40cm",
        length: "20sm",
        color: "red",
    },
    inside: {
        color: "black",
        content: "toys",
    }
}

console.log(box)
console.log(box.outside)
console.log(box.inside)
console.log(box.outside.color)
console.log(box.outside.height)
console.log(box.inside.content)
console.log(box.inside.color)


