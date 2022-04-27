import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Project } from 'src/app/models/Project.model';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-choose-type-project',
  templateUrl: './choose-type-project.component.html',
  styleUrls: ['./choose-type-project.component.scss'],
})
export class ChooseTypeProjectComponent implements OnInit {
  project$!: Observable<any>;
  constructor(
    private serviceProject: ProjectsService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ShowProjects();
  }

  /**
   * ShowProjects
   */
  public ShowProjects() {
    // this.project$ = this.serviceProject.GetProjectsWithCategory("movil");
    // this.project$.subscribe(console.log);

    this.project$ = this.activateRoute.params.pipe(
      map((params) => params['id']),
      switchMap((categoria: string) =>
        this.serviceProject.GetProjectsWithCategory(categoria)
      )
    ) as Observable<(Project & { id: string })[]>;
  }
}
