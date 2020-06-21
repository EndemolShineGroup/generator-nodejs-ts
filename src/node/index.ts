import { AbstractGenerator } from '../lib/AbstractGenerator';
import files from './files';

class NodeGenerator extends AbstractGenerator {
  constructor(args: string | string[], options: {}) {
    super(args, options, __dirname);

    this.option('projectScope', {
      description: 'NPM scope: ',
      type: String,
    });
    this.option('projectName', {
      description: 'Project Name: ',
      type: String,
    });
    this.option('projectDescription', {
      description: 'Description: ',
      type: String,
    });
    this.option('version', {
      description: 'Version: ',
      type: String,
    });
    this.option('isPublic', {
      description: 'Is this a public package?',
      type: Boolean,
    });
  }

  writing() {
    this.copyTemplates(files);

    const {
      isPublic,
      projectName,
      projectScope,
      projectDescription,
      version,
    } = this.options;

    const license = isPublic ? 'MIT' : 'UNLICENSED';

    const packageJsonUpdates = {
      description: projectDescription,
      homepage: `https://github.com/EndemolShineGroup/${projectName}`,
      license,
      name: `${projectScope}/${projectName}`,
      repository: {
        url: `https://github.com/EndemolShineGroup/${projectName}.git`,
      },
      version,
    };

    this.fs.extendJSON(
      this.destinationPath('package.json'),
      packageJsonUpdates,
    );
  }

  async install() {
    const dependencies: string[] = [];
    const devDependencies: string[] = ['jest', 'rimraf'];
    this.yarnInstall(dependencies);
    this.yarnInstall(devDependencies, { dev: true });
  }
}

export = NodeGenerator;
