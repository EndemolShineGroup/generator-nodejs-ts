declare const _default: ({
    type: string;
    name: string;
    message: string;
    default: string;
    filter: (input: string) => string;
} | {
    type: string;
    name: string;
    message: string;
    filter: (input: string) => string;
    default?: undefined;
} | {
    type: string;
    name: string;
    message: string;
    default?: undefined;
    filter?: undefined;
})[];
export default _default;
