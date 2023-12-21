import Header from "../header/header";
import CoursesContainer from "./coursesContainer";
import SearchBarContainer from "./searchBarContainer";
import '../../variables.css';

const Home = () => (
    <>
        <Header />
        <SearchBarContainer />
        <CoursesContainer />
    </>
);
export default Home;