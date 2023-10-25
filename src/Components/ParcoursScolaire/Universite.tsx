import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { List, ListItem, Typography } from "@mui/material";

export default function Universite() {
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
                        En décembre 2023, j'obtiendrai un diplôme en ingénierie informatique, à l'Université de Sherbrooke.
                        Jusqu'à présent, j'ai une côte globale de 3.72/4.3. Grâce à l'apprentissage par projet qu'offre l'université de Sherbrooke,
                        j'ai appris à utiliser plusieurs language de programmation. Ceux que je maîtrise le mieux sont :
                    </Typography>
                    <List sx={{ marginLeft: '30%', listStyleType: 'disc', padding: 0, textAlign: 'right' }}>
                        <ListItem sx={{ display: 'list-item' }} >
                            Python
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }} >
                            C#
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }} >
                            Java
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }} >
                            TypeScript
                        </ListItem>
                    </List>
                    <Typography variant="body1" gutterBottom>
                        Mon projet de fin de bac est un Vélo cargo à assistance électrique. Ce projet est réalisé en équipe de 8 personnes.
                        Il fallait concevoir le vélo, le bâtir, le tester, gérer le budget, ... En résumé, nous étions les maîtres du projet.
                        Nous faisions affaire avec une compagnie nommé Quantum E-Bikes qui nous fournissait les pièces et
                        le budget nécessaires à la construction du vélo.
                        J'étais responsable principalement de la programmation d'une application mobile en Kotlin et de la programmation
                        du micro-contrôleur de type 'Raspberry-PI' en Python.
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography fontWeight={'bold'}>Université (2019-2023)</Typography>
                    <img width={'50%'} src='images/logo_uds.jpg' alt="Logo de l'université de Sherbrooke"></img>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}