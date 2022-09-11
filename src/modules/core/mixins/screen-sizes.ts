import Component from 'nuxt-class-component';
import Vue from 'vue';

const smallScreens = ['xs', 'sm', 'md'];

@Component
export default class ScreenSizes extends Vue {
  public $vssWidth!: any;

  get isSmallScreen() {
    return this.$screen.width < 1024 || this.$device.isMobile;
  }

  get responsiveClass() {
    return this.isSmallScreen ? 'mobile' : 'desktop';
  }
}
