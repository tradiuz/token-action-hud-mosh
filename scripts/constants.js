/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-mosh'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '2.0'

/**
 * Action types
 */
export const ACTION_TYPE = {
    item: 'tokenActionHud.mosh.item',
    statsAndSaves: 'Mosh.StatsAndSaves',
    utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    skill: { id: 'skill', name: 'Mosh.Skills', type: 'system' },
    weapon: { id: 'weapon', name: 'Mosh.Weapons', type: 'system' },
    armor: { id: 'armor', name: "Mosh.Armor", type: 'system' },
    item: { id: 'item', name: 'Mosh.Items', type: 'system' },
    condition: { id: 'condition', name: 'Mosh.Condition', type: 'system' },
    attribute: { id: 'attribute', name: 'tokenActionHud.mosh.attributes', type: 'system' },
    ability: { id: 'ability', name: 'Mosh.SpecialAbilities', type: 'system' },
    statsAndSaves: { id: 'statsAndSaves', name: 'Mosh.StatsAndSaves', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'core' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
    condition: { groupId: 'condition' },
    skill: { groupId: 'skill' },
    armor: { groupId: 'armor' },
    weapon: { groupId: 'weapon' },
    item: { groupId: 'item' },
    ability: { groupId: 'ability' },

}
