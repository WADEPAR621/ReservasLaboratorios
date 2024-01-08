import React from "react";

const Card = ({ title, description, img, link }) => { 
    return (
        <div className="card text-center animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={img} alt="" height={200} className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {description}
                </p>
                
            </div>
        </div>
    )
}

export default Card;