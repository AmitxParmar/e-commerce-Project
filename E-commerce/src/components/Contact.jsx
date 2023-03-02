import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
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

        </div>
    )
}

export default Contact