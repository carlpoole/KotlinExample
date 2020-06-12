import { WebPlugin } from '@capacitor/core';
import { KotlinExamplePlugin } from './definitions';

export class KotlinExampleWeb extends WebPlugin implements KotlinExamplePlugin {
  constructor() {
    super({
      name: 'KotlinExample',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const KotlinExample = new KotlinExampleWeb();

export { KotlinExample };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(KotlinExample);
