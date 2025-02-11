const particlesConfig = 

{
  particles: {
    number: {
      value: 278,
      density: {
        enable: true,
        value_area: 959.616153538585
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "edge",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 4
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 0,
        size_min: 28.348574066724453,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 65,
      color: "#ffffff",
      opacity: 0.5437824870051982,
      width: 0
    },
    move: {
      enable: true,
      speed: 3.1987205117952833,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 7437.025189924034,
        rotateY: 0
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
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
}


export default particlesConfig;