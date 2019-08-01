/**
 * @description
 * Generator Logger
 */
import FolderLogger from 'folder-logger'
import tempDir from 'temp-dir'

let Logger = new FolderLogger(tempDir)

export const getLogger: () => any = () => Logger
export const setLogger = ( newLoggerInstance ) => Logger = newLoggerInstance