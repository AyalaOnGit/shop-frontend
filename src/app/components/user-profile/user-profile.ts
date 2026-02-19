import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea'; // הנתיב החדש
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { Router } from '@angular/router';
import { Header } from '../header1/header';
import { Footer1 } from '../footer1/footer';

@Component({
  selector: 'app-user-profile',
  imports: [Header,Footer1,CommonModule,ReactiveFormsModule,FormsModule,InputTextModule,TextareaModule,ButtonModule,DividerModule,IconFieldModule, InputIconModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile implements OnInit {
  profileForm!: FormGroup;
  isEditing = false; // משתנה למעבר בין מצב תצוגה למצב עריכה
  originalValues: any; // משתנה לשמירת הנתונים המקוריים

  constructor(private fb: FormBuilder, private router: Router) {}

  goToOrderHistory() {
    this.router.navigate(['/order-history']); // ניווט לנתיב שהגדרת ב-Routes
  }

  ngOnInit(): void {
    // אתחול הטופס עם ערכי ברירת מחדל (בהמשך יגיע מהשרת)
    this.profileForm = this.fb.group({
      firstName: ['ישראל', Validators.required],
      lastName: ['ישראלי', Validators.required],
      phone: ['050-1234567', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['test@example.com', [Validators.required, Validators.email]], // שדה חדש
      address: ['רחוב השקד 10', Validators.required],
      city: ['ירושלים', Validators.required]
    });
    // שמירת הערכים ההתחלתיים בתוך המשתנה
    this.originalValues = this.profileForm.value;
    this.profileForm.disable(); // בהתחלה הטופס חסום לעריכה
  }

  toggleEdit() {
    if (this.isEditing) {
      // אם אנחנו מבטלים עריכה - נחזיר את הערכים המקוריים לטופס
      this.profileForm.patchValue(this.originalValues);
      this.profileForm.disable();
    } else {
      // אם אנחנו מתחילים עריכה - נאפשר את הטופס
      this.profileForm.enable();
    }
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    if (this.profileForm.valid) {
      // אם המשתמש שמר, הנתונים החדשים הופכים להיות ה"מקוריים" החדשים
      this.originalValues = this.profileForm.value;
      console.log('הנתונים נשמרו:', this.originalValues);
      this.isEditing = false;
      this.profileForm.disable();
    }
  }

  feedbackText: string = ''; // משתנה חדש

sendFeedback(message: string) {
  const adminEmail = 'admin@yourstore.com';
  const subject = 'משוב חדש מהאתר';
  const body = encodeURIComponent(message);
  
  window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  
  console.log('המשוב נשלח בהצלחה');
}
}
