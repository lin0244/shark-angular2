import { Component } from '@angular/core';

@Component({
    selector: 'popover-demo',
    templateUrl: '/shark-angular2/components/popover.html'
})
export class PopoverComponent {
    popoverConfig = {
        title: '枫桥夜泊',
        content: '月落乌啼霜满天，<br/>江枫渔火对愁眠。<br/>姑苏城外寒山寺，<br/>夜半钟声到客船。'
    }
};
