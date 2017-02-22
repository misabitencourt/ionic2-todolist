import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import {MainApp} from './app.component';

// Components
import {Todo} from './todo/todo.component';
import {TodoForm} from './todo/todo.form.component';
import {TodoList} from './todo/todo.list.component';

// Services
import {TodoService} from './todo/todo.service'

@NgModule({
  declarations: [
    MainApp,
    Todo,
    TodoForm,
    TodoList
  ],
  bootstrap: [IonicApp],
  imports: [
    IonicModule.forRoot(MainApp)
  ],
  entryComponents: [
    MainApp,
    Todo,
    TodoForm,
    TodoList
    // AboutPage,
    // AccountPage,
    // LoginPage,
    // MapPage,
    // PopoverPage,
    // SchedulePage,
    // ScheduleFilterPage,
    // SessionDetailPage,
    // SignupPage,
    // SpeakerDetailPage,
    // SpeakerListPage,
    // TabsPage,
    // TutorialPage,
    // SupportPage
  ],
  providers: [TodoService]
})
export class AppModule { }
