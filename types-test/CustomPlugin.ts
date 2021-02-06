import { AbstractPlugin, Viewer } from '../types/photo-sphere-viewer';

export class CustomPlugin extends AbstractPlugin {

  static id = 'custom';

  constructor(psv: Viewer) {
    super(psv);
  }

  doSomething() {

  }

}
