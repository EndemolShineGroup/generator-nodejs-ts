import Generator from "yeoman-generator";
export declare type FixedGenerator = Generator & {
    answers: Generator.Answers;
};
export declare const Files: string[];
export declare const PublicFiles: string[];
export declare const PrivateFiles: string[];
declare const _default: (gen: FixedGenerator) => void;
export default _default;
