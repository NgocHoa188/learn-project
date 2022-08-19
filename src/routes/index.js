import routes from '../config/routes';
import Home from '../components/Home';
import Birthdate from '../projects/birthdate-reminder';
import birthdate_thumb from '../assets/images/birthdate_thumb.png';

import Tours from '../projects/tours';
import tours_thumb from '../assets/images/tours_thumb.png';

const publicRoutes = [
    { path: routes.home, component: Home, name: 'Home' },
    { path: routes.birthdate, component: Birthdate, name: 'Birthdates reminder', img: birthdate_thumb },
    { path: routes.tours, component: Tours, name: 'Tours', img: tours_thumb },
];

export { publicRoutes };