
import { Helmet } from "react-helmet-async";

const HelmetProvider = () => {
  return (
    <>
      <Helmet>
        <title>Donatella Piccininno - Frontend Developer</title>
        <meta name="description" content="Sono Donatella, una Frontend Developer da più di 20 anni. Programmo principalmente in HTML5 e CSS3, 
        ma conosco vari linguaggi di programmazione come React. Cerco di dare ai miei siti web una grafica accattivante ma senza trascurare la user
        interface e la parte di responsive design. Sono abituata a lavorare sia in team che in autonomia. Non ho paura di confrontarmi o chiedere aiuto
        ai miei colleghi e sono altrettanto contenta di poter aiutare gli altri in caso di neccesità." />
        <meta name="keywords" content="Frontend Developer, Frontend, Developer, Programmatrice, Siti, Siti web, HTML5, CSS3, React, React Native, Tailwind,
        Node, NPM, Git, Codice, Responsive Design, Responsive, Smartphone, Tablet, User Interface, UX" />
        <meta property="og:title" content="Donatella Piccininno - Frontend Developer" />
        <meta property="og:description" content="Sono Donatella, una Frontend Developer da più di 20 anni. Programmo principalmente in HTML5 e CSS3, 
        ma conosco vari linguaggi di programmazione come React. Cerco di dare ai miei siti web una grafica accattivante ma senza trascurare la user
        interface e la parte di responsive design. Sono abituata a lavorare sia in team che in autonomia. Non ho paura di confrontarmi o chiedere aiuto
        ai miei colleghi e sono altrettanto contenta di poter aiutare gli altri in caso di neccesità." />
        <meta property="og:image" content="/path-to-image.jpg" />
      </Helmet>
      <h1>Benvenuto nella Home</h1>
    </>
  )
}

export default HelmetProvider
