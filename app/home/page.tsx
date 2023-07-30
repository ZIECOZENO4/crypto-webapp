import { Footer, Navbar } from '../components/framer motion';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../sections/framer sections';

const Page = () => (
  <div className=' bg-blue-900'>
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
  </div>
);

export default Page;
