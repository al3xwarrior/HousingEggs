import Settings from "./Settings";

register("chat", (player, minutes, seconds, miliseconds, event) => {
	
	if (!Settings.moduleEnabled || !Settings.command) { return }
	
	var command = Settings.command;
	command = command.replace("%player%", player);

	ChatLib.command(command);
	

}).setCriteria("${player} completed the egg hunt in ${minutes}:${seconds}.${miliseconds}!");

register("command", () => Settings.openGUI()).setName("heggs");


ChatLib.chat("&a&lHousingEggs Loaded! &8(&f/heggs&8)")