import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, url }) {
    const siteTitle = "Niyantra - IT Asset Management Software & CRM";
    const defaultDescription = "Streamline your IT operations with Niyantra. Powerful IT hardware management, asset tracking, and IT CRM software for modern businesses.";
    const defaultKeywords = "IT Asset Management, Hardware Management, IT CRM, Asset Tracking, IT Inventory, SaaS";
    const siteUrl = "https://niyantra.com";

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{title ? `${title} | Niyantra` : siteTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="og:title" content={title || siteTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url ? `${siteUrl}${url}` : siteUrl} />
            <meta property="twitter:title" content={title || siteTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />
        </Helmet>
    );
}
