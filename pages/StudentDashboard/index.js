import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react";
import { connect, useDispatch } from "react-redux";
import { ADD_COURSE } from "../../redux/actions/student";
import styles from "../../styles/Home.module.css";

import ProfileUser from "../../components/ProfileUser";

const stateToProp = (state) => ({
    state: state,
    DataStudents: state.student
})


function StudentDashboard(props) {
    const dispatch = useDispatch();
    const { state, DataStudents } = props;

    const handleAddCourse = () => {
        dispatch({
            type: ADD_COURSE,
            payload: {
                id: DataStudent.length++,
                name: ""
            }
        })
    }

    
    return (
        <>
            <div className={styles.table_width}>
                <Table variant="striped" colorScheme="teal" size="sm">

                    <Thead >
                        <Th>ID</Th>
                        <Th>STUDENT NAME</Th>
                        <Th>COURSES</Th>
                        <Th>INSTRUCTOR</Th>
                    </Thead>
                    <Tbody >
                        {DataStudents.map((data) => {
                            return (
                                <Tr key={data.id}>
                                    <Td>{data.id}</Td>
                                    <Td><a href={"/student/"+data.student_name}>{data.student_name}</a> </Td>
                                    <Td>
                                        <Tr>
                                            {data.courses.map((each, i) => {
                                                return (
                                                    <Tr key={i}>{i + 1}.<a href={"/course/"+each.name}>{each.name}</a></Tr>
                                                )

                                            })}
                                        </Tr>
                                    </Td>
                                    <Td>
                                        <Tr>
                                            {data.courses.map((each, i) => {
                                                return (
                                                    <Tr key={i}>{i + 1}.<a href={"./instructor/"+each.instructor}>{each.instructor}</a></Tr>
                                                )

                                            })}
                                        </Tr>
                                    </Td>

                                </Tr>
                            )
                        })}

                    </Tbody>



                </Table>
            </div>

        </>
    )

}

export default connect(stateToProp)(StudentDashboard)