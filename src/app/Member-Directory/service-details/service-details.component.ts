import { Profile } from 'src/app/Models/profile';
import { AppuserService } from './../../Service/appuser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})

export class ServiceDetailsComponent implements OnInit {
  profile: Profile;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private appuser: AppuserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getprofile();
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];


  }


  getimages(): NgxGalleryImage[] {
    const imageUrl = [];
    for (const photo of this.profile.photos) {
      imageUrl.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url,
      })
    }
    return imageUrl;
  }


  getprofile() {
    this.appuser.getprofile(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe(spro => {
      this.profile = spro;
      this.galleryImages = this.getimages();
    })
  }
}
