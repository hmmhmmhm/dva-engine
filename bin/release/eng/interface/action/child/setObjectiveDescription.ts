import { ValuePlayerType, ValueStringType, ValueObjectiveDescriptionReevaluationType } from '../../../type'

/**
 * Sets the text at the top center of the screen
 * that normally describes the objective to
 * a message visible to specific players.
 */
export interface ISetObjectiveDescription {
    /**
     * Visible to - One or more players who will
     * see the message. Can use most Player based Value Syntax.
     */
    visibleTo: ValuePlayerType
    /**
     * Header - The message to be displayed. Can
     * use most String based Value Syntax to specify.
     */
    header: ValueStringType
    /**
     * Reevaluation - Specifies which of this action’s
     * inputs will be continously reevaluated.
     * The message will keep asking for and using
     * new values from reevaluated inputs. Can
     * choose “Visible to and String” or “String”
     */
    reevaluation: ValueObjectiveDescriptionReevaluationType
}