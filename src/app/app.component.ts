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
  data2: any;
  options2: any;

  constructor() {}

  ngOnInit() {
    this.data = {
      labels: ["10.000", "100.000", "500.000", "1.000.000"],
      datasets: [
        {
          label: "Processamento Sequencial",
          data: [0.16, 15.49, 389.122, 1559.03],
          fill: true,
          borderColor: "#4bc0c0",
        },
        {
          label: "Processamento Paralelo",
          data: [0.61, 20.96, 402.59, 1459.04],
          fill: true,
          borderColor: "#e5c8",
        },
      ],
    };
    this.options = {
      title: {
        text: "Relação de tempo de processamento para Selection Sort",
        display: true,
        fontSize: 16,
      },
      legend: {
        position: "bottom",
      },
    };

    this.data2 = {
      labels: [
        "1000",
        "2000",
        "4000",
        "8000",
        "16000",
        "32000",
        "64000",
        "128000",
        "256000",
        "512000",
        "1024000",
        "2048000",
        "4096000",
        "8192000",
        "16384000",
        "32768000",
      ],
      datasets: [
        {
          label: "Processamento Paralelo Java",
          data: [
            5,
            37,
            3,
            4,
            3,
            6,
            8,
            16,
            24,
            76,
            123,
            251,
            514,
            1139,
            2304,
            3846,
          ],
          fill: true,
          borderColor: "#4bc0c0",
        },
        {
          label: "Processamento Paralelo C",
          data: [
            5,
            37,
            3,
            4,
            3,
            6,
            8,
            16,
            24,
            76,
            123,
            251,
            514,
            1139,
            2304,
            3846,
          ],
          fill: true,
          borderColor: "#e5c8",
        },
        {
          label: "Processamento Sequencial C",
          data: [
            5,
            37,
            3,
            4,
            3,
            6,
            8,
            16,
            24,
            76,
            123,
            251,
            514,
            1139,
            2304,
            3846,
          ],
          fill: true,
          borderColor: "#715ec1",
        },
      ],
    };
    this.options2 = {
      title: {
        text: "Relação de tempo de processamento para Merge Sort",
        display: true,
        fontSize: 16,
      },
      legend: {
        position: "bottom",
      },
    };
  }
}
