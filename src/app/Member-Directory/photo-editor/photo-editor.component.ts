import { User } from './../../Models/user';
import { take } from 'rxjs/operators';
import { AuthService } from './../../Service/auth.service';
import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() profile;

  uploader: FileUploader;
  hasBaseDropZoneOver: false;
  baseUrl = environment.apiUrl;
  user: User;
  constructor(private auth: AuthService) {
    this.auth.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.initializeUploader();
  }
  fileOverBase(e: any) {
    this.hasBaseDropZoneOver = e;
  }
  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'Service/add-photo',
      authToken: 'Bearer ' + this.user.token,
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    }
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const photo = JSON.parse(response);
        this.profile.photos.push(photo);
        if (photo.isMain) {
          this.user.photoUlr = photo.url;
          this.profile.photoUrl = photo.url;
          this.auth.setcurrentuser(this.user);
          //  }
        }
      }
    }
  }
}