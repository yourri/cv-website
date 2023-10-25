import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';



function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" >
                Thierry Leclaire
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function Contact() {
    const {
        formState: { errors },
        setError,
        clearErrors
    } = useForm();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const handleEmail = (email: string) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        setEmail(email);
        if (!emailRegex.test(email)) {
            setError('email', { type: 'required', message: 'L\'adresse courriel n\'est pas valide' });
        } else {
            clearErrors('email')
        }
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!errors.email) {
            console.log(name, email)
        }
    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Contactez-moi!
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        autoFocus
                        label="Votre nom"
                        autoComplete="name"
                        onChange={(event) => setName(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="E-Mail"
                        autoComplete="email"
                        error={!!errors.email}
                        helperText={errors.email?.message as string}
                        onChange={(event) => handleEmail(event.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Sujet"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={4}
                        label="Votre message"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Envoyer le message
                    </Button>

                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

