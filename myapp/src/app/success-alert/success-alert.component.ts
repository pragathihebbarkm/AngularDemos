import { Component } from "@angular/core";

@Component({

    selector:'success-alert',
    template:'<p>Success</p><button class="btn btn-success">Completed</button>',
    styles:[
       ` p{
            padding: 10px;
            background-color: yellow;
            border: 2px soid black;
        }`,
    ],
})

export class SuccessAlertComponent{}