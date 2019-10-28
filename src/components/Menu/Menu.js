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
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <Link to='/parkinglotlist'>
                            <HomeOutlinedIcon/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/transactions'>
                            <DescriptionOutlinedIcon/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/notifications'>
                            <NotificationsActiveOutlinedIcon/>
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/wallet'>
                            <AccountBalanceWalletOutlinedIcon/>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        )
    }
}