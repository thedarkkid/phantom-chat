import { SideEffect } from "../typing";
import { Dispatch, useCallback } from "react";

/**
 * Creates new dispatch using useCallback, a sideEffect function and the old dispatch.
 * This allows our dispatch to utilize async functions (sideEffects)
 * @param sideEffect
 * @param dispatch
 */
export const useSideEffects = <T>(sideEffect: SideEffect<T>, dispatch: Dispatch<T>) =>
	useCallback(async (action: T) => await sideEffect(action, dispatch), []);