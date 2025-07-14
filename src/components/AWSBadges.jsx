import "../assets/styles/components/AWSBadge.css"
import awsBadge from "../assets/images/aws-cloud-quest-cloud-practitioner.png"

const AWSBadges = () => {
    return (
    <section id="aws-badges">
        <h2>AWS Badges</h2>
        <div className="badge-gallery">
            <img 
                src={awsBadge}
                alt="AWS Cloud Practitioner Badge"
            />
        </div>
    </section>
    );
};

export default AWSBadges