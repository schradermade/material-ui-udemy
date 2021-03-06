import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './ui/Header';
import theme from './ui/Theme';
import Footer from './ui/Footer';
import LandingPage from '../components/LandingPage'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          value={value} 
          setValue={setValue} 
          selectedIndex={selectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/" 
            render={props => (
              <LandingPage
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex} 
              />
            )}
          />
          <Route 
            exact
            path="/services" 
            component={() => <div>Services</div>} />
          <Route 
            exact 
            path="/customsoftware" 
            component={() => <div>Custom Software</div>} />
          <Route 
            exact 
            path="/mobileapps" 
            component={() => <div>Mobile Apps</div>} />
          <Route 
            exact 
            path="/websites" 
            component={() => <div>Websites</div>} />
          <Route 
            exact 
            path="/revolution" 
            component={() => <div>The Revolution</div>} />
          <Route 
            exact 
            path="/about" 
            component={() => <div>About Us</div>} />
          <Route 
            exact 
            path="/contact" 
            component={() => <div>Contact Us</div>} />
          <Route 
            exact 
            path="/estimate" 
            component={() => <div>Estimate</div>} />
        </Switch>
        <Footer 
          setValue={setValue} 
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;