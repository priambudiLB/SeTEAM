const DataStudent = [
    {
        id: 1,
        student_name: "ben",
        email: "ben@gmail.com",
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
        email: "ron@gmail.com",
        courses: [
            {
                name: "hardware",
                instructor: "ben"
            },
            // {
            //     name: "python3",
            //     instructor: "guido"
            // },
        ]
    }, {
        id: 3,
        student_name: "ken",
        email: "ken@gmail.com",
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
]

export default DataStudent;

/*
<Fragment>
    {attendence.map(person => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        {person.Attendence.map(personAttendendance => {
                            return <th>{personAttendendance.date}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{person.Name}</td>
                        {person.Attendence.map(personAttendendance => {
                            return <td>{personAttendendance.attendence}</td>;
                        })}
                    </tr>
                </tbody>
            </Table>
        );
    })}
</Fragment>
*/


