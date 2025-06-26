import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

// Fixed: Add move(0) before standalone deletes to activate cursor tracking
new TypeIt("#inner-demo-2", {
    speed: 100,
    lifelike: true,
    cursor: true,
    cursorSpeed: 300,
    loop: true
})
    .pause(1000)
    .type("👋 Hi! I'm Jing")
    .pause(800)
    .move(-3)
    .delete(1)
    .pause(100)
    .type("j")
    .pause(300)
    .move(5)
    .delete(2)
    .pause(200)
    .type("–bi on GitHub.")
    .pause(2000)
    .move(-2)  // Activate cursor tracking for delete
    .delete(18)  // Delete entire current text
    .pause(300)
    .type("also on https://jing.vision")
    .pause(2000)
    .move(0)  // Activate cursor tracking for delete
    .delete(27)  // Delete "also on https://jing.vision"
    .pause(300)
    .type("vibe coding.")
    .pause(2000)
    .pause(800)
    .move(0)  // Activate cursor tracking for delete
    .delete(12)  // Delete "vibe coding"
    .pause(300)
    .type("fixing issues.")
    .pause(2000)
    .move(0)
    .delete(14)  // Delete "fixing issues"
    .pause(300)
    .type("merging PRs.")
    .pause(2000)
    .move(0)
    .delete(15)  // Delete "merging PRs"
    .pause(300)
    .type(" hope you enjoy my work. 🫡")
    .pause(2000)
    .go();