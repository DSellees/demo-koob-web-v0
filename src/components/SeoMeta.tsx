import { Helmet } from 'react-helmet-async';

interface SeoMetaProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
}

const SeoMeta = ({ title, description, url, ogImage = 'https://koobadvisory.com/og-image.png' }: SeoMetaProps) => {
  return (
    <Helmet>
      <title>KOOB</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SeoMeta;
