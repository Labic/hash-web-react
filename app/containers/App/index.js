import React from 'react';
import Helmet from 'react-helmet';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import withProgressBar from 'components/ProgressBar';


export function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s"
        defaultTitle="Hash Web"
        meta={[
          { name: 'description', content: 'A Social Network and Media dashboard application' },
        ]}
      />
      <MuiThemeProvider>
        <div>
          <AppBar
          title="Hash Web"
          iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <Drawer 
          open={true} 
          className="Drawer" 
          disableSwipeToOpen={true}
          containerStyle={{
            top: '65px',
            width: '60px',
          }}>
            <IconButton
            iconClassName="muidocs-icon-custom-github" 
            tooltip="Articles"
            tooltipPosition="bottom-right">
              <ActionHome />
            </IconButton>
          </Drawer>
          <div className="content" style={{'position': 'fixed', 'padding': '15px 15px 15px 75px', 'height': '93%', 'overflowY': 'scroll'}}>
            {React.Children.toArray(props.children)}
          </div>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
