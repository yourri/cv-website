import Timeline from '@mui/lab/Timeline';
import Cegep from './Cegep';
import EcoleSecondaire from './EcoleSecondaire';
import Universite from './Universite';

export default function ParcoursScolaire() {
    return (
        <Timeline position="alternate">
            <EcoleSecondaire />
            <Cegep />
            <Universite />
        </Timeline >
    )
}