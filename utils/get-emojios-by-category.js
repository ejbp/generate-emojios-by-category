const _set = require("lodash/set");
const emojiData = require('react-emojione/lib/data/emoji-shortnames');

/**
 * notAllowed: [(name)=>name.startsWith(":middle_finger")]
 */
const getEmojiosByCategory = (notAllowed=[]) => {
  const byGroup = {};

  Object.keys(emojiData).map(key => {
    if (key == "modifier") return;

    byGroup[key] = [];
    emojiData[key].map(name => {

      const isDenied = notAllowed.some(filter=>filter(name));

      if ( isDenied ) {
        return;
      }
      
      const isTone = name.match(/_tone\d/) != undefined;

      const obj = {
        name,
        isTone,
        group: key
      };

      if (isTone) {
        const mainName = name.replace(/_tone\d/, "");
        _set(byGroup[key], `${mainName}.tones.${name}`, obj);
      } else {
        byGroup[key].push(obj);
      }
    });
  });

  return byGroup;
};


module.exports = getEmojiosByCategory;