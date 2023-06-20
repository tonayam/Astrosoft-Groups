import React from 'react';

const ContactUs = () => {
  return (
    <main className='contact-us-page'>
      <header>
        <div className='left'>
          <ul>
            <li>Contact us</li>
          </ul>
          <h1>
            <span>Let's make</span>
            <span>your brand brilliant!</span>
          </h1>
        </div>
        <div className='right'>
          <p>
            We help our clients succeed by creating brand identities, digital
            experiences, and print materials that communicate clearly, achieve
            marketing goals, and look fantastic.
          </p>
        </div>
      </header>

      {/* FORM SECTION */}
      <section className='form-section'>
        <div className='info'>
          <button className='transparent'>GET IN TOUCH</button>
          <h2>
            <span>Let's get in</span>
            <span>touch with us.</span>
          </h2>
          <p>
            If you would like to work with us or just want to get in touch, we'd
            love to hear from you!
          </p>
          <h3>+23481818181</h3>
          <div className='socials'>
            <a href='#1'>Facebook</a>
            <a href='#1'>Instagram</a>
            <a href='#1'>Linkendin</a>
            <a href='#1'>Twitter</a>
          </div>
        </div>

        {/* CONTACT US FORM */}
        <div className='form'>
          <form action=''>
            {/* name and email fields */}
            <div className='form-row'>
              <div className='form-control'>
                <input type='text' placeholder='Name' />
              </div>
              <div className='form-control'>
                <input type='email' placeholder='Email' />
              </div>
            </div>

            {/* subject field */}
            <div className='form-control'>
              <input type='text' placeholder='Subject' />
            </div>

            {/* message field */}
            <div className='form-control'>
              <textarea placeholder='Message'></textarea>
            </div>

            {/* submit button */}
            <button className='transparent'>Let's Talk</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
