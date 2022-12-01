import { Courses } from './Course.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  private courses: Courses[] = [
    {
      id: 1,
      name: 'TypeScript',
      description: 'Type do 0 ao global',
      price: 10000,
      tags: ['typescript', 'js', 'node'],
      avaliable: true,
    },
    {
      id: 2,
      name: 'Node.Js',
      description: 'O melhor node js',
      price: 10000,
      tags: ['js', 'node'],
      avaliable: true,
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: number | string) {
    const course = this.courses.find(
      (course: Courses) => course.id === Number(id),
    );

    if (!course) {
      throw new HttpException(
        `Course id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return course;
  }

  create(createCourse: Courses) {
    this.courses.push(createCourse);
  }

  update(id: string | number, updateCourse: Courses) {
    const indexCourse = this.courses.findIndex(
      (course: Courses) => course.id === Number(id),
    );

    this.courses[indexCourse] = updateCourse;
  }

  delete(id: string | number) {
    const indexCourse = this.courses.findIndex(
      (course: Courses) => course.id === Number(id),
    );

    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 0);
    }
  }
}
