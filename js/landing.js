function enableModes(sectionID, modes) {
	const section = document.getElementById(sectionID);

	const navigation = document.createElement("nav");
	modes.forEach(mode => {
		const block = document.createElement("p");
		const btn = document.createElement("a");
		btn.classList.add("button");
		btn.href = "/mode/" + mode.name;
		btn.innerHTML = mode.icon + " " + mode.name.charAt(0).toUpperCase() + mode.name.slice(1) + " Mode";

		block.appendChild(btn);
		navigation.appendChild(block);
	});
	section.appendChild(navigation);
}

enableModes("mode-selector", [
	// {name: "adventure", icon: ""},
	// {name: "techie", icon: ""},
	// {name: "cli", icon: ""},
	// {name: "classic", icon: ""},
]);
