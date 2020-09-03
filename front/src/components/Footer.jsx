  
import React from 'react';
import "./styles/footer.scss";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';



function Copyright() {

    return (
      <Typography variant="body2" align="center">
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
                    <span><IconButton href={'https://www.facebook.com/hhlace/'}><FacebookIcon style={{color: 'antiquewhite'}}/></IconButton></span>
                    <span><IconButton href={'https://www.instagram.com/hnry__h/'}><InstagramIcon style={{color: 'antiquewhite'}}/></IconButton></span>
                    <span><IconButton href={'https://github.com/hhlace'}><GitHubIcon style={{color: 'antiquewhite'}}/></IconButton></span>
                    <span><IconButton href ={'https://twitter.com/hhlace'}><TwitterIcon style={{color: 'antiquewhite'}}/></IconButton></span>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <Copyright />
            <h6>Plataforma 5 individual academic proyect.</h6>
        </div>
    </div>
);