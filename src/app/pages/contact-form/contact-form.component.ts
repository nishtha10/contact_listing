import { Router } from '@angular/router';
import { ContactService } from './../../core/services/contact.service';
import { ContactModel } from './../../core/model/contact.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  contactForm: ContactModel = new ContactModel();
  selectedFile: File;
  fileName: string;
  commonsrc: string | ArrayBuffer;
  unSubscribeAll: Subject<void> = new Subject();
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      !this.contactForm.firstName &&
      !this.contactForm.lastName &&
      !this.contactForm.email
    ) {
      return;
    } else {
      // const formData = new FormData();
      // formData.append('firstName', this.contactForm.firstName);
      // formData.append('lastName', this.contactForm.lastName);
      // formData.append('email', this.contactForm.email);
      // formData.append('file', this.selectedFile);
      const param = {
        firstName: this.contactForm.firstName,
        lastName: this.contactForm.lastName,
        email: this.contactForm.email,
        file: this.commonsrc,
      };
      this.contactService
        .addContact(param)
        .pipe(takeUntil(this.unSubscribeAll))
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/']);
        });
    }
  }

  uploadFiles(files): void {
    console.log(files);
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    } else {
      const reader = new FileReader();
      this.selectedFile = files[0];
      reader.readAsDataURL(files[0]);
      reader.onload = (reload: any) => {
        const imageUrl = reload.target.result;
        const imgURL = reader.result;
        const isprofileImage = true;
        this.commonsrc = imgURL;
      };
      console.log(this.selectedFile);
      this.fileName = files[0].name;
    }
  }

  backtolist(): void {
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    if (this.unSubscribeAll) {
      this.unSubscribeAll.next();
      this.unSubscribeAll.complete();
    }
  }
}
