import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-list",
	templateUrl: "list.page.html",
	styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
	private selectedItem: any;
	private icons = [
		"flask",
		"wifi",
		"beer",
		"football",
		"basketball",
		"paper-plane",
		"american-football",
		"boat",
		"bluetooth",
		"build"
	];
	public items: Array<{ title: string; note: string; icon: string }> = [];
	constructor() {
		for (let i = 1; i < 11; i++) {
			this.items.push({
				title: "Item " + i,
				note: "This is item #" + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}
	}

	ngOnInit() {
		const mathsteps = require("mathsteps");

		const steps = mathsteps.simplifyExpression("2x + 2x + x + x");

		steps.forEach(step => {
			console.log("before change: " + step.oldNode.toString()); // before change: 2 x + 2 x + x + x
			console.log("change: " + step.changeType); // change: ADD_POLYNOMIAL_TERMS
			console.log("after change: " + step.newNode.toString()); // after change: 6 x
			console.log("# of substeps: " + step.substeps.length); // # of substeps: 3
		});

		// const steps = mathsteps.solveEquation('2x + 3x = 35');

		// steps.forEach(step => {
		//   console.log("before change: " + step.oldEquation.ascii());  // e.g. before change: 2x + 3x = 35
		//   console.log("change: " + step.changeType);                  // e.g. change: SIMPLIFY_LEFT_SIDE
		//   console.log("after change: " + step.newEquation.ascii());   // e.g. after change: 5x = 35
		//   console.log("# of substeps: " + step.substeps.length);      // e.g. # of substeps: 2
		// });
	}
	// add back when alpha.4 is out
	// navigate(item) {
	//   this.router.navigate(['/list', JSON.stringify(item)]);
	// }
}
