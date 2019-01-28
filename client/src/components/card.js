import React from 'react';

const Card = ({title, description, recipe, recipeClicked}) => (
    <div>
        <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary" onClick={(e) =>  {e.preventDefault(); recipeClicked(recipe[0])}}>Go somewhere</a>
            </div>
        </div>
    </div>
);

export default Card;