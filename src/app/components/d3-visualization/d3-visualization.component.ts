import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { D3VisualizationService } from "src/app/services/d3-visualization.service";


@Component({
  selector: 'app-d3-visualization',
  templateUrl: './d3-visualization.component.html',
  styleUrls: ['./d3-visualization.component.css']
})

export class D3VisualizationComponent implements OnInit, OnDestroy {
  data$!: Observable<any>;
  private unsubscribe$ = new Subject<void>();

  constructor(private service: D3VisualizationService) { }

  ngOnInit(): void {
    this.data$ = this.service.fetchData().pipe(takeUntil(this.unsubscribe$));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}