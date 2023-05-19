<script lang="ts">
</script>

<div class="cover-placeholder"></div>

<style lang="less">
  .cover-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('/placeholder.svg');
    background-position: center;
    background-size: 30%;
    background-repeat: no-repeat;
    animation: rotating 1s linear infinite;
  }

  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
