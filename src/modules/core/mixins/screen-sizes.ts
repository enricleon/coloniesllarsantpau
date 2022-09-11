import Component from 'nuxt-class-component';
import Vue from 'vue';

const smallScreens = ['xs', 'sm', 'md'];

@Component
export default class ScreenSizes extends Vue {
  public $vssWidth!: any;

  get isSmallScreen() {
    // return this.$vssWidth < 1280 ? 'mobile' : 'desktop';
    // return this.$device.isMobile;
    return this.$screen.width < 1280;
  }

  get responsiveClass() {
    return this.isSmallScreen ? 'mobile' : 'desktop';
  }
}
