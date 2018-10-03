"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
const prompts_1 = __importDefault(require("./prompts"));
const templating_1 = __importDefault(require("./templating"));
const path_1 = __importDefault(require("path"));
class EndemolGenerator extends yeoman_generator_1.default {
    constructor(args, opts) {
        super(args, opts);
        this.answers = {};
        this.sourceRoot(path_1.default.join(__dirname, 'templates'));
    }
    async initializing() {
        this.log('A few questions about your project...');
        this.log('Note: Project Name will also be used for git urls');
    }
    async prompting() {
        this.answers = await this.prompt(prompts_1.default);
        this.configureProjectRoot();
    }
    async writing() {
        templating_1.default(this);
    }
    async install() {
        this.yarnInstall();
    }
    configureProjectRoot() {
        const targetDirName = this.destinationRoot().split(path_1.default.sep).pop();
        if (targetDirName !== this.answers.projectName) {
            this.destinationRoot(this.answers.projectName);
            console.log('this.destinationRoot', this.destinationRoot());
        }
    }
}
exports.default = EndemolGenerator;
//# sourceMappingURL=index.js.map