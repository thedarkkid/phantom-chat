import { Dispatch } from "react";

export interface GenericObject {
	[key: string]: any;
}
export interface GenericReadonlyObject {
	readonly [key: string]: any;
}

export interface SideEffect<T> {
	(action: T, dispatch: Dispatch<T>): void;
}