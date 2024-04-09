import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css'],
})
export class VerComponent {
  id_producto = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id_producto = params['id'];
    });
  }
}
