import DoctorsSection from '../home/DoctorsSection';
import FaqSection from '../home/FaqSection';
import TestimonialSection from '../home/TestimonialSection';
import Banner from './partials/Banner';
import GastroTreatmentCarousel from './partials/GastroTreatmentCarousel';
import SpecFaq from './partials/SpecFaq';
import StatsSection from './partials/StatsSection';
import './Specialties.css';

const Specialties = () => {
  return (
    <>
    <Banner />
    <StatsSection />
    <GastroTreatmentCarousel />
    <SpecFaq />
    <DoctorsSection />
    <TestimonialSection />
    <FaqSection />
    </>
  );
};

export default Specialties;