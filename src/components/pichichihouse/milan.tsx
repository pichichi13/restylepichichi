import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

import boscoverticale from '@assets/pichichihouse/mappa/boscoverticale.jpg';
import buesosaires from '@assets/pichichihouse/mappa/buesosaires.jpg';
import castellosforzesco from '@assets/pichichihouse/mappa/castellosforzesco.jpg';
import citylife from '@assets/pichichihouse/mappa/citylife.jpg';
import duomo from '@assets/pichichihouse/mappa/duomo.jpg';
import galleriavittorioemanuele from '@assets/pichichihouse/mappa/galleriavittorioemanuele.jpg';
import giardiniindromontanelli from '@assets/pichichihouse/mappa/giardiniindromontanelli.jpg';
import montenapoleone from '@assets/pichichihouse/mappa/montenapoleone.jpg';
import museo900 from '@assets/pichichihouse/mappa/museo900.jpeg';
import navigli from '@assets/pichichihouse/mappa/navigli.jpeg';
import parcosempione from '@assets/pichichihouse/mappa/parcosempione.jpg';
import teatroscala from '@assets/pichichihouse/mappa/teatroscala.jpg';
import santamariagrazie from '@assets/pichichihouse/mappa/santamariagrazie.jpg';
import pinacotecamilano from '@assets/pichichihouse/mappa/pinacotecamilano.jpg';



// Fix icona di default di Leaflet in TypeScript
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type MarkerData = {
  id: number;
  lat: number;
  lng: number;
  description: string;
  percorso: string;
  immagine: string;
};

const Milan: React.FC = ({}) => {
  
  const markers: MarkerData[] = [
    {
      id: 1,
      lat: 45.4642,
      lng: 9.19,
      description: 'Duomo di Milano',
      percorso: 'https://maps.app.goo.gl/pQZ7VcZtLPFqQXsX7',
      immagine: duomo
    },
    {
      id: 2,
      lat: 45.4668,
      lng: 9.1905,
      description: 'Galleria Vittorio Emanuele II',
      percorso: 'https://maps.app.goo.gl/nZvLjno71ewaQYvS8',
      immagine: galleriavittorioemanuele,
    },
    {
      id: 3,
      lat: 45.4706,
      lng: 9.1794,
      description: 'Castello Sforzesco',
      percorso: 'https://maps.app.goo.gl/chUnx9M8E3zebCYY7',
      immagine: castellosforzesco
    },
    {
      id: 4,
      lat: 45.4656,
      lng: 9.1864,
      description: 'Teatro alla Scala',
      percorso: 'https://maps.app.goo.gl/j8BjbTeWjGLnNzwN7',
      immagine: teatroscala
    },
    {
      id: 5,
      lat: 45.4663,
      lng: 9.1700,
      description: 'Santa Maria delle Grazie - Ultima Cena',
      percorso: 'https://maps.app.goo.gl/rMdRKrcZ9GaAyWQd6',
      immagine: santamariagrazie
    },
    {
      id: 6,
      lat: 45.4720,
      lng: 9.1805,
      description: 'Pinacoteca di Brera',
      percorso: 'https://maps.app.goo.gl/NGa347rkE7djv2aK7',
      immagine: pinacotecamilano
    },
    {
      id: 7,
      lat: 45.4648,
      lng: 9.1892,
      description: 'Museo del Novecento',
      percorso: 'https://maps.app.goo.gl/PRHEYFgeUErsQFTdA',
      immagine: museo900
    },
    {
      id: 8,
      lat: 45.4722,
      lng: 9.1749,
      description: 'Parco Sempione',
      percorso: 'https://maps.app.goo.gl/4oYQyjARhN6wGCGE6',
      immagine: parcosempione
    },
    {
      id: 9,
      lat: 45.4740,
      lng: 9.2020,
      description: 'Giardini Pubblici Indro Montanelli',
      percorso: 'https://maps.app.goo.gl/jZRzfofFo4nnpDNs5',
      immagine: giardiniindromontanelli
    },
    {
      id: 10,
      lat: 45.4673,
      lng: 9.1964,
      description: 'Via Montenapoleone',
      percorso: 'https://maps.app.goo.gl/P2XYrMbQ4aZGQ1sXA',
      immagine: montenapoleone
    },
    {
      id: 11,
      lat: 45.4821,
      lng: 9.2107,
      description: 'Corso Buenos Aires',
      percorso: 'https://maps.app.goo.gl/zUZkoWD4ZdxT2cNUA',
      immagine: buesosaires
    },
    {
      id: 12,
      lat: 45.4507,
      lng: 9.1855,
      description: 'Navigli',
      percorso: 'https://maps.app.goo.gl/3K7bZkZ5i4QLN66VA',
      immagine: navigli
    },
    {
      id: 13,
      lat: 45.4850,
      lng: 9.1927,
      description: 'Isola - Bosco Verticale',
      percorso: 'https://maps.app.goo.gl/9dz6pvd4fZmVYQQ27',
      immagine: boscoverticale
    },
    {
      id: 15,
      lat: 45.4838,
      lng: 9.1560,
      description: 'CityLife Milano',
      percorso: 'https://maps.app.goo.gl/9tVjHVHAgSPZQMNU8',
      immagine: citylife
    },
  ];

  return (
    <>
      <section className='boxarea map'> 
        <h2>Cosa visitare a Milano</h2>
        <MapContainer center={[45.4642, 9.19]} zoom={14} style={{ height: '100vh', width: '100%' }} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker) => (
            <Marker key={marker.id} position={[marker.lat, marker.lng]}>
              <Popup>
                <h3 style={{marginBottom: '1rem', textTransform: 'uppercase'}}>{marker.description}</h3>
                <img src={marker.immagine} alt={marker.description} style={{ width: '300px', height: 'auto', borderRadius:'0.3rem', marginBottom: '0.5rem' }} />
                <a href={marker.percorso} target="_blank">{marker.percorso}</a>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>
    </>
  )
}

export default Milan
