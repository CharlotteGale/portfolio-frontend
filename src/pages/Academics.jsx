import Certifications from '../components/Certifications.jsx';
import ProgressTracker from '../components/ProgressTracker.jsx';

import '../assets/styles/pages/Academics.css'

const Academics = () => {
    return (
        <section id="academics">
            <h2>My Academic Achievements</h2>
            <Certifications />

            <h3>What I'm Learning</h3>
            <ProgressTracker />
        </section>
    );
};

export default Academics