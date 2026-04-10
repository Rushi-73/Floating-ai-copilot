import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Floating AI Copilot";
  weatherData: any[] = [];
  loading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchWeatherData();
  }

  fetchWeatherData(): void {
    this.loading = true;
    this.http
      .get<any[]>("https://localhost:7001/api/weatherforecast")
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.loading = false;
        },
        error: (error) => {
          console.error("Error fetching weather data:", error);
          this.loading = false;
        },
      });
  }
}
