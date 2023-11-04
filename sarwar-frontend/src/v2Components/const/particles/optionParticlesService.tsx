const fullScreenData = {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
};

export const optionParticlesService = {
  pauseOnBlur: false,
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3,
      },
    },
  },
  particles: {
    color: {
      value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"],
    },
    links: {
      color: "random",
      distance: 40,
      enable: true,
      opacity: 0.8,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      speed: 1,
    },
    number: {
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
      value: { min: 0.3, max: 0.8 },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 1,
    },
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "rgba(255,255,255,0.2)",
      lineWidth: 1,
    },
    enable: true,
    move: {
      radius: 5,
    },
    position: {
      x: 30,
      y: 10,
    },
    inline: {
      arrangement: "equidistant",
    },
    scale: 1,
    type: "inline",
    url: "https://particles.js.org/images/google.svg",
  },
  background: {
    color: "#252734",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};
