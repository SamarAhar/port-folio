import React, { useContext, useState } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

// import { Toaster } from 'react-hot-toast'

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';

export const Contacts = () => {

    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

  return (
    <div
        className='contacts flex flex-col items-start justify-start relative min-h-[100vh] '
        id='contacts'
        style={{ backgroundColor: theme.secondary }}
    >
        <div className='contacts--container flex flex-col items-start justify-start pt-[2rem] pl-[6rem] pb-[3rem] w-[73%] h-full mt-[2rem] '>
            <h1 className='text-[3.5rem] mb-[2.5rem] ' style={{ color: theme.primary }}>Contacts</h1>
            <div className='contacts-body flex flex-row items-start justify-start '>
                <div className='contacts-form flex flex-[0.4] '>
                    <form onSubmit={handleContactForm}>
                        <div className='input-container w-full '>
                            <label htmlFor='Name' className='bg-[#212121] text-[#f56539] font-[600] text-[0.9rem] p-[0.5px] transform translate-x-[25px] translate-y-[50%] inline-flex '>
                                Name
                            </label>
                            <input
                                placeholder='Full name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type='text'
                                name='Name'
                                className='form-input border-[4px] border-[#f56539cc] bg-[#212121] text-[#eaeaea] font-[500] transition-[border] duration-200 ease-in-out '
                            />
                        </div>
                        <div className='input-container w-full '>
                            <label
                                htmlFor=' Email '
                                className='bg-[#212121] text-[#f56539] font-[600] text-[0.9rem] p-[0.5px] transform translate-x-[25px] translate-y-[50%] inline-flex '
                            >
                                Email
                            </label>
                            <input
                                placeholder='John@doe.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type='email'
                                name='Email'
                                className='form-input border-[4px] border-[#f56539cc] bg-[#212121] text-[#eaeaea] font-[500] transition-[border] duration-200 ease-in-out '

                            />
                        </div>
                        <div className='input-container w-full '>
                            <label
                                htmlFor='Message'
                                className='bg-[#212121] text-[#f56539] font-[600] text-[0.9rem] p-[0.5px] transform translate-x-[25px] translate-y-[50%] inline-flex '
                            >
                                Message
                            </label>
                            <textarea
                                placeholder='Type your message....'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                type='text'
                                name='Message'
                                className='form-message border-[4px] border-[#f56539cc] bg-[#212121] text-[#eaeaea] font-[500] transition-[border] duration-200 ease-in-out '
                            />
                        </div>

                        <div className='submit-btn'>
                            <button
                                type='submit'
                                className='bg-[#f56539] text-[#212121] transition duration-[250ms] ease-in-out hover:scale-[1.08] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <p>{!success ? 'Send' : 'Sent'}</p>
                                <div className='submit-icon flex items-center justify-center p-[5px] '>
                                    <AiOutlineSend
                                        className='send-icon text-[25px] origin-center translate-x-[5px] translate-y-[-3px] rotate-[-30] '
                                        style={{
                                            animation: !success
                                                ? 'initial'
                                                : 'fly 0.8s linear both',
                                            position: success
                                                ? 'absolute'
                                                : 'initial',
                                        }}
                                    />
                                    <AiOutlineCheckCircle
                                        className='success-icon text-[28px] transition-all delay-300 duration-[800] ease-in-out '
                                        style={{
                                            display: !success
                                                ? 'none'
                                                : 'inline-flex',
                                            opacity: !success ? '0' : '1',
                                        }}
                                    />
                                </div>
                            </button>
                        </div>
                    </form>
                    {/* <Toaster
                        position="top-center"
                        reverseOrder={true}
                        open={open}
                        autoHideDuration={4000}
                        // onClose={handleClose}

                        style={{
                                backgroundColor: theme.primary,
                                color: theme.secondary,
                                fontFamily: 'var(--primaryFont)',
                            }}
                    />
                    toast.error("error"); */}
                </div>

                <div className='contacts-details flex flex-col items-start justify-evenly flex-[0.7] box-border pl-[7rem] mt-[1.2rem] w-full '>
                    <a
                        href={`mailto:${contactsData.email}`}
                        className='personal-details flex flex-row items-center justify-start w-full mb-[2.5rem] '
                    >
                        <div className='bg-[#f56539] text-[#212121] rounded-[50%] w-[45px] h-[45px] flex items-center justify-center text-[23px] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '>
                            <FiAtSign />
                        </div>
                        <p style={{ color: theme.tertiary }}>
                            {contactsData.email}
                        </p>
                    </a>
                    <a
                        href={`tel:${contactsData.phone}`}
                        className='personal-details flex flex-row items-center justify-start w-full mb-[2.5rem] '
                    >
                        <div className='bg-[#f56539] text-[#212121] rounded-[50%] w-[45px] h-[45px] flex items-center justify-center text-[23px] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '>
                            <FiPhone />
                        </div>
                        <p style={{ color: theme.tertiary }}>
                            {contactsData.phone}
                        </p>
                    </a>
                    <div className='personal-details flex flex-row items-center justify-start w-full mb-[2.5rem] '>
                        <div className='bg-[#f56539] text-[#212121] rounded-[50%] w-[45px] h-[45px] flex items-center justify-center text-[23px] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '>
                            <HiOutlineLocationMarker />
                        </div>
                        <p style={{ color: theme.tertiary }}>
                            {contactsData.address}
                        </p>
                    </div>

                    <div className='socialmedia-icons flex w-[90%] items-center justify-center flex-wrap gap-[1.5rem] mt-[4rem] '>
                        {socialsData.twitter && (
                            <a
                                href={socialsData.twitter}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaTwitter aria-label='Twitter' />
                            </a>
                        )}
                        {socialsData.github && (
                            <a
                                href={socialsData.github}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaGithub aria-label='GitHub' />
                            </a>
                        )}
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaLinkedinIn aria-label='LinkedIn' />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaInstagram aria-label='Instagram' />
                            </a>
                        )}
                        {socialsData.medium && (
                            <a
                                href={socialsData.medium}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaMediumM aria-label='Medium' />
                            </a>
                        )}
                        {socialsData.blogger && (
                            <a
                                href={socialsData.blogger}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaBloggerB aria-label='Blogger' />
                            </a>
                        )}
                        {socialsData.youtube && (
                            <a
                                href={socialsData.youtube}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaYoutube aria-label='YouTube' />
                            </a>
                        )}
                        {socialsData.reddit && (
                            <a
                                href={socialsData.reddit}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaRedditAlien aria-label='Reddit' />
                            </a>
                        )}
                        {socialsData.stackOverflow && (
                            <a
                                href={socialsData.stackOverflow}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaStackOverflow aria-label='Stack Overflow' />
                            </a>
                        )}
                        {socialsData.codepen && (
                            <a
                                href={socialsData.codepen}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaCodepen aria-label='CodePen' />
                            </a>
                        )}
                        {socialsData.gitlab && (
                            <a
                                href={socialsData.gitlab}
                                target='_blank'
                                rel='noreferrer'
                                className='w-[45px] h-[45px] rounded-[50%] flex items-center justify-center text-[21px] bg-[#f56539] text-[#212121] transition duration-200 ease-in-out flex-shrink-0 hover:scale-[1.1] hover:text-[#212121] hover:bg-[#eaeaea] '
                            >
                                <FaGitlab aria-label='GitLab' />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <img
            src={theme.contactsimg}
            alt='contacts'
            className='contacts--img'
        />
    </div>
  )
}

export default Contacts;
