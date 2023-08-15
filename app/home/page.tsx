
import { Footer, Navbar } from '../components/framer motion';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../../sections/framer sections';

const Page = () => (
  <div className=' bg-blue-900 overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />    
<div className=' gradient-03 z-0'/>
    <Explore />
</div>
<div className='relative'>
    <GetStarted />
    <div className=' gradient-04 z-0'/>   
    <WhatsNew />
    </div>
    <World />
    <div className='relative'>
    <Insights />
    <div className=' gradient-05 z-0'/>      
    <Feedback />      
    </div>
    <Footer />
  </div>
);

export default Page;
