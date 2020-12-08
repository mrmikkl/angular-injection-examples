import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../service/simple.service';

@Component({
  selector:    'app-easy-injection',
  templateUrl: './easy-injection.component.html',
  styleUrls:   ['./easy-injection.component.scss']
})
export class EasyInjectionComponent implements OnInit {

  constructor(private horstService: SimpleService) {
  }

  ngOnInit(): void {
  }

  printName(): string {
    return this.horstService.name();
  }
}
