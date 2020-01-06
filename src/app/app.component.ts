import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addCat='';
  addTodo='';
  openTodo=-1;
 listOfCats = [{name:'Tools',isExpand:false,tasks:[{name:'task1',isCompleted:true},{name:'task2',isCompleted:false}]},
 {name:'Groceries',isExpand:false,tasks:[{name:'Milk',isCompleted:false},{name:'Egg',isCompleted:true}]},
 {name:'Home Upgrades',isExpand:false,tasks:[{name:'task1',isCompleted:false},{name:'task2',isCompleted:false}]},];
 handleAddCat(){
  this.listOfCats = [...this.listOfCats,{name:this.addCat,isExpand:false,tasks:[{name:'task1',isCompleted:false}]}];
  this.addCat='';
 }
 handleAddTodo(index){
   this.listOfCats[index].tasks.push({name:this.addTodo,isCompleted:false});
   this.addTodo='';
 }
 handleChange(event){
   console.log('change',event.target.value);
   this.addTodo=event.target.value;
 }
 handleExpansion(index,value){
this.openTodo = index;
this.listOfCats[index].isExpand=value;
 }
 handleDeleteButton(index){
  this.listOfCats.splice(index,1);
 }
 handleDeleteTodo(index,todoIndex){
  this.listOfCats[index].tasks.splice(todoIndex,1);
 }
}
