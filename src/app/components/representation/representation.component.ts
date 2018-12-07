import {Component, OnInit} from '@angular/core';
import {RepresentationService} from '../../services/representation/representation.service';
import {RepresentationModel} from '../../models/representation/representation.model';
import {RepresentationPartViewModel} from './representation-part-view.model';

@Component({
  templateUrl: './representation.component.html',
  styleUrls: ['./representation.component.css']
})
export class RepresentationComponent implements OnInit {

  public representation: RepresentationModel;
  public viewData: any[] = [];

  private static readonly FRACTION_DIGITS = 2;

  constructor(private representationService: RepresentationService) {
  }

  ngOnInit(): void {
    this.representationService.getRepresentation().subscribe(value => this.representation = value, error => console.log(error),
      () => {
        this.convertData();
      });
  }

  customizeArgumentText(arg) {
    return arg.value;
  }

  customizeValueText(arg){
    return arg.value + "%";
  }

  private convertData() {
    let plaintiff = new RepresentationPartViewModel('Paintif',
      Number(this.representation.getCountInPercent(this.representation.plaintiffCount).toFixed(RepresentationComponent.FRACTION_DIGITS)));
    let defendant = new RepresentationPartViewModel('Defedant',
      Number(this.representation.getCountInPercent(this.representation.defendantCount).toFixed(RepresentationComponent.FRACTION_DIGITS)));
    let other = new RepresentationPartViewModel('Other',
      Number(this.representation.getCountInPercent(this.representation.otherCount).toFixed(RepresentationComponent.FRACTION_DIGITS)));
    this.viewData = [other, defendant, plaintiff];
  }

  reloadData() {
    this.ngOnInit();
  }
}

