import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary
    },
    textField: { textAlign: 'center' }
  }));

export const Profile = () => {
    const info = useSelector(state => state.users.items);
    const dispatch = useDispatch();
    const classes = useStyles();
    console.log('info::::',info);
    // reset login status
    // useEffect(() => { 
    //     dispatch(userActions.logout()); 
    // }, []);

    return (
        <form>
            <div className={classes.root}>
                <h1>{info?.firstName} Profile</h1>
                <br/>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue="First Name"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue={info?.firstName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue="Last Name"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue={info?.lastName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue="Email"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue={info?.username}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={4}>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue="Skills"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs>
                        <TextField
                            className={classes.textField}
                            id="standard-read-only-input"
                            defaultValue={info?.skills.join()}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </Grid>
                </Grid>
                <br/><br/>
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>

        </form>
    );
}