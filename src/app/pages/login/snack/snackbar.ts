import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    standalone: true,
    imports: [ MatIconModule ],
    selector: 'app-snackbar',
    template: `
        <span matSnackBarLabel>
            <div class="px-4 flex flex-row items-center gap-4">
                <mat-icon class="pt-0.5">error</mat-icon>
                <span>Não foi possível fazer login. Tente novamente!</span>
            </div>
        </span>
    `
})
export class SnackBarComponent {

}