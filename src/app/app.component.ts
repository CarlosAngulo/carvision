import { Component, OnInit } from '@angular/core';
import { SupabaseService } from './api/infraestructure/supabase/users-supabase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management'

  session = this.supabase.session

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_:any, session:any) => (this.session = session))
  }
}