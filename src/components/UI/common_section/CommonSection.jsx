import React from 'react';
import { Container } from 'reactstrap';
import '../../styles/common_section.css';

const CommonSection = (props) => {
  return (
    <>
        <section className="common_section">
            <Container>
                <h2>{ props.title }</h2>
            </Container>
        </section>
    </>
  )
}

export default CommonSection