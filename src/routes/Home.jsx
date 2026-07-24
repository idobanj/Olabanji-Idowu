import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../features/home/Hero';
import { FeaturedWork } from '../features/home/FeaturedWork';
import { OtherProjects } from '../features/home/OtherProjects';
import { Technologies } from '../features/home/Technologies';
import { Philosophy } from '../features/home/Philosophy';
import { GithubStats } from '../features/home/GithubStats';
import { Contact } from '../features/home/Contact';

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Olabanji Peter Idowu",
    "jobTitle": "Frontend Developer",
    "image": "https://olabanjiidowu.vercel.app/img/img-portfolio2.jpg",
    "description": "Frontend Developer building modern, performant, and AI-powered web applications with React and JavaScript.",
    "url": "https://olabanjiidowu.vercel.app",
    "sameAs": [
      "https://github.com/idobanj",
      "https://www.linkedin.com/in/olabanjiidowu"
    ]
  };

  return (
    <>
      <SEO 
        title="Olabanji Idowu | Frontend Developer & React Engineer"
        ogUrl="https://olabanjiidowu.vercel.app/"
        structuredData={personSchema}
      />
      <div className="space-y-4">
        <Hero />
        <FeaturedWork />
        <Philosophy />
        <Technologies />
        <GithubStats />
        <OtherProjects />
        <Contact />
      </div>
    </>
  );
}
