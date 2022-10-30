import React from 'react'
import { Stack, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
import './others.css';


export const MuiHomePage = () => {
    return (
        <div>

            <Stack marginLeft={5} marginRight={5}>

                <Typography variant='h3' marginBottom={2} color={'secondary'}>Welcome to A-B Olus and Associates</Typography>
                <Typography variant='h6'>A-B Olus and Associates, Provider of Quality Recruitment Services in Nigeria.</Typography>

                <Typography variant='body1' marginTop={2} marginBottom={1} justifyContent align='left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant='body2' gutterBottom={true} marginBottom={1} align='left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Typography variant='body2' gutterBottom={true} marginBottom={1} align='left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>


                <Stack width={'1000px'} marginTop={3} marginLeft={15} position={'center'}>

                    <Card elevation={20}>
                        <CardMedia component={'img'} height='400' image='https://picsum.photos/1000/400/' alt='unsplash image' />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                Our Vision
                            </Typography>

                            <Typography variant='body1' color={'text.secondary'} component={'div'}>
                                “Dedication to the highest quality of Customer Service delivered with a sense of warmth, friendliness, individual pride, and Company
                                Spirit.”
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size=''>Learn More</Button>
                        </CardActions>

                    </Card>



                    <Card color='primary' elevation={18}>
                        <CardMedia component={'img'} height='400' image='https://source.unsplash.com/random/?city,night' alt='unsplash image' />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                Our Mission
                            </Typography>

                            <Typography variant='body1' color={'text.secondary'} component={'div'}>
                                “To attract and attain customers with high-valued products and services and the most satisfying ownership experience in Africa.”
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size=''>Learn More</Button>
                        </CardActions>
                    </Card>



                    <Card color='primary' elevation={20}>
                        <CardMedia component={'img'} height='400' image='https://source.unsplash.com/user/wsanter' alt='unsplash image' />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                Our Core Values
                            </Typography>

                            <Typography variant='body1' color={'text.secondary'} component={'div'}>
                                Quality, Service, Delivery, Innovation, Integrity, Accountability, and Leadership.
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size=''>Learn More</Button>
                        </CardActions>
                    </Card>



                    <Card color='primary' elevation={18}>
                        <CardMedia component={'img'} height='400' image='https://picsum.photos/1000/400' alt='picsum image' />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component={'div'}>
                                Our Focus
                            </Typography>

                            <Typography variant='body1' color={'text.secondary'} component={'div'}>
                                “To attract and attain customers with high-valued products and services and the most satisfying ownership experience in Africa.”
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size=''>Learn More</Button>
                        </CardActions>
                    </Card>


                </Stack>


            </Stack>
        </div>
    )
}





