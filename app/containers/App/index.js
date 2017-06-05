import React from 'react';
import Helmet from 'react-helmet';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import withProgressBar from 'components/ProgressBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate='%s'
        defaultTitle='Clipper'
        meta={[
          { name: 'description', content: 'A Social Network and Media dashboard application' },
        ]}
      />
      <MuiThemeProvider>
        <div>
          <AppBar
          title='Clipper'/>
          <Drawer 
          open={false} 
          className='Drawer' 
          disableSwipeToOpen={true}
          containerStyle={{
            top: '65px',
            width: '60px',
          }}>
            <IconButton
            iconClassName='muidocs-icon-custom-github' 
            tooltip='Articles'
            tooltipPosition='bottom-right'>
              <ActionHome />
            </IconButton>
          </Drawer>
          <div 
            className='content' 
            style={{
              backgroundColor: '#e8e8e8',
              position: 'fixed', 
              padding: '15px 15px 15px 15px', 
              height: '93%', 
              width: '100%', 
              overflowY: 'scroll'}}
          >
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
