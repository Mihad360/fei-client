import Banner from './Banner'
import NewEvents from './NewEvents'
import Galleries from './Galleries'
import AboutUs from './AboutUs'
import Contact from './Contact'

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