import { CONSTANTS, Viewer } from 'photo-sphere-viewer';
import MarkersPlugin, { MarkersPluginOptions } from 'photo-sphere-viewer/dist/plugins/markers';
import { CustomPlugin } from './CustomPlugin';

const viewer = new Viewer({
  container: 'container',
  plugins: [
    [MarkersPlugin, {
       clickEventOnMarker: true,
     } as MarkersPluginOptions],
    CustomPlugin,
  ],
});

viewer.setPanorama('test.jpg', {
  transition: false,
})
  .then(() => {

  });

viewer.animate({
  longitude: 0,
  latitude: 0,
  speed: '2rpm',
})
  .then(() => {

  });

viewer.zoom(50);

viewer.setOption('useXmpData', true);

viewer.setOptions({
  useXmpData: false,
});

viewer.navbar.setCaption('Test');

viewer.panel.show({
  content: 'Content',
  clickHandler: (e: MouseEvent) => null,
});

viewer.once('ready', e => {

});

viewer.on('position-updated', (e, position) => {
  const longitude: number = position.longitude;
});

viewer.on(CONSTANTS.CHANGE_EVENTS.GET_ANIMATE_POSITION, (e, position) => {
  return {longitude: position.longitude + 0.1, latitude: position.latitude + 0.1};
});

const customPlugin: MarkersPlugin = viewer.getPlugin(CustomPlugin);
customPlugin.doSomething();

const customPluginAgain = viewer.getPlugin<CustomPlugin>('custom');
customPluginAgain.doSomething();
