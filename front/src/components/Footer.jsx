  
import React from 'react';
import "./styles/footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          HH
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default () => (
    <div className="container-fluid" id="footer"> 
        <div className="row">
            <div className="col-12">
                <div id="primerfila" >
                    <span><FacebookIcon /></span>
                    <span><InstagramIcon /></span>
                    <span><GitHubIcon /></span>
                    <span><TwitterIcon /></span>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <Copyright />
            <h6>Plataforma 5 individual academic proyect</h6>
        </div>
    </div>
);