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
    item: 'tokenActionHud.mosh.items',
    stat: 'tokenActionHud.mosh.stats',
    saves: 'tokenActionHud.mosh.saves',
    weapon: 'tokenActionHud.mosh.weapons',
    utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    skill: { id: 'skill', name: 'tokenActionHud.mosh.skill', type: 'system'},
    weapon: { id: 'weapon', name: 'tokenActionHud.mosh.weapons', type: 'system'},
    item: { id: 'item', name: 'tokenActionHud.mosh.items', type: 'system'},
    stat: { id: 'stat', name: 'tokenActionHud.mosh.stats', type: 'system'},
    save: {  id: 'save', name: 'tokenActionHud.mosh.saves', type: 'system'},
    utility:  { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
    skill: {groupId: 'skill'},
    weapon: { groupId: 'weapon'},
    item: { groupId: 'item'},
    stat: { groupId: 'stat'},
    save: {  groupId: 'save'},
}
