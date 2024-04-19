import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnChanges,OnInit {
 @Input() userName :String = "";

ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChange life cycle method will excute whenever the input changes : ",changes)
}
ngOnInit(): void {
    console.log("ngOnInit life cycle hook will excute after constructor is being excuted")
}
}
