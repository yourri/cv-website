import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";

export default function IntactMaintenance() {
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
                        Dans mon parcours professionnel, mon premier stage s'est fait au sein de la compagnie
                        Intact, dans la maintenance des logiciels. Ce stage s'est effectué à distance, à cause de la pandémie.
                        Durant mon mandat, nous travaillions sur une méthode de type Kanban, où certains bugs m'étaient attribués
                        et je devais les réglés. En plus, j'ai fais quelques tâches, comme l'automatisation des appels lors
                        des maintenance à l'interne. Durant ce stage, j'ai perfectionné mes connaissances en Gosu (un language similaire à Java),
                        en TypeScript et en Java.
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography fontWeight="bold">Stage en maintenance des logiciels chez Intact (Automne 2020)</Typography>
                    <img width={'20%'} src='images/Intact.jpg' alt="Logo d'intact"></img>
                </TimelineContent>
            </TimelineItem>
        </>
    )
}