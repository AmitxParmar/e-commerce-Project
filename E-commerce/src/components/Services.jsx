import React from 'react'
import styled from 'styled-components'

import { services } from '../utils/constants';

const Services = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <article className='header'>
                    <h3>
                        custom furniture <br />
                        built only for you
                    </h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero magnam itaque deleniti doloremque cumque molestias aliquid, cupiditate est assumenda aspernatur dolorem sapiente debitis quaerat, impedit quos. A dolorem quia quis.
                    </p>
                </article>
                <div className='services-center'>
                    {services.map(({ id, icon, title, text }) => {
                        return (
                            <article key={id} className='service'>
                                <span className='icon'>{icon}</span>
                                <h4>{title}</h4>
                                <p>{text}</p>
                            </article>
                        )
                    })};
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
h3,
h4 {
    color: var(--clr-primary-1);
}
padding: 5rem 0;

background: var(--clr-primary-10);

.header h3 {
    margin-bottom: 2rem;
}
p{
    margin-bottom:0;
    line-height: 1.8;
    color: var(--clr-primary-3);
}
.services-center {
    margin-top: 4rem;
}
`

export default Services