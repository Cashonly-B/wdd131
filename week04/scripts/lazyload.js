let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
      street: "123 Camino Real",
      city: "Santa Rosa",
      country: "Honduras"
    },
    isEmployed: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };

  console.log(person.hobbies[0]); // Output: reading
  console.log(`Welcome to the ${courseName} ${stuFirstName}!`);

  //===================================

const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {
            sectionNum: 1, 
            roomNum: 'STC 353',
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: 'STC 347',
            enrolled: 25,
            days: "MW",
            instructor: "Sis A",
        },
    ],
};

function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

setCourseInfo(aCourse);
renderSections(aCourse.sections);