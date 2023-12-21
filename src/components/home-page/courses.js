import CourseCard from "./courseCard";
import React, { useState, useEffect } from "react";

const Courses = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://tap-web-1.herokuapp.com/topics/list')
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error("Error fetching courses:", error));
    }, []);

    return (
        <>
            {courses.map((course, idx) => (
                <CourseCard
                    key={course.id}
                    id={course.id}
                    category={course.category}
                    topic={course.topic}
                    name={course.name}
                    idx={idx}
                    courseImage={course.image}
                />
            ))}
        </>
    );
};

export default Courses;
