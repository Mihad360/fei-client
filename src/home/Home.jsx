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
            <Contact></Contact>
        </div>
    );
};

export default Home;