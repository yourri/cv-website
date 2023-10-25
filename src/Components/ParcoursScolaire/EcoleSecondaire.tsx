import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Box, Typography } from "@mui/material";


export default function EcoleSecondaire() {
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
                        J'ai obtenu mon diplôme d'études secondaires à l'école secondaire Collège Trinité, à Saint-Bruno-de-Montarville.
                        Dès la première année de secondaire, j'étais classé en Anglais avancé, ce qui m'a permis de bien apprendre l'anglais
                        et d'être pratiquement bilingue à ce jours.
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography fontWeight="bold">
                        École Secondaire (2012-2017)
                    </Typography>
                    <Box width={'100%'}>
                        <img width={'50%'} src="images/image_trinite.jpg" alt="L'école Trinité" />
                    </Box>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}