
import FeaturedColleges from '../../Components/Home/FeaturedColleges/FeaturedColleges';
import Gallery from '../../Components/Home/Gallery/Gallery';
import Hero from '../../Components/Home/Hero/Hero';
import ResearchPapers from '../../Components/Home/ResearchPapers/ResearchPapers';
import Reviews from '../../Components/Home/Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedColleges />
            <Gallery />
            <ResearchPapers />
            <Reviews />
        </>
    );
};

export default Home;