import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DescriptionIcon from '@material-ui/icons/Description';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


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
                    backgroundColor: '#389793'
                }}>
                    <Grid item xs={3}>
                        <Link to='/parkinglotlist' >
                            {this.setHomeStyle()}
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/transactions'>
                            {this.setTxnStyle()}
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/notifications'>
                            {this.setNotifStyle()}
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/wallet'>
                            {this.setWalletStyle()}
                        </Link>
                    </Grid>
                </Grid>
            </div>
        )
    }

    setHomeStyle() {
        if(this.props.clicked === 'home'){
            return <HomeIcon style={{color: '#103736'}}/>
        }else {
            return <HomeOutlinedIcon style={{color: 'white'}}/>
        }
    }

    setNotifStyle() {
        // this.setState({clicked:this.props.clicked})
        if(this.props.clicked === 'notifs'){
            return <NotificationsActiveIcon style={{color: '#103736'}}/>
        }else {
            return <NotificationsActiveOutlinedIcon style={{color: 'white'}}/>
        }
    }

    setTxnStyle() {
        if(this.props.clicked === 'txn'){
            return <DescriptionIcon style={{color: '#103736'}}/>
        }else {
            return <DescriptionOutlinedIcon style={{color: 'white'}}/>
        }
    }

    setWalletStyle() {
        if(this.props.clicked === 'wallet'){
            return <AccountBalanceWalletIcon style={{color: '#103736'}}/>
        }else {
            return <AccountBalanceWalletOutlinedIcon style={{color: 'white'}}/>
        }
    }
}