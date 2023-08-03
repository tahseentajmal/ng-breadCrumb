import { Component, OnInit } from "@angular/core";
import { HistoryTrailsService } from "../history-trails.service";

@Component({
  selector: "app-history-trails",
  templateUrl: "./history-trails.component.html",
  styleUrls: ["./history-trails.component.css"]
})
export class HistoryTrailsComponent implements OnInit {
  historyTrails: any[];

  constructor(private historyService: HistoryTrailsService) { }

  ngOnInit() {
    this.historyTrails = this.historyService.getHistoryTrails();
  }
}
