declare class MySet {
    has(value: number): boolean;
    add(value: number): this;
}
declare let mySet: MySet;
declare class MyClass {
}
interface MyInterface {
}
declare type State = {
    [key: string]: string;
};
declare class StringDatabase {
    state: State;
    get(key: string): string | null;
    set(key: string, value: string): void;
    static from(state: State): StringDatabase;
}
