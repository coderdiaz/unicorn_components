import { Component, Input } from '@angular/core';

import { UniButtonBaseComponent } from '../../base/button-base.component';
import { UniPosition } from '../../../models/types';

@Component({
    selector: 'uni-button-popup',
    templateUrl: 'button-popup.component.html',
    styleUrls: ['button-popup.component.scss'],
})
export class UniButtonPopupComponent extends UniButtonBaseComponent {
    @Input() position: UniPosition = 'bottom-left';

}
