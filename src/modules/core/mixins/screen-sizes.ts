import Vue from 'vue';

const smallScreens = ['xs', 'sm', 'md'];

export default class ScreenSizes extends Vue {
  get isSmallScreen() {
    return smallScreens.includes(this.$mq);
  }

  get responsiveClass() {
    return this.isSmallScreen ? 'mobile' : 'desktop';
  }
}
