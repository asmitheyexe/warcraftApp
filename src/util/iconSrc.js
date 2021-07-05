export function getSmallIconOnClassName(name) {
  switch (name.toLowerCase()) {
    case "demonhunter":
      return "dh_icon_sm.png";
    case "deathknight":
      return "dk_icon_sm.png";
    case "druid":
      return "druid_icon_sm.png";
    case "hunter":
      return "hunter_icon_sm.png";
    case "mage":
      return "mage_icon_sm.png";
    case "monk":
      return "monk_icon_sm.png";
    case "paladin":
      return "paladin_icon_sm.png";
    case "priest":
      return "priest_icon_sm.png";
    case "rogue":
      return "rogue_icon_sm.png";
    case "shaman":
      return "shaman_icon_sm.png";
    case "warlock":
      return "warlock_icon_sm.png";
    case "warrior":
      return "warrior_icon_sm.png";
    default:
      return "";
  }
}
