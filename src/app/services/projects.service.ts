import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly af:AngularFirestore) { }

  /**
   * GetProjectsWithCategory
   */
  public GetProjectsWithCategory(category:string) {
    return this.af.collection('category', (qn) => qn.where('project_name', '==',category)).valueChanges({idField:'id'})
  }

}
