interface ConvertFunc {
    (name: string): string;
}
export declare function changeProps(obj: any, fn: ConvertFunc): any;
export declare function camelProps(obj: any): any;
export declare function snakeProps(obj: any): any;
export {};
