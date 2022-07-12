import EternalFlame from '../../assets/Images/ArtImages/EternalFlame.JPG';
import TheEarthBuddha from '../../assets/Images/ArtImages/TheEarthBuddha.JPG';
import EternalJourney from '../../assets/Images/ArtImages/EternalJourney.JPG';
import MergingOfHeavenAndEarth from '../../assets/Images/ArtImages/mergingOfHeavenAndEarth.JPG';
import HolySpirit from '../../assets/Images/ArtImages/OHolySpirit.JPG';
import BathSutra from '../../assets/Images/ArtImages/BathSutra.JPG';
import JourneyOfLove from '../../assets/Images/ArtImages/JourneyOfLove.JPG';


const SHOP_DATA = [
  {
    title: 'prints',
    items: [ {
    "id": 1,
    "name": "Eternal Flame",
    "imageUrl": 'gs://daiensai.appspot.com/EternalFlame.JPG',
    'artist': 'Richard Daiensai',
    'signed': false,
    "price": 100
  },
  {
    "id": 2,
    "name": "The Earth Buddha",
    "imageUrl": {TheEarthBuddha},
    "price": 100,
    'signed': true,
  },
  {
    "id": 4,
    "name": "Eternal Journey",
    "imageUrl": {EternalJourney},
    "price": 125,
    'signed': true,
  },
  {
    "id": 4,
    "name": "mergingOfHeavenAndEarth",
    "imageUrl": {MergingOfHeavenAndEarth},
    "price": 25,
    'signed': true,
  },
],
},
  {
    title: 'lino prints',
  items: [ 
    {
  "id": 5,
  "name": "O Holy Spirit ",
  "imageUrl": {HolySpirit},
  'artist': 'Richard Daiensai',
  'signed': false,
  "price": 100
},
{
  "id": 6,
  "name": "The Earth Buddha",
  "imageUrl": {BathSutra},
  "price": 100,
  'signed': false,
},
{
  "id": 7,
  "name": "Journey of Love",
  "imageUrl": {JourneyOfLove},
  "price": 125,
  'signed': false,
},
],}
]
export default SHOP_DATA;
