import Certifications from '../components/Certifications.jsx';
import ProgressTracker from '../components/ProgressTracker.jsx';

import '../assets/styles/pages/Academics.css'

const Academics = () => {
    return (
        <section id="academics">
            <h1>My Academic Achievements</h1>
            <Certifications />

            <h2>What I'm Learning</h2>
            <ProgressTracker />
        </section>
    );
};

export default Academics