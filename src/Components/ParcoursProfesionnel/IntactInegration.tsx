import { TimelineConnector, TimelineContent, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";

export default function IntactIntegration() {
    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    <Typography variant="body1" gutterBottom>
                        Mon deuxième stage s'est fait à nouveau chez Intact. Cette fois-ci, je faisais parti de l'équipe d'intégration des logiciels.
                        Durant ce stage, j'ai appris à utiliser des outils tels que OpenShift, Jenkins, Docker, ...
                        L'une de mes principals tâches était de remplacer le système d'exploitation des VMs pour un Distroless. Ceci
                        impliquait donc l'apprentissage de Docker et de Kubernetes. Comme la charge de travail était importante, j'ai
                        eu une offre pour rester à temps partiel durant ma session d'automne, que j'ai pris sans hésiter pour
                        continuer d'approfondir mes connaissances.
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography fontWeight="bold">Stage en intégration des logiciels chez Intact (Été 2021 - Temps partiel automne 2021)</Typography>
                    <img width={'20%'} src='images/Intact.jpg' alt="Logo d'intact"></img>
                </TimelineContent>
            </TimelineItem>
        </>
    )
}