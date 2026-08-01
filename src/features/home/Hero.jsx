/** @format */

import React from 'react';
import {Link} from 'react-router-dom';
import {Mail, FileText, ArrowDown} from 'lucide-react';
import {Github, Linkedin} from '../../components/ui/BrandIcons';

export function Hero() {
    const handleScrollToProjects = () => {
        const element = document.getElementById('project-section');
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <section
            id='home-section'
            className='relative flex min-h-[85vh] items-center justify-center py-20 transition-colors duration-200'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-center justify-center text-center md:flex-row md:text-left md:justify-between gap-12'>
                    {/* Text Content */}
                    <div className='flex-1 space-y-6 max-w-4xl'>
                        <div className='inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-accent/10 text-accent border border-accent/20 animate-fade-in-up'>
                            <span className='relative flex h-2 w-2'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2 w-2 bg-accent'></span>
                            </span>
                            Open for opportunities
                        </div>

                        <h1 className='font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[55px] leading-[1.1] animate-fade-in-up delay-100'>
                            Frontend Developer building modern, performant, and{' '}
                            <span className='text-accent'>AI-powered</span> web
                            applications.
                        </h1>

                        <p className='text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in-up delay-200'>
                            Hello, I'm Olabanji. I specialize in building
                            responsive user interfaces, modular React codebases,
                            and integrations with AI models.
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 animate-fade-in-up delay-300'>
                            <button
                                onClick={handleScrollToProjects}
                                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 shadow-md cursor-pointer transition-all duration-150 active:scale-95 text-sm'>
                                View Projects
                                <ArrowDown className='h-4 w-4' />
                            </button>

                            <Link
                                to='/resume'
                                className='inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted cursor-pointer transition-all duration-150 active:scale-95 text-sm'>
                                View Resume
                                <FileText className='h-4 w-4' />
                            </Link>
                        </div>

                        {/* Social Connect */}
                        <div className='flex justify-center md:justify-start items-center gap-6 pt-4 text-muted-foreground animate-fade-in-up delay-400'>
                            <a
                                href='https://github.com/idobanj'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-foreground transition-colors p-1'
                                aria-label='GitHub Profile'>
                                <Github className='h-6 w-6' />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/olabanjiidowu'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-foreground transition-colors p-1'
                                aria-label='LinkedIn Profile'>
                                <Linkedin className='h-6 w-6' />
                            </a>
                            <a
                                href='mailto:idowuolabanji181@gmail.com'
                                className='hover:text-foreground transition-colors p-1'
                                aria-label='Send Email'>
                                <Mail className='h-6 w-6' />
                            </a>
                        </div>
                    </div>

                    {/* Profile Picture */}
                    <div className='relative flex justify-center items-center animate-scale-in delay-200'>
                        <div className='absolute inset-0 rounded-3xl bg-linear-to-tr from-accent/20 to-transparent blur-2xl'></div>
                        <div className='relative border border-border p-2 bg-card rounded-3xl shadow-xl max-w-70 sm:max-w-[320px]'>
                            <img
                                src='/img/img-portfolio2.jpg'
                                alt='Olabanji Peter Idowu'
                                className='rounded-2xl object-cover aspect-4/5 filter grayscale-70 hover:grayscale-0 transition-all duration-300 shadow-inner'
                                loading='eager'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
