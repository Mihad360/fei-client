import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Contact from "./Contact";
import Galleries from "./galleries";
import NewEvents from "./NewEvents";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewEvents></NewEvents>
            <Galleries></Galleries>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;