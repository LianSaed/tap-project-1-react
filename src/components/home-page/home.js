import SearchBarContainer from "./searchBarContainer";
import Courses from "./courses";
import CourseStatement from "./counterStatement";
import React, { useState, useEffect } from "react";
import Loader from "../loader.js";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [counter, setCounter] = useState(0);
    const [uiCourses, setUiCourses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        let searchParams = new URLSearchParams({ phrase: search })
        fetch(`https://tap-web-1.herokuapp.com/topics/list?${searchParams}`)
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .then(setLoad(false))
            .catch((error) => console.error("Error fetching courses:", error));
    }, [search]);

    useEffect(() => {
        if (courses) {
            const filteredCourses = courses.filter((course) => {
                if (filter && filter !== 'Default') {
                    return course.category === filter
                }
                return true;
            }).sort((a, b) => {
                if (sort && sort !== 'Default') {
                    switch (sort) {
                        case 'author':
                            return a['author'] > b['author'] ? 1 : -1;
                        case 'topic':
                            return a['topic'] > b['topic'] ? 1 : -1;
                        default:
                            return 0;
                    }
                }
            });

            setUiCourses(filteredCourses);
            setCounter(filteredCourses.length);
        }
    }, [courses, sort, filter]);

    return (
        <>
            <SearchBarContainer categories={categories} searchVal={search} onSearch={setSearch} filterVal={filter} onFilter={setFilter} sortVal={sort} onSort={setSort} />
            <CourseStatement counter={counter} />
            {load ? <Loader /> : <Courses courses={uiCourses} />}
        </>
    );
};

export default Home;
