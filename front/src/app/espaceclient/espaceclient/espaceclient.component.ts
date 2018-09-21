import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-espaceclient',
  templateUrl: './espaceclient.component.html',
  styleUrls: ['./espaceclient.component.css']
})
export class EspaceclientComponent implements OnInit {

  public selectedMovie: string;


  constructor() {
    this.selectedMovie = 'https://www.youtube.com/embed/otMtaSKVU6s';
  }

  ngOnInit(): void {

  }

  changeSelectedVideo(): void {
    console.log("selected video change");
  }


}





//
//
// search = '';
// movies: Movie [] = [];
// allmovies: Movie[] = [];
// constructor() {
// }
//
// ngOnInit() {
//   this.allmovies.push(new Movie('local', 'liga', 'Leganes - Fc Barcelone', 'https://www.youtube.com/embed/0H-vMfG8HMY'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/eoXSw1U07Oc'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.allmovies.push(new Movie('local', 'liga', 'barça - valence', 'https://www.youtube.com/embed/plxsUf05JdA'));
//   this.movies = this.allmovies.filter(item => item.title.length > 0);
// }
//
// launchSearch() {
//   console.log('clic sur rechercher ' + this.search);
//   this.movies = this.allmovies.filter( item => item.title.startsWith(this.search));
// }
//
// changeSearch() {
//   console.log('test change réussi' + this.search);
//   this.movies = this.allmovies.filter( item => item.title.startsWith(this.search));
//
// }
