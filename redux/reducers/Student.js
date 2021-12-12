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
    }, 
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