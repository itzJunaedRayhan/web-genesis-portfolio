import React from 'react';
import './ContactForm.css'
import emailjs from 'emailjs-com'
const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('web-genesis', 'template_kjb9x0f', e.target, 'user_6FBWWwMw6CuGrmhSpmscx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          alert("Your Message Sent Successfully!")
    }
    return (
            <>  
                
                <form class="my-form" onSubmit={sendEmail}>
                    <h1 className="text-center">Get In Touch</h1>
                    <ul>
                        <li>
                            <div class="grid grid-2">
                                <input type="text" placeholder="First Name" name="first-name" required />
                                <input type="text" placeholder="Last Name" name="last-name" required />
                            </div>
                        </li>
                        <li>
                            <div class="grid grid-2">
                                <input type="email" placeholder="Email" name="email" required />
                                <input type="text" placeholder="Subject" name="subject" required />
                            </div>
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="checkbox" id="terms" />
                            <label for="terms">I have read and agreed with <a href="">the terms and conditions.</a></label>
                        </li>
                    </ul>
                    <button type="submit" className="contactFormBtn">Submit</button>
                </form>
            </>
    );
};

export default ContactForm;