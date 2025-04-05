import './ServiceCard.css';

const ServiceCard = ({ title, description, imageUrl }) => {
    return (
      <div className="service-card">
        <img src={imageUrl} alt={title} className="service-image" />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ServiceCard;
  