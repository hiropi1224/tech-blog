import axios from 'axios';
import cheerio from 'cheerio';
type Metadata = {
  url: string;
  title: string;
  image: string;
  site: string;
};

export const fetchSiteMetadata = async (url: string): Promise<Metadata> => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const metadata: Metadata = {
      url: $('meta[property="og:url"]').attr('content') || '',
      title: $('meta[property="og:title"]').attr('content') || '',
      image: $('meta[property="og:image"]').attr('content') || '',
      site: $('meta[property="og:site_name"]').attr('content') || '',
    };

    return metadata;
  } catch (error) {
    throw new Error('Failed to fetch Open Graph metadata');
  }
};
