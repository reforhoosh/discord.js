'use strict';

// This file contains the typedefs for camel-cased json data
const { ComponentType } = require('discord-api-types/v10');
/**
 * @typedef {Object} BaseComponentData
 * @property {ComponentType} type The type of component
 */
/**
 * @typedef {BaseComponentData} ActionRowData
 * @property {ComponentData[]} components The components in this action row
 */
/**
 * @typedef {BaseComponentData} ButtonComponentData
 * @property {ButtonStyle} style The style of the button
 * @property {?boolean} disabled Whether this button is disabled
 * @property {string} label The label of this button
 * @property {?APIComponentEmoji} emoji The emoji on this button
 * @property {?string} customId The custom id of the button
 * @property {?string} url The URL of the button
 */
/**
 * @typedef {object} SelectMenuComponentOptionData
 * @property {string} label The label of the option
 * @property {string} value The value of the option
 * @property {?string} description The description of the option
 * @property {?APIComponentEmoji} emoji The emoji on the option
 * @property {?boolean} default Whether this option is selected by default
 */
/**
 * @typedef {BaseComponentData} SelectMenuComponentData
 * @property {string} customId The custom id of the select menu
 * @property {?boolean} disabled Whether the select menu is disabled or not
 * @property {?number} maxValues The maximum amount of options that can be selected
 * @property {?number} minValues The minimum amount of options that can be selected
 * @property {?SelectMenuComponentOptionData[]} options The options in this select menu
 * @property {?string} placeholder The placeholder of the select menu
 */

/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData} MessageComponentData
 /

/**
 * @typedef {BaseComponentData} TextInputComponentData
 * @property {string} customId The custom id of the text input
 * @property {TextInputStyle} style The style of the text input
 * @property {string} label The text that appears on top of the text input field
 * @property {?number} minLength The minimum number of characters that can be entered in the text input
 * @property {?number} maxLength The maximum number of characters that can be entered in the text input
 * @property {?boolean} required Whether or not the text input is required or not
 * @property {?string} value The pre-filled text in the text input
 * @property {?string} placeholder Placeholder for the text input
 */

/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData|TextInputComponentData} ComponentData
 */

/**
 * Any emoji data that can be used within a button
 * @typedef {APIMessageComponentEmoji|string} ComponentEmojiResolvable
 */

class Components extends null {
  /**
   * Transforms API data into a component
   * @param {APIMessageComponent|Component} data The data to create the component from
   * @returns {Component}
   */
  static createComponent(data) {
    if (data instanceof Component) {
      return data;
    }

    switch (data.type) {
      case ComponentType.ActionRow:
        return new ActionRow(data);
      case ComponentType.Button:
        return new ButtonComponent(data);
      case ComponentType.SelectMenu:
        return new SelectMenuComponent(data);
      case ComponentType.TextInput:
        return new TextInputComponent(data);
      default:
        throw new Error(`Found unknown component type: ${data.type}`);
    }
  }
}

module.exports = Components;

const ActionRow = require('../structures/ActionRow');
const ButtonComponent = require('../structures/ButtonComponent');
const Component = require('../structures/Component');
const SelectMenuComponent = require('../structures/SelectMenuComponent');
const TextInputComponent = require('../structures/TextInputComponent');
