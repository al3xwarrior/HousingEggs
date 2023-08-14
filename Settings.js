import { @Vigilant, @TextProperty, @ParagraphProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, @ColorProperty, @CheckboxProperty, @SelectorProperty, @PercentSliderProperty, @SliderProperty, Color } from 'Vigilance';

@Vigilant("HousingEggs")
class Settings {
	
	@SwitchProperty({
        name: "Enabled",
        description: "Should the module be enabled and checking for egg messages?",
        category: "Settings"
    })
    moduleEnabled = false;
	
	@ParagraphProperty({
        name: "Command",
        description: "Insert the command without the '/' you want to be ran when a player finished a egg hunt! \n\nIn the command write %player% where you want the players name to be, for example 'givereward %player%' would run '/givereward Al3xWarrior'",
		category: "Settings"
    })
    command = "givereward %player%"
	

    constructor() {
        this.initialize(this);
    }
}

export default new Settings();