import DataStudent from "./GlobalData";
import { ADD_COURSE } from "../actions/student";
const DataStudent_ = DataStudent
/*
const DataStudent_ = [
    {
        id: 1,
        student_name: "ben",
        courses: [
            {
                name: "dsa",
                instructor: "ron"
            },
            {
                name: "python3",
                instructor: "guido"
            },
        ]
    }, {
        id: 2,
        student_name: "ron",
        courses: [
            {
                name: "hardware",
                instructor: "ben"
            },
            {
                name: "python3",
                instructor: "guido"
            },
        ]
    }, {
        id: 3,
        student_name: "ken",
        courses: [
            {
                name: "dsa",
                instructor: "ron"
            },
            {
                name: "hardware",
                instructor: "ben"
            },
        ]
    }
];
*/
const student = (state=DataStudent_, action) => {
    console.log(action.type);

    switch (action.type) {
        case ADD_COURSE:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default student;