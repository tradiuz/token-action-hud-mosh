import { GROUP } from './constants.js'

/**
 * Default layout and groups
 */
export let DEFAULTS = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    const groups = GROUP
    Object.values(groups).forEach(group => {
        group.name = coreModule.api.Utils.i18n(group.name)
        group.listName = `Group: ${coreModule.api.Utils.i18n(group.listName ?? group.name)}`
    })
    const groupsArray = Object.values(groups)
    DEFAULTS = {
        layout: [
            {
                nestId: 'inventory',
                id: 'inventory',
                name: coreModule.api.Utils.i18n('tokenActionHud.mosh.inventory'),
                image: "icons/containers/bags/pack-leather-white-tan.webp",
                groups: [
                    { ...groups.weapon, nestId: 'inventory_weapon' },
                    { ...groups.armor, nestId: 'inventory_armor' },
                    { ...groups.item, nestId: 'inventory_item' },

                ]
            },
            {
                nestId: 'statsAndSaves',
                id: 'statsAndSaves',
                name: coreModule.api.Utils.i18n('Mosh.StatsAndSaves'),
                groups: [
                    { ...groups.statsAndSaves, nestId: 'statsAndSaves_statAndSaves' },
                    { ...groups.condition, nestId: 'statsAndSaves_condition' },
                ]
            },
            {
                nestId: 'skills',
                id: 'skills',
                name: coreModule.api.Utils.i18n('Mosh.Skills'),
                groups: [
                    { ...groups.skill, nestId: 'skills_skill' },
                    { ...groups.ability, nestId: 'skills_ability' },
                ]
            },
            {
                nestId: 'utility',
                id: 'utility',
                image: "systems/mosh/images/icons/modern_inventory_icons/transparent/gears_t_01.png",
                name: coreModule.api.Utils.i18n('tokenActionHud.mosh.utility'),
                groups: [
                    { ...groups.utility, nestId: 'utility_utility' },
                ]
            }
        ],
        groups: groupsArray
    }
})
