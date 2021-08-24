<template>
  <div class="min-h-screen flex bg-primary-500 text-white overflow-hidden">
    <p>hi {{ myvar }}</p>
  </div>
</template>

<style lang="scss">
:root {
    touch-action: pan-x pan-y;
    height: 100%
  }

  body {
    touch-action: manipulation;
  }
</style>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import { mystring } from '@lib/library';

@Component({
	components: {
	}
})
export default class App extends Vue {
  myvar: string;

  created () {
  	this.myvar = mystring;
  }
}
</script>
