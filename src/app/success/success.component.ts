import { Component } from '@angular/core'
import { combineLatest } from 'rxjs';

@Component({
    selector:'app-my-success',
    template: 
    `
    <p> This is my success message: {{success_msg}}
    `,
    styles:[
        `
        text-color: 'black';
        `
    ]
})


export class SuccessComponent {

    success_msg = "congo bro you made it!!!"

}