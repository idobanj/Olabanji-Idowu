/** @format */

import React from 'react';
import {Link} from 'react-router-dom';
import {ExternalLink, ArrowRight} from 'lucide-react';
import {Github} from '../../components/ui/BrandIcons';
import {projects} from '../../data/projects';

export function FeaturedWork() {
    // Only grab the featured projects (SabiWrite AI and ChurchDue)
    const featuredProjects = projects.filter((p) => p.featured);

    return (
        <section
            id='project-section'
            className='py-24 border-t border-border transition-colors duration-200'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Section Heading */}
                <div className='space-y-3 mb-16 text-center reveal'>
                    <h2 className='font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl'>
                        Featured Projects
                    </h2>
                    <p className='text-muted-foreground max-w-xl text-lg mx-auto'>
                        Engineering case studies detailing core design, database
                        architectures, and integrations.
                    </p>
                </div>

                {/* Project List */}
                <div className='space-y-24'>
                    {featuredProjects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={project.id}
                                className={`flex flex-col gap-10 lg:gap-16 ${
                                    isEven
                                        ? 'lg:flex-row'
                                        : 'lg:flex-row-reverse'
                                } items-start reveal`}>
                                {/* Visual Preview / Thumbnail */}
                                <div className='w-full lg:w-1/2 group'>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className='block overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/20 transition-all duration-300'>
                                        <img
                                            src={project.image}
                                            alt={`${project.title} Interface Preview`}
                                            className='rounded-xl w-full aspect-video object-cover filter saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500'
                                            loading='lazy'
                                        />
                                    </Link>
                                </div>

                                {/* Text Context */}
                                <div className='w-full lg:w-1/2 space-y-6 pl-6 lg:pl-0'>
                                    <div className='space-y-2'>
                                        <h3 className='font-display text-2xl font-bold text-foreground'>
                                            {project.title}
                                        </h3>
                                        <p className='text-muted-foreground leading-relaxed'>
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    {/* Badges */}
                                    <div className='flex flex-wrap gap-2'>
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className='px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-border bg-card text-foreground'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Highlights/Features */}
                                    <div className='space-y-2 '>
                                        <h4 className='text-xs font-bold uppercase tracking-wider text-muted-foreground'>
                                            Key Highlights
                                        </h4>
                                        <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground'>
                                            {project.id === 'sabiwrite-ai' ? (
                                                <>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Gemini AI & Deno Edge Functions
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        PostgreSQL database & mastery engine
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Supabase Auth & mistake analytics
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Automated quiz generation & feedback
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Supabase PostgreSQL & RLS security
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Paystack payment & webhook functions
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        TanStack Query & Zustand state
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Role-based admin & member ledger
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Actions */}
                                    <div className='flex flex-wrap items-center gap-3 pt-2'>
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className='inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-accent text-white font-bold hover:bg-accent/90 shadow-sm hover:shadow transition-all duration-150 active:scale-95 text-xs cursor-pointer group'>
                                            Read Case Study
                                            <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                                        </Link>
                                        <a
                                            href={project.liveUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-black text-white hover:bg-neutral-950 dark:bg-white dark:text-black dark:hover:bg-slate-100 border border-transparent shadow-sm transition-all duration-150 active:scale-95 text-xs font-bold cursor-pointer'>
                                            <ExternalLink className='h-4 w-4 text-white dark:text-black' />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border bg-card text-foreground font-semibold hover:bg-muted/50 hover:border-accent/30 shadow-sm transition-all duration-150 active:scale-95 text-xs cursor-pointer'>
                                            <Github className='h-4 w-4 text-muted-foreground' />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
