import {
    IArrayContains,
    IEntityExists,
    IEventWasCriticalHit,
    IFalse,
    ICompare,
    IHasSpawned,
    IHasStatus,
} from '../../interface/value'

export type ValueBoolType
    = IArrayContains
    | ICompare
    | IEntityExists
    | IEventWasCriticalHit
    | IFalse
    | IHasSpawned
    | IHasStatus