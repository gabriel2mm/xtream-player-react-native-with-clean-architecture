import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-login',
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

    formGroup: FormGroup;
    hidePassoword: boolean = true;
    private readonly urlPattern: RegExp = /^(https?:\/\/)?[a-zA-Z0-9.-]+\.[a-z]{2,}(?::\d{1,5})?$/;
    
    @Input()
    loading: boolean = false;
    
    @Output() onLogin: EventEmitter<any> = new EventEmitter();

    constructor(private formBuild: FormBuilder) {
        this.formGroup = this.formBuild.group({
            url: ['http://acsb.sh:80', [Validators.required, Validators.pattern(this.urlPattern)]],
            username: ['226858', [Validators.required]],
            password: ['xP6jF2', [Validators.required]]
        })
    }

    onContinue(event: MouseEvent){
        this.shouldContainHttpPrefixUrl();
        this.onLogin.emit({ value: this.formGroup.value, event });
    }

    private shouldContainHttpPrefixUrl(){
        const urlValue = this.formGroup?.controls['url']?.value as string;
        if(!urlValue.includes('http://') && !urlValue.includes('https://')){
            this.formGroup?.controls['url']?.setValue('http://'.concat(urlValue));
        }
    }
}
