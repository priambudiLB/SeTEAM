import { Wrap, WrapItem, Text, Center, Flex, Box, Heading, Container, Stack } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { Badge } from "@chakra-ui/layout"
import { StarIcon } from "@chakra-ui/icons"
import { useContext } from 'react';
import { VidCoursesContextProvider } from "../context/AddVideoContext";
import CoursesData from "../components/CoursesData";
import { useState, useEffect } from "react";


export default function AvailableCourses() {

    // get all registered course from firebase db
 

        const [isLoading, setIsLoading] = useState(true)
        const [loadedCourses, setLoadedCourses] = useState([]);
        // technically JAVASCRIPT doesnt wait this promise 'fetch' to complete
        // before return, BUT COULD NOT use ASYNC in react component
        // solution ---> using useState() to get the data of fetch responsze

        useEffect(() => {
            setIsLoading(true);
            fetch('https://auth-sinau-cp10-default-rtdb.firebaseio.com/indexCourses.json')
                .then(responses => {
                    return responses.json();
                })
                .then(data => {
                    // we can work with this data fethced from firebase'

                    const coursesData = [];
                    for ( const key in data) {
                        const courseData = {
                            id: key,
                            ...data[key]
                        }
                        coursesData.push(courseData)
                    }
                    setIsLoading(false)
                    setLoadedCourses(coursesData);

                })
            if (isLoading) {
               return ( <section>
                    <p>Loading...</p>
                </section>)
            }
        }, [])

    


    return (
        <>
            <section>

                <CoursesData availVideos={loadedCourses} />
            </section>

        </>

    )
}