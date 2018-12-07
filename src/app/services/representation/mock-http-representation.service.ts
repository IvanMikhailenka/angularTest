import {RepresentationService} from './representation.service';
import {RepresentationModel} from '../../models/representation/representation.model';
import {Observable, of} from 'rxjs';

export class MockHttpRepresentationService implements RepresentationService {

  private MIN_VALUE = 0;
  private MAX_VALUE = 1000;

  public getRepresentation(): Observable<RepresentationModel> {
    return of(this.getMockRepresentation());
  }

  private getMockRepresentation() {
    return new RepresentationModel(this.getRandomInt(this.MIN_VALUE, this.MAX_VALUE),
      this.getRandomInt(this.MIN_VALUE, this.MAX_VALUE), this.getRandomInt(this.MIN_VALUE, this.MAX_VALUE));
  }

  private getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

}
