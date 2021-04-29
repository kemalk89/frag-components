import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'frag-components',
  globalStyle: 'src/global/global-styles.css',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'frag-components',
      proxiesFile: '../frag-components-react/src/generated/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
