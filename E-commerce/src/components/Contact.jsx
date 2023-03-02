import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Wrapper>
            <div className='section-center'>
                <h3>Join out newsletter and get 25% off</h3>
                <div className='content'>
                    <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae excepturi nesciunt debitis consequuntur laboriosam reprehenderit voluptatum rerum assumenda non tempore! Voluptatem sint consequuntur suscipit debitis reprehenderit perferendis, omnis voluptatibus velit.
                    </p>
                    <form
                        method='POST'
                        action='https://formspree.io/f/myyajjyq'
                        className='contact-form'
                    >
                        <input
                            type='email'
                            name='_replyto'
                            placeholder='enter email'
                            className='form-input'
                        />
                        <button type='submit' className='submit-btn'>
                            subscribe
                        </button>
                    </form>
                </div>
                <div className='section-center'
                    style={{
                        textAlign: "center",
                        alignItems: "center",
                        alignContent: "center",
                        marginTop: "50px"
                    }}
                >
                </div>
                {/* NOTE: Theme change component goes here */}
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.section`
padding: 5rem 0;
h3 {
    text-transformation: none;
}
p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
}
.contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
}
.font-input,
.submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
}
.form-input {
    border-right: none;
    border-top-lef-radius: var(--radius);
}
.submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
}
.form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
}
.submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
}
.submit-btn:hover {
    color: var(--clr-white);
}
@media (min-with: 992px) {
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 8rem;
        margin-top: 2rem;
    }
    p {
        margin-bottom: 0;
    }
}
@media (min-width: 1280px) {
    padding: 15rem 0 5rem 0;
}
`

export default Contact