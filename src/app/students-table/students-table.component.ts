import { Component } from '@angular/core';
 import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss',
})
export class StudentsTableComponent {
  
}
