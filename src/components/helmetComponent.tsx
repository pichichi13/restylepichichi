
import { Helmet } from "react-helmet-async";

interface props {
  title: string;
  keywords: string;
  description: string;
  ogtitle: string;
  ogdescription: string;
  ogimage: string;
}

const HelmetComponent : React.FC<props> = ({ title, keywords, description, ogtitle, ogdescription, ogimage }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogtitle} />
        <meta property="og:description" content={ogdescription} />
        <meta property="og:image" content={ogimage} />
      </Helmet>
      <h1>{title}</h1>
    </>
  )
}

export default HelmetComponent
