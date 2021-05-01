import React from 'react';
import './Testimonials.css'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import client1 from '../../../images/Testimonial/client-1.jpg'
import client2 from '../../../images/Testimonial/client-2.jpg'
import client3 from '../../../images/Testimonial/client-3.jpg'
import client4 from '../../../images/Testimonial/client-4.jpg'
import client5 from '../../../images/Testimonial/client-5.jpg'
import Testimonial from '../Testimonial/Testimonial';
const testimonialData = [
    {
        image       : client1,
        text        : 'Donec eu est vel metus consequat volupat. Nunc aii-quet euismod mauris, a feugiat urna ullamcorper non. ',
        name        : 'Bruce Wane',
        profession  : 'Businessman'
    },
    {
        image       : client2,
        text        : 'Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.',
        name        : 'Wanda Maximoff',
        profession  : 'Fighter'
    },
    {
        image       : client3,
        text        : 'Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.',
        name        : 'Stiven Rogers',
        profession  : 'Captain'
    },
    {
        image       : client4,
        text        : 'Donec eu est vel metus consequat volupat. Nunc aii-quet euismod mauris, a feugiat urna ullamcorper non.',
        name        : 'Natasha Romanoff',
        profession  : 'Agent'
    },
    {
        image       : client5,
        text        : 'Nam tempor commodo mi id sodales. Aenean sit amet nibh nec sapien consequat porta a sit amet diam.',
        name        : 'Princes Diana',
        profession  : 'Wonder woman'
    }
]
const Testimonials = () => {
    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            },
        },
    }
    return (
        <section className="testimonial-section">
            <h2>Testimonial</h2>
            <OwlCarousel items="2" className="owl-theme" loop={true} margin={10} nav responsive={state.responsive}>
                {
                    testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                }
            </OwlCarousel>
        </section>
    );
};

export default Testimonials;