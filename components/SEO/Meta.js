import React from 'react'
import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
           /* Primary Meta Tags */
            <title>My Memoir</title>
            <meta charSet="utf-8" />
            <meta name="title" content="My Memoir" />
            <meta name="description"
                content="Harman Preet Singh's (agilityharman) Personal Portfolio Website. Made with Ubuntu 20.4 (Linux) theme by Next.js and Tailwind CSS." />
            <meta name="author" content="Harman Preet Singh (agilityharman)" />
            <meta name="keywords"
                content="agilityharman, agilityharman's portfolio, agilityharman linux, ubuntu portfolio, Harman Preet Singh protfolio,harman Preet Singh computer, harman Preet Singh, harman ubuntu, harman Preet Singh ubuntu portfolio" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#E95420" />

            /* Search Engine */
            <meta name="image" content="images/logos/favicon.ico" />
            /* Schema.org for Google */
            <meta itemProp="name" content="My Memoir" />
            <meta itemProp="description"
                content="Harman's Portfolio" />
            <meta itemProp="image" content="images/logos/favicon.ico" />
            /* Twitter */
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="My Memoir" />
            <meta name="twitter:description"
                content="Harman's Portfolio" />
            <meta name="twitter:site" content="agilityharman" />
            <meta name="twitter:creator" content="agilityharman" />
            <meta name="twitter:image:src" content="images/logos/logo_1024.png" />
            /* Open Graph general (Facebook, Pinterest & Google+) */
            <meta name="og:title" content="My Memoir" />
            <meta name="og:description"
                content="Harman's Portfolio" />
            <meta name="og:image" content="images/logos/logo_1200.png" />
            <meta name="og:url" content="http://agilityharman.github.io/" />
            <meta name="og:site_name" content="My Memoir" />
            <meta name="og:locale" content="en_IN" />
            <meta name="og:type" content="website" />

            <link rel="icon" href="images/logos/favicon.ico" />
            <link rel="apple-touch-icon" href="images/logos/logo.png" />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" as="style" />
            <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        </Head>
    )
}
