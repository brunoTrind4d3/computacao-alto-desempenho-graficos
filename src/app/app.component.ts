import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "grafico-n1";
  data: any;
  options: any;

  constructor() {}

  ngOnInt() {
    this.data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#4bc0c0",
        },
        {
          label: "Second Dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: "#565656",
        },
      ],
    };
    this.options = {
      title: {
        display: true,
        fontSize: 16,
      },
      legend: {
        position: "bottom",
      },
    };
  }
}
