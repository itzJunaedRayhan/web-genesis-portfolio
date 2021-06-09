import React, { useState } from 'react';
import './ProjectGallery.css'
import Menu from '../ProjectFakeData/ProjectFakeData'
import { Link } from 'react-router-dom';

const ProjectGallery = () => {
    const [items, setItems] = useState(Menu);
    const filterItem = (categItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
    return (
        <>
            <div className="menu-tabs container">
                <div className="menu-tab p-2">
                    <button  onClick={() => setItems(Menu)}>All</button>
                    <button  onClick={() => filterItem('latest')}>Latest</button>
                    <button  onClick={() => filterItem('popular')}>Popular</button>
                    <button  onClick={() => filterItem('upcoming')}>Upcoming</button>
                    <button  onClick={() => filterItem('following')}>Following</button>
                </div>
            </div>


            <div className="menu-items container mt-5">
                        <div className="row" >
                            {
                                items.map((elem) => {
                                    const { id, name, image, category, github, live } = elem;
                                    console.log(`${image}`)
                                    return (
                                        <div className="col-lg-4 col-md-6 col-sm-4 col-xs-12">
                                            <Link to={`/projects/projectDetails/${id}`}>
                                                <div className="project">
                                                    <div className="project-image">
                                                        <a href={live}  target="_blank"  rel="noreferrer" >
                                                            <img src={image} alt="not found" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
            </div>
        </>
    );
};

export default ProjectGallery;