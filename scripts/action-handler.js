// System Module Imports
import { ACTION_TYPE, ITEM_TYPE } from './constants.js'
import { Utils } from './utils.js'

export let ActionHandler = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    /**
     * Extends Token Action HUD Core's ActionHandler class and builds system-defined actions for the HUD
     */
    ActionHandler = class ActionHandler extends coreModule.api.ActionHandler {
        /**
         * Build system actions
         * Called by Token Action HUD Core
         * @override
         * @param {array} groupIds
         */a
        async buildSystemActions(groupIds) {
            // Set actor and token variables
            this.actors = (!this.actor) ? this._getActors() : [this.actor]
            this.actorType = this.actor?.type

            // Settings
            this.displayUnequipped = Utils.getSetting('displayUnequipped')

            // Set items variable
            if (this.actor) {
                let items = this.actor.items
                items = coreModule.api.Utils.sortItemsByName(items)
                this.items = items
            }

            if (this.actorType === 'character' || this.actorType === 'creature') {
                this.#buildCharacterActions()
            } else if (!this.actor) {
                this.#buildMultipleTokenActions()
            }
        }

        /**
         * Build character actions
         * @private
         */
        #buildCharacterActions() {
            this.#buildStatsAndSaves('statsAndSaves', 'statsAndSaves');
            this.#buildInventory();
        }

        /**
         * Build multiple token actions
         * @private
         * @returns {object}
         */
        #buildMultipleTokenActions() {
        }
        /**
         * Build Stats and Saves
         * @private
         */
        async #buildStatsAndSaves(actionType, groupId) {
            let actions = []
            const stats = this.actor.system.stats
            const groupData = { id: groupId, type: 'system' };

            actions = Object.keys(stats).forEach(stat => {
                const id = `${actionType}-${stat}`
                const name = stats[stat].label
                const encodedValue = [actionType, stat].join(this.delimiter)
                const info2 = { text: stats[stat].value + (stats[stat].mod || 0) }
                const tooltip = { content: stats[stat].rollLabel }
                const img = '/systems/mosh/images/icons/ui/attributes/' + stat.toLocaleLowerCase() + '.png'

                this.addActions([{
                    id,
                    name,
                    encodedValue,
                    info2,
                    tooltip,
                    img
                }], groupData);

            });
            ``
        }
        /**
         * Build inventory
         * @private
         */
        async #buildInventory() {
            if (this.items.size === 0) return

            const actionTypeId = 'item'
            const inventoryMap = new Map()

            for (const [itemId, itemData] of this.items) {
                const type = itemData.type
                const equipped = itemData.equipped

                if (equipped || this.displayUnequipped) {
                    const typeMap = inventoryMap.get(type) ?? new Map()
                    typeMap.set(itemId, itemData)
                    inventoryMap.set(type, typeMap)
                }
            }

            for (const [type, typeMap] of inventoryMap) {
                const groupId = ITEM_TYPE[type]?.groupId

                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...typeMap].map(([itemId, itemData]) => {
                    const id = itemId
                    const name = itemData.name
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)
                    const tooltip = { content: itemData.system.description };
                    const img = itemData.img;
                    return {
                        id,
                        name,
                        tooltip,
                        img,
                        listName,
                        encodedValue
                    }
                })

                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }
    }
})
