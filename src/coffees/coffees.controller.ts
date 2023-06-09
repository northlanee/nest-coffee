import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private coffeesService: CoffeesService) {}

  @Get('/')
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }

  @Post('/')
  create(@Body() body: CreateCoffeeDto) {
    return this.coffeesService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: number, @Body() body: UpdateCoffeeDto) {
    return this.coffeesService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.coffeesService.delete(id);
  }
}
