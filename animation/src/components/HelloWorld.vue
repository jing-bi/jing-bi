<template>
  <div class="hello">
    <div id="demo">
      <div id="inner-demo">
        <h1 id="inner-demo-2">
          <br>
        </h1>
      </div>
    </div>
    <VueParticle domId="demo" :config="particleConfig"/>
  </div>
</template>

<script>
import VueParticle from "vue-particlejs";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    VueParticle
  },
  data() {
    return {
      particleConfig: {
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: ["#4169E1", "#FF8C00"] },
          shape: {
            type: "circle",
            stroke: { width: 0, color: "#FF4500" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
          },
          opacity: {
            value: 0.6,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#F5F5DC",
            opacity: 1,
            width: 3
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false, mode: "repulse" },
            onclick: { enable: false, mode: "push" },
            resize: true
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
          }
        },
        retina_detect: true
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#demo {
  width: 100%;
  height: 20vh;
  background: url("") white;
}
#inner-demo {
  width: 100%;
  height: 0%;
  display: flex;
  align-items: left;
  justify-content: left;
  color: black;
  font-size: 1.5em;
}
#inner-demo h1 {
  position: relative;
  left: 1em;
  top: 0.75em;
  font-family: "Cabinet Grotesk", sans-serif;
  font-weight: 450;
}

#inner-demo-2 {
  font-family: "Cabinet Grotesk", sans-serif !important;
  font-weight: 450;
  white-space: nowrap;
}
</style>
