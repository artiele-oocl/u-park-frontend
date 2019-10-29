import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import { Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {
        return(
            <div>
                <Grid container spacing={3} style=
                {{
                    width: '100%',
                    position: 'fixed',
                    right: '0px',
                    left: '12px',
                    bottom: '0',
                    textAlign: 'center',
                    backgroundColor: '#103736'
                }}>
                    <Grid item xs={3}>
                        <Link to='/parkinglotlist'>
                            <HomeOutlinedIcon style={{color: 'white'}}/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/transactions'>
                            <DescriptionOutlinedIcon style={{color: 'white'}}/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/notifications'>
                            <NotificationsActiveOutlinedIcon style={{color: 'white'}}/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/wallet'>
                            <AccountBalanceWalletOutlinedIcon style={{color: 'white'}}/>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        )
    }
}