import Generator from 'yeoman-generator';
declare class EndemolGenerator extends Generator {
    answers: Generator.Answers;
    constructor(args: string | string[], opts: {});
    initializing(): Promise<void>;
    prompting(): Promise<void>;
    writing(): Promise<void>;
    install(): Promise<void>;
    configureProjectRoot(): void;
}
export default EndemolGenerator;
