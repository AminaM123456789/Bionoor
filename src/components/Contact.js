import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaPhoneVolume, FaEnvelope } from 'react-icons/fa';
import './StyleContact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setErrorMessage('Please fill in all the required fields');
    } else {
      // Handle form submission
      setErrorMessage('');
    }
  };

  return (
    <Container>

      <Row>
        <Col >
          <div id='text_intro' sm={12} lg={12} >
          <h2>Vous possédez déjà votre formule?</h2>
            <p>Notre service est à votre disposition pour répondre à vos questions </p>
          </div>
        </Col>
      </Row>

      <Row className='row'>

        {/* Container de gauche */}
        <Col className='container1' orderLast>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13295.555947916006!2d-7.6327648!3d33.5822315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d313aa5cea01%3A0x2aea631a56760fd9!2sBIONOOR%20COSMETICS%20Morocco!5e0!3m2!1sen!2sma!4v1681751811603!5m2!1sen!2sma" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div id='frame_contacts'>
            <div id='contact'>
              <div id='icon'>
                <FaPhoneVolume />
              </div>
              <div id='info'>
                <span className='p_titre'>Service Clients1</span>
                <span className='p_titre2'>+212 522 986 494</span>
              </div>

            </div>

            <div id='contact'>
              <div id='icon'>
                <FaPhoneVolume />
              </div>
              <div id='info'>
                <span className='p_titre'>Service Clients2</span>
                <span className='p_titre2'>+212 661 197 373</span>
              </div>

            </div>

            <div id='contact'>
              <div id='icon'>
                <FaPhoneVolume />
              </div>
              <div id='info'>
                <span className='p_titre'>Service Clients3</span>
                <span className='p_titre2'>+212 661 218 788</span>
              </div>

            </div>

            <div id='contact'>
              <div id='icon'>
                <FaEnvelope />
              </div>
              <div id='info'>
                <span className='p_titre'>Email</span>
                <span className='p_titre2'>contact@bionoor.ma</span>
              </div>

            </div>

          </div>
        </Col>


        {/* Container de droite */}

        <Col  className='' orderFirst>
          <div className='container2'>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Nom</label>
                <input
                  type='text'
                  id='name'
                  name='nom'
                  className='form-control'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='form-control'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='subject'>Objet</label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='form-control'
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  className='form-control'
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              {errorMessage && <div className='error-message'>{errorMessage}</div>}
              <button type='submit'><p>Envoyer</p></button>
            </form>
          </div>

        </Col>
      </Row>
      <br></br><br></br>


    </Container>
  );
}

