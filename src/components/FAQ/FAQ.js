import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings} from '../../data/dataStore';

class FAQ extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Hero titleText={settings.faqPage.title} imageSrc={settings.faqPage.imageSrc} />
          Lorem ipsum
        </Container>
      </div>
    );
  }
}

export default FAQ;
