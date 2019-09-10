import { Resolver, Query, Args, ResolveProperty, Parent, Mutation, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserDTO } from '../user/user.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private authService: AuthService,

  ) {

  }

  @Query()
  signIn(
    @Args('authCredentalsDTO') authCredentalsDTO: UserDTO,
  ): Promise<any>  {
    console.log('authCredentalsDTO ==> ', authCredentalsDTO);
    return this.authService.signIn(authCredentalsDTO);
  }



  // @Query()
  // psrobject(@Args('id') id: string) {
  //   return this.psrobjectService.read(id);
  // }

  // @ResolveProperty()
  // tags(@Parent() psrobject) {
  //   const {id} = psrobject;
  //   return this.tagService.getTagsByPsrObject(id);
  // }

  // @ResolveProperty()
  // type(@Parent() psrobject) {
  //   const {id} = psrobject;
  //   return this.typeService.getTypesByPsrObject(id);
  // }

  // @ResolveProperty()
  // department(@Parent() psrobject) {
  //   const {id} = psrobject;
  //   return this.dictionaryService.getDepartmentByPsrObject(id);
  // }

  // @ResolveProperty()
  // region(@Parent() psrobject) {
  //   const {id} = psrobject;
  //   return this.dictionaryService.getRegionByPsrObject(id);
  // }
}
