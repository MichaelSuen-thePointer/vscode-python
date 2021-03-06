import { inject, injectable } from 'inversify';
import 'reflect-metadata';
import { IPathUtils, IsWindows } from '../types';
import { NON_WINDOWS_PATH_VARIABLE_NAME, WINDOWS_PATH_VARIABLE_NAME } from './constants';

@injectable()
export class PathUtils implements IPathUtils {
    constructor( @inject(IsWindows) private isWindows: boolean) { }
    public getPathVariableName() {
        return this.isWindows ? WINDOWS_PATH_VARIABLE_NAME : NON_WINDOWS_PATH_VARIABLE_NAME;
    }
}
