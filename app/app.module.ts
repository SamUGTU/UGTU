import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { PageStartedComponent } from '../app/page-started/page-started.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ PageStartedComponent ],
    bootstrap:    [ PageStartedComponent ]
})
export class AppModule { }