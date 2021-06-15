# Playground

This page allows to test (almost) all options of Photo Sphere Viewer with your own panorama (equirectangular only).

<Playground/>
![Panorama3Oscar Sachez](https://user-images.githubusercontent.com/85916005/121985849-2320c400-cd5b-11eb-9098-eda289e95650.png)
<script src="https://cdn.jsdelivr.net/npm/three/build/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uevent@2/browser.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.js"></script>

<div id="viewer"></div>

<style>
  /* the viewer container must have a defined size */
  #viewer {
    width: 100vw;
    height: 50vh;
  }
</style>

<script>
  var viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#viewer'),
    panorama: 'path/to/panorama.jpg'
  });
</script>
