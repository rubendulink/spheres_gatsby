/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Particles from 'react-particles-js';

import E1 from '../images/Ellipse_11.svg';
import E2 from '../images/Ellipse_12.svg';
import "./layout.css"
import "./spheres.css"


const Layout = ({ children }) => {
  return (
    <div class="layout">
      <Particles params={{
          particles: {
            number: {
              value: 3,
              density: {
                enable: false,
                value_area: 50
              }
            },
            shape: {
              type: "images",
              image: [
                {src: E1, height: 100, width: 100},
                {src: E2, height: 100, width: 100},
              ],
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
              }
            },
            size: {
              value: 100,
              random: false,
              anim: {
                enable: false,
                speed: 0.3,
                size_min: 0.3,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }} />
        <div class="container"></div>
      {/* <main>{children}</main> */}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
