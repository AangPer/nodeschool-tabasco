import React, { Fragment } from 'react';
import Header from '../../components/Header';
import About from '../../components/About';
import Events from '../../components/Events';
import Mentors from '../../components/Mentors';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import * as FB from 'fb-sdk-wrapper';


const appId = '338089833512961';
const userId = '2890470277694633';
const appSecret = '91aeeb21e0c65031ccdf835dabaa7fa0';
const pageId = '111589007019679';
const token = 'EAAEzfaxtwAEBAMavYvuqEPgSMEa2LftE3kfYz6XV2o7RV0RDhN3yjBK1wTCyKy684en7blrJ6Hl3IJ2AIK7D3iT9ObprJuJZCu4JvWnNziy7xeFb5N6qBjEuhMHM6fMNsE0LcUUVsw023y0vGMVEAZCrTeUIiSpTG1QDNVAwZDZD';

// const getPermanentToken = () => {
//   fetch(`https://graph.facebook.com/v5.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${token}`)
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     const { access_token } = myJson;
//     const longLiveToken = access_token;
//     fetch(`https://graph.facebook.com/${pageId}?fields=access_token&access_token=${longLiveToken}`)
//     .then((response2) => {
//       return response2.json();
//     }).then((myPermanentToken) => {
//       const { access_token } = myPermanentToken;
//       console.log(access_token)
//     })
//   })
// }
class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }



  componentDidMount() {
    fetch(`https://graph.facebook.com/${pageId}?fields=events&access_token=${token}`)
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        const { data } = myJson.events;
        this.setState({ data })
      });


    FB.load()
    .then(() => {
      FB.init({
      appId: appId,
      userId: userId,
      secret: appSecret,
      status     : true,
      xfbml      : true,
      version    : 'v5.0' // or v2.6, v2.5, v2.4, v2.3
      });

      FB.api(`/${pageId}/events`, function(response) {
        if (response && !response.error) {
          return response.json().then(console.log(`esta es lo que tiene ${response}`));
        }else{
          console.log("Ya valiste verga")
        }
      });

      // var pageAccessToken = `${pageId}|${token}`;
      // FB.api('/me/events', {
      //   access_token : pageAccessToken
      // }).then((response) => {
      //   if (response && !response.error) {
      //     return response.json().then(console.log(`esta es lo que tiene ${response}`));
      //   }else{
      //     console.log("Ya valiste verga")
      //   }
      // })


      // FB.api(
      //   '/111589007019679/events',
      //   {access_token : token},
      //   function(response) {
      //     if (response && !response.error) {
      //           return response.then(console.warn(`esta es lo que tiene ${response}`));
      //         }else{
      //           console.warn("Ya valiste verga")
      //         }
      //   }
      // );

    });

  }
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Events dato={this.state.data} />
        <Mentors />
        <Contact />
        <Footer />
      </Fragment>
    )
    /*return (
      <Fragment>
        <Header />
      </Fragment>)*/
  }
}

export default Home;