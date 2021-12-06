const DataInstructor = [
    {
        id: 1,
        name: "ben",
        as: "instructor",
        courses: [
            {
                name: "data structure",
                student: [
                    "john", "eki", "rian"
                ]
            },
        ]
    },
    {
        id: 2,
        name: "coki",
        as: "instructor",
        courses: [
            {
                name: "database",
                student: [
                    "john", "toni"
                ]
            },
        ]
    },
];
<<<<<<< HEAD


=======
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
const DataStudent = [
    {
        id: 1,
        name: "john",
        join_course: [
            {
                name: "data structure",
                instructor: "ben",
                finish: false
            },
            {
                name: "database",
                instructor: "coki",
                finish: true
            },
        ]
    },
    {
        id: 2,
        name: "toni",
        join_course: [
            {
                name: "database",
                instructor: "coki",
                finish: false
            },
        ]
    }
]
<<<<<<< HEAD


=======
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
const copy = [...DataStudent];

copy.forEach((currData, i, arr) => {
    if (currData.id === 1) {
        console.log(currData.student_name);
    }
<<<<<<< HEAD

=======
>>>>>>> 6d75f4b4d7c0f3be9dfa502f6ff7df5cf57b2d7a
})