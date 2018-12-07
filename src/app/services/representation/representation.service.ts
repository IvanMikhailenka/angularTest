import {Observable} from 'rxjs';
import {RepresentationModel} from '../../models/representation/representation.model';

export abstract class RepresentationService {
  public abstract getRepresentation(): Observable<RepresentationModel>;
}
