import { Controller, Get, Post, Delete, Body, Param, Put, Logger, UseGuards, Query } from '@nestjs/common';
import { SearchDTO } from './search.dto';
import { SearchService } from './search.service';

@Controller('api/search')
export class SearchController {
  constructor(
    private searchService: SearchService,
  ) {}

  @Post()
  find(@Body() body: Partial<SearchDTO> ) {
    return this.searchService.find(body);
  }


//   documentTypes: []
// folders: []
// industries: ["3906b0c7-9f21-4d5f-98cd-f2b27496e8a5"]
// materialTypes: []
// regions: []
// requestedString: "klkll;"
// searchInBoxSolutions: false
// searchInDocuments: false
// searchInPsrObjects: true


  // @Get(':id')
  // read(@Param('id') id: string) {
  //   return this.tagService.read(id);
  // }

  // @Post()
  // //@UseGuards(new AuthGuard())
  // create(@Body() data: TagDTO ) {
  //   return this.tagService.create(data);
  // }

  // @Delete(':id')
  // destroy(@Param('id') id: string) {
  //   return this.tagService.destroy(id);
  // }

}
