import React from "react";
export default function Cards(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--image" alt={props.item.title} />
            <div className="card--info">
                <span>
                    <img src="/images/map.png" className="card--location-icon" alt="Location Icon" />
                    <span className="card--location">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </span>
                <h1 className="card--name bold">{props.item.title}</h1>
                <span className="bold">{props.item.startDate} - {props.item.endDate}</span>
                <span className="card--description">{props.item.description}</span>
            </div>
        </div>
    );
}