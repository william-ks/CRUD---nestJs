import { CoursesService } from './courses.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get('list')
  findAll() {
    return this.coursesService.findAll();
  }

  @Get('list/:id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.coursesService.create(body);
  }

  @Put()
  update(@Param('id') id: number, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coursesService.delete(id);
  }
}
