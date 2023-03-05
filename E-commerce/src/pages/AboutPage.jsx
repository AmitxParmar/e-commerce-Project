import React from "react";
import styled from "styled-components";

import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {

  React.useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="heroimage" className="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Our story began with a simple idea - to create a platform where people could find high-quality products at affordable prices. We started small, with just a handful of items, but over time we grew and expanded our selection to meet the needs of our customers. Today, we are proud to offer a wide variety of products from some of the best brands in the industry. We are committed to providing exceptional customer service and ensuring that every transaction is a positive experience. Our passion for quality and affordability drives everything we do, and we look forward to continuing to serve our customers for many years to come.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
