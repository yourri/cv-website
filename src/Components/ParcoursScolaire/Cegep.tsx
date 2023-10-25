import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";

export default function Cegep() {
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
                        Mon DEC est en Sciences informatiques et mathématiques, obtenu au Collège Champlain, à Saint-Lambert.
                        Durant ce DEC, j'ai eu quatres cours de programmation en Java et un cours de mathématiques
                        discrètes qui m'ont aidé à approfondir mes connaissances en informatique. Mon projet de fin de DEC
                        était un Mod pour le jeu Minecraft, en Java.
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography fontWeight="bold">Cégep (2017-2019)</Typography>
                    <img src='images/logo-champlain-college.png' alt="Logo de Champlain"></img>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}