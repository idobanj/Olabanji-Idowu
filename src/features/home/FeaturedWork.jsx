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
            <div className='mx-auto max-w-7xl px-9 sm:px-6 lg:px-8'>
                {/* Section Heading */}
                <div className='space-y-3 mb-16 text-center'>
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
                                } items-start`}>
                                {/* Visual Preview / Thumbnail */}
                                <div className='w-full lg:w-1/2 group'>
                                    <Link
                                        to={`/projects/${project.id}`}
                                        className='block overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm hover:shadow-md transition-shadow'>
                                        <img
                                            src={project.image}
                                            alt={`${project.title} Interface Preview`}
                                            className='rounded-xl w-full aspect-video object-cover filter saturate-75 group-hover:saturate-100 transition-all duration-300'
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
                                                className='px-2.5 py-1 text-xs font-semibold rounded-md border border-border bg-card text-foreground'>
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
                                                        Gemini API integration
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Distraction-free rich
                                                        editor
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Preset prompt templates
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Responsive writing
                                                        layouts
                                                    </li>
                                                </>
                                            ) : (
                                                <>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Client-side local
                                                        storage
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        JSON database backup
                                                        imports
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Member record indexes
                                                    </li>
                                                    <li className='flex items-center gap-2'>
                                                        <span className='h-1.5 w-1.5 rounded-full bg-accent'></span>
                                                        Filtered financial
                                                        sheets
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    </div>

                                    {/* Actions */}
                                    <div className='flex flex-wrap items-center gap-4 pt-2'>
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className='inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline cursor-pointer group'>
                                            Read Case Study
                                            <ArrowRight className='h-4 w-4 group-hover:translate-x-1 transition-transform' />
                                        </Link>
                                        <div className='h-3 w-px bg-border'></div>
                                        <a
                                            href={project.liveUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors'>
                                            <ExternalLink className='h-4 w-4' />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors'>
                                            <Github className='h-4 w-4' />
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
